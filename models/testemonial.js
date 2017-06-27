let mongoose = require('mongoose')
require('mongoose-type-url')
let Schema = mongoose.Schema

let TestemonialSchema = new Schema({
  _id: String,
  language: String,
  name: String,
  post: String,
  header: String,
  body: String,
  url: String
})

module.exports = mongoose.model('Testemonials', TestemonialSchema, 'Testemonials')
