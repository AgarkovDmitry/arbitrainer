import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router'

import './assets/styles/reset.css'
import './assets/styles/style.css'
import './assets/styles/media.css'

import createBrowserHistory from 'history/createBrowserHistory'
import MainStore from './stores/Main'

import Header from './components/Header'
import Footer from './components/Footer'

const browserHistory = createBrowserHistory()
const store = window.store = new MainStore(browserHistory)

let loadHome = cb => require.ensure([], require => cb(require('./pages/Home')), 'Home')
let loadAbout = cb => require.ensure([], require => cb(require('./pages/AboutMe')), 'AboutMe')
let loadPayment = cb => require.ensure([], require => cb(require('./pages/Payment')), 'Payment')

class Bundle extends React.Component {
  state = { Component: null }

  componentWillMount() {
    this.props.load(Component => this.setState({ Component }))
  }

  render() {
    const { Component } = this.state
    return ( Component ? <Component {...this.props} /> : null )
  }
}

const Home = () => <Bundle load={loadHome} store={store}/>
const About = () => <Bundle load={loadAbout} store={store}/>
const Payment = ({ match }) => <Bundle load={loadPayment} store={store} title={match.params.title}/>

render(
  <Router history={browserHistory}>
    <div>
      <Header store={store}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/payment/:title' component={Payment}/>
      </Switch>
      <Footer store={store}/>
    </div>
  </Router>, document.getElementById('Main')
)
