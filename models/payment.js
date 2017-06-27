let mongoose = require('mongoose')
require('mongoose-type-url')
let Schema = mongoose.Schema

let PaymentSchema = new Schema({
  _id: String,
  title: String,
  language: String,
  topHeader: String,
  topSubheader: String,
  leftHeader: String,
  leftSubheader: String,
  rightHeader: String,
  rightSubheader: String,
  text: String,
  sections: [
    {
      title: String,
      subsections: [
        {
          text: String,
          price: String
        }
      ]
    }
  ]
})

module.exports = mongoose.model('Payments', PaymentSchema, 'Payments')
