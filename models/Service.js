const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: String,
  parameter: String,
  length: Number,
  slaTop: Boolean,
  price: Number,
  localization: [{
    powiat: String,
    gmina: String,
    city: String
  }],
  client: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  },
  detailAgreement: {
    type: Schema.Types.ObjectId,
    ref: 'detail'
  },
  activated: {
    activation: Boolean,
    date: Date
  }
});

mongoose.model('service', ServiceSchema);