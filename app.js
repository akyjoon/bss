const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
methodOverride = require('method-override'),
mongoose = require('mongoose'),
handlebars = require('express-handlebars');

const app = express();

//Load DB model
require('./models/Client')
const Client = mongoose.model('client');
require('./models/Locations');
const Location = mongoose.model('location')

//static path
app.use(express.static(path.join(__dirname, 'public')));

//Load Keys
const keys = require('./config/keys')
//Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));

//Middleware configurations
//----Handlebars
const {total} = require('./helpers/hbs');
app.engine('handlebars', handlebars({
  // helpers: {
  //   total: total
  // },
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//----bodyparser
app.use(bodyParser.urlencoded({extended: false}));

//----method override
app.use(methodOverride('_method'));



//Index route
app.get('/', (req, res) => {
  
  Client.find({})
  .then(clients => {
    res.render('./overview/overview', {
      clients: clients
    })
  })
});


//send client data and receive on front-end
app.get('/json/clients', (req, res) => {
  Client.find({})
    .then(clients => {
      res.json(clients)
    })
})



//Load router and use router
const clients = require('./routes/clients');
app.use('/clients', clients);

const da = require('./routes/da');
app.use('/da', da);

const priceList = require('./routes/priceList');
app.use('/priceList', priceList)


// const allLocations = require('./locations')
// Location.collection.insertMany(allLocations)



//listen on port
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})