const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClientSchema = new Schema({
  name: String,
  uke: Number,
  KRS: String,
  frameAgreement: {
    number: String,
    signDate: Date
  },
  detailAgreements: [{
    type: Schema.Types.ObjectId,
    ref: 'detail'
  }],
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'service'
  }],
  revenue: Number,
  address: String,
  email: String,
  phone: String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('client', ClientSchema);