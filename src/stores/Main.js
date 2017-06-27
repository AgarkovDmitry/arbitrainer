import cookie from 'react-cookie'
import { action, observable } from 'mobx'

class MainStore {
  @observable language
  @observable pageTitle
  @observable data
  @observable auth = false
  history

  constructor(history){
    this.language = cookie.load('language') || 'ua'
    this.history = history
  }

  @action setPageStore = (page, title, nested) => {
    this.data = new page(this.language, this.history, nested)
    this.pageTitle = title
  }

  @action translate = newLanguage => {
    cookie.save('language', this.language = newLanguage)
    this.data.translate(this.language)
  }

  @action navigate = route => this.history.push(route)
}

export default MainStore
