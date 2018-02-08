const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PriceListSchema = new Schema({
  serviceName: String,
  parameter: [{
    param: String,
    monthlyFee: Number,
    oneTimeFee: Number,
  }],
  slaTop: {
    apply: String,
    addFee: Number
  },
  discounts: {
    localDiscount: {
      nga: Number,
      small:{
        min: Number,
        max: Number,
        percentage: Number
      },
      mid: {
        min: Number,
        max: Number,
        percentage: Number
      },
      big: {
        min: Number,
        max: Number,
        percentage: Number
      },
      large: {
        min: Number,
        max: Number,
        percentage: Number
      }
    }
  }
})

mongoose.model('priceList', PriceListSchema);