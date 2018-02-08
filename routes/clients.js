const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

//Load DB Model
require('../models/Client');
const Client = mongoose.model('client');

require('../models/DetailAgreement');
const Detail = mongoose.model('detail');

require('../models/Service');
const Service = mongoose.model('service');

require('../models/PriceList');
const PriceList = mongoose.model('priceList')


//client page
router.get('/', (req, res) => {
  Client.find({})
    .populate('detail')
    .populate('service')
    .then(clients => {
      Client.find({})
        .sort({
          'frameAgreement.signDate': 'desc'
        })
        .then((recentClient) => {
          res.render('./clients/clients', {
            clients: clients,
            recentClient: recentClient
          })
        })
    })
})


//get add client page
router.get('/add_client', (req, res) => {
  res.render('./clients/add_client')
})

//add client
router.post('/add_client/add', (req, res) => {
  const newClient = {
    name: req.body.name,
    'frameAgreement.number': req.body.frameAgreement,
    'frameAgreement.signDate': req.body.frameAgreementDate,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone
  }
  new Client(newClient)
    .save()
    .then(client => {
      res.redirect('/')
    })
})

//show individual client
router.get('/show/:id', (req, res) => {
  Client.findOne({
      _id: req.params.id
    })
    .populate('detailAgreements')
    .populate('services')
    .then(client => {
      PriceList.find({})
      .then(priceList=> {
        res.render('clients/show', {
          client: client,
          priceList: priceList
        })
      }
      )
    })
})

//add detail agreement for individual client
router.post('/show/:id', (req, res) => {
  Client.findOne({
      _id: req.params.id
    })
    .then(client => {

      const newDetail = new Detail({
        number: req.body.detailAgreement,
        client: client._id,
        time: req.body.time,
        date: req.body.date
      })

      client.detailAgreements.unshift(newDetail);

      const newService = new Service({
        name: req.body.serviceName,
        parameter: req.body.serviceParameter,
        length: req.body.serviceLength,
        slaTop: req.body.slaTop,
        client: client._id,
        detailAgreement: newDetail._id
      })
      newDetail.services.unshift(newService);

      newDetail.save((err) => {
        if (err) {
          console.log(err)
        }
        newService.save((err) => {
          if (err) {
            console.log(err)
          }
          client.services.unshift(newService)
          client.save()
            .then(client => {
              client.save()
                .then(client => {
                  res.redirect(`/clients/show/${client.id}`)
                })
            })

        })

      })


    })
})



module.exports = router;