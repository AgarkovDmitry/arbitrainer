import { action, observable } from 'mobx'

import Payments from '../requests/Payments'

class PaymentStore {
  @observable topHeader
  @observable topSubheader
  @observable leftHeader
  @observable leftSubheader
  @observable text
  @observable rightHeader
  @observable rightSubheader
  @observable sections
  title
  language
  history

  callback = res => {
    for(let key in res.body) this[key] = res.body[key]
    this._id = undefined
    this.sections = res.body.sections.map(item => {
      return { ...item, isShown: false, open: item => item.isShown = !item.isShown }
    })
  }

  fetchData = () => {
    Payments.get({ language: this.language, title: this.title }).then(this.callback)
  }

  updateData = () => {
    let payment = {
      ...this,
      history: undefined,
      sections: this.sections.map(item => {
        return { ...item, isShown: undefined, open: undefined }
      })
    }
    Payments.put({ language: this.language, title: this.title }, payment).then(this.callback)
  }

  constructor(language, history, title){
    this.language = language
    this.history = history
    this.title = title
    this.fetchData()
  }

  @action translate = language => {
    this.language = language
    this.fetchData()
  }

  @action navigate = route => this.history.push(route)
}

export default PaymentStore
