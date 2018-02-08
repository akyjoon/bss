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

//static path
app.use(express.static(path.join(__dirname, 'public')));


//Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://akyjoon:Qangelo1232@ds217138.mlab.com:17138/bss')
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));

//Middleware configurations
//----Handlebars
app.engine('handlebars', handlebars({
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

app.get('/json', (req, res) => {
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

//listen on port
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})