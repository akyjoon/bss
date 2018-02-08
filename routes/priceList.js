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
require('../models/PriceList');
const PriceList = mongoose.model('priceList')


//get pricelist page
router.get('/', (req, res) => {
  PriceList.find({})
    .then(priceList => {
      res.render('priceList/price_list', {
        priceList: priceList
      })
    })
})

//add pricelist
router.post('/', (req, res) => {
  const newPriceList = {
    serviceName: req.body.serviceName,
    parameter: [],
    'slaTop.apply': req.body.applySlaTop,
    //small
    'discounts.localDiscount.small.min': req.body.smallMin,
    'discounts.localDiscount.small.max': req.body.smallMax,
    'discounts.localDiscount.small.percentage': req.body.smallPercentage,
    //mid
    'discounts.localDiscount.mid.min': req.body.midMin,
    'discounts.localDiscount.mid.max': req.body.midMax,
    'discounts.localDiscount.mid.percentage': req.body.midPercentage,
    //big
    'discounts.localDiscount.big.min': req.body.bigMin,
    'discounts.localDiscount.big.max': req.body.bigMax,
    'discounts.localDiscount.big.percentage': req.body.bigPercentage,
    //large
    'discounts.localDiscount.large.min': req.body.largeMin,
    'discounts.localDiscount.large.max': req.body.largeMax,
    'discounts.localDiscount.large.percentage': req.body.largePercentage
  }
  //do sth about it!!
  for(var i = 0; i < req.body.parameter.length; i++) {
    var params = {
      param: req.body.parameter[i],
      monthlyFee: req.body.monthlyFee[i],
      oneTimeFee: req.body.oneTimeFee[i]
    }
    newPriceList.parameter.push(params)
  }

  new PriceList(newPriceList)
    .save()
    .then(priceList => {
      res.redirect('/priceList')
    })

})


module.exports = router;