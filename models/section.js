let mongoose = require('mongoose')
require('mongoose-type-url')
let Schema = mongoose.Schema

let SectionSchema = new Schema({
  _id: String,
  title: String,
  language: String,
  header: String,
  subheader: String,
  text: String
})

module.exports = mongoose.model('Sections', SectionSchema, 'Sections')
