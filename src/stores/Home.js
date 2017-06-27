import { action, computed, observable } from 'mobx'

import Homes from '../requests/Homes'
import Images from '../requests/Images'
import Mail from '../requests/Mail'

class HomeStore {
  @observable buttons = {}
  @observable sendMeForm = {}
  @observable firstPlates = []
  @observable secondPlates = []
  @observable thirdPlates = []
  @observable review = ''
  @observable contactMe = {}
  @observable whyMe = {}
  @observable clients = {}
  @observable specialise = {}
  @observable testemonials = []
  @observable currentIndex = 0
  @observable protect = {}
  @observable aboutMe = {}
  @observable sendMe = {}
  @observable sendMeData = {}
  inteval
  language
  history

  callback = res => {
    for(let key in res.body) this[key] = res.body[key]
    this._id = undefined
    this.sendMeData = {
      error: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      body: ''
    }
  }

  fetchData = () => {
    Homes.get({ language: this.language }).then(this.callback)
  }

  updateData = () => {
    let home = {
      ...this,
      history: undefined,
      sendMeData: undefined,
      buttons: undefined,
      sendMeForm: undefined,
      firstPlates: undefined,
      secondPlates: undefined,
      thirdPlates: undefined,
      review: undefined,
      inteval: undefined,
      currentIndex: undefined
    }
    Homes.put({ language: this.language }, home).then(this.callback)
  }

  constructor(language, history){
    this.language = language
    this.history = history
    this.fetchData()
    this.interval = setInterval(() => this.nextIndex(), 3000)
  }

  @action translate = language => {
    this.contactMe = {}
    this.whyMe = {}
    this.clients = {}
    this.specialise = {}
    this.testemonials = []
    this.protect = {}
    this.aboutMe = {}
    this.sendMe = {}
    this.language = language
    this.fetchData()
  }

  @action navigate = route => this.history.push(route)

  @action nextIndex = () => this.setIndex( (this.testemonials) ? (this.currentIndex + 1) % this.testemonials.length : this.currentIndex)

  @action setIndex = index => this.currentIndex = index

  @computed get currentTestemonial(){
    if(this.testemonials.length == 0) return {}
    else return this.testemonials[this.currentIndex] || this.testemonials[0]
  }

  @action updateMailData = (field, value) => this.sendMeData[field] = value

  @action sendMail = () => {
    if(this.sendMeData.name.trim().length < 1) this.sendMeData.error = 'Все поля обязательны для заполнения'
    else if(this.sendMeData.surname.trim().length < 1) this.sendMeData.error = 'Все поля обязательны для заполнения'
    else if(this.sendMeData.phone.trim().length < 12) this.sendMeData.error = 'Все поля обязательны для заполнения'
    else if(this.sendMeData.email.trim().length < 7) this.sendMeData.error = 'Все поля обязательны для заполнения'
    else if(this.sendMeData.body.trim().length < 1) this.sendMeData.error = 'Все поля обязательны для заполнения'
    else Mail.post(this.sendMeData)
  }

  @action uploadImage = file => Images.post(file)
}

export default HomeStore
