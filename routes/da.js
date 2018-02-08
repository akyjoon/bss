const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Load DB Model
require('../models/Client');
const Client = mongoose.model('client');
require('../models/DetailAgreement');
const Detail = mongoose.model('detail');
require('../models/Service');
const Service = mongoose.model('service');


router.get('/', (req, res) => {
  Detail.find({})
    .populate('client')
    .populate('service')
    .then(details => {
      res.render('detailAgreements/all_details', {
        details: details
      })
    })
})








module.exports = router;