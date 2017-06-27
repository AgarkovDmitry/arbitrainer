let mongoose = require('mongoose')
require('mongoose-type-url')
let Schema = mongoose.Schema

let HometSchema = new Schema({
    _id: String,
    language: String,
    buttons: {
        details: String,
        send: String,
        contact: String
    },
    sendMeForm: {
        header: String,
        name: String,
        surname: String,
        phone: String,
        email: String,
        body: String
    },
    firstPlates: [
        {
            route: String,
            img: String,
            alt: String,
            class: String,
            header1: String,
            header2: String,
            header3: String
        }
    ],
    secondPlates: [
        {
            route: String,
            class: String,
            header1: String,
            header2: String
        }
    ],
    thirdPlates: [
        {
            route: String,
            header1: String,
            header2: String
        }
    ],
    review: String,
    contactMe: {
        header: String,
        subheader: String,
        post: String,
        name: String
    },
    whyMe: {
        header: String,
        subheader: String,
        text: String
    },
    clients: {
        header: String,
        subheader: String
    },
    specialise: {
        header: String,
        subheader: String
    },
    testemonials: [
        {
            name: String,
            post: String,
            header: String,
            text: String,
            url: String
        }
    ],
    protect: {
      header: String,
      subheader: String,
      text: String
    },
    aboutMe: {
      header: String,
      subheader: String,
      text: String
    },
    sendMe: {
        post: String,
        name: String,
        mailto: String,
        phone1: String,
        phone2: String
    }
})

module.exports = mongoose.model('Homes', HometSchema, 'Homes')
