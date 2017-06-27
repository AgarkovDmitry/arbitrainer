const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const multer = require('multer')

const app = express()
const upload = multer({ dest: 'media' })

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:lk19871131@ds019143.mlab.com:19143/arbitrainer')
let Payment = require('./models/payment')
let Home = require('./models/home')

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dioxs.7z@gmail.com',
        pass: 'Dio190496'
    },
    tls: {
        rejectUnauthorized: false
    }
})

if(process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpack = require('webpack')
  const config = require('./webpack.config')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let router = express.Router()
router.route('/images')
  .post(upload.single('image'), (req, res) => {
    fs.rename(req.file.path, req.file.path + '.' + req.file.originalname.split('.')[1])
    res.json({ path: req.file.path + '.' + req.file.originalname.split('.')[1] })
  })
  .delete((req, res) => {
    const query = JSON.parse(req.query.query)
    fs.unlink(query.path)
    res.json('deleted')
  })

router.route('/mail')
  .post((req, res) => {
    let mailOptions = {
        to: 'dioxs.7z@gmail.com',
        subject: 'App question',
        text: 'Имя: ' + req.body.name + '\n' +
              'Фамалия: ' + req.body.surname + '\n' +
              'Телефон: ' + req.body.phone + '\n' +
              'Email: ' + req.body.email + '\n' +
              'Коментарий: ' + req.body.body
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.json(error)
        res.json(info)
    })
  })

router.route('/payments')
  .get((req, res) => {
    const query = JSON.parse(req.query.query)
    Payment.findOne(query).then(result => res.json(result))
  })
  .put((req, res) => {
    const query = JSON.parse(req.query.query)
    Payment.update(query, req.body).then(() =>
      Payment.findOne(query).then(result => res.json(result))
    )
  })

router.route('/homes')
  .get((req, res) => {
    const query = JSON.parse(req.query.query)
    Home.findOne(query).then(result => res.json(result))
  })
  .put((req, res) => {
    const query = JSON.parse(req.query.query)
    Home.update(query, req.body).then(() =>
      Home.findOne(query).then(result => res.json(result))
    )
  })

app.use('/api', router)
app.get('/image/media/:name', (req, res) => res.sendFile(__dirname + '/media/' + req.params.name))
app.get('/*', (req, res) => { res.sendFile(__dirname + '/dist/index.html')})

app.listen(process.env.PORT || 5000)
