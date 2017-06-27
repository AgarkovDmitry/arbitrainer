import React from 'react'
import { observer } from 'mobx-react'

import Selector from './Selector'

const payment = {
  en: 'PAY ONLINE',
  ru: 'ОПЛАТА УСЛУГ',
  ua: 'СПЛАТА ПОСЛУГ'
}

const specialise = {
  en: 'PRACTICE AREAS',
  ru: 'СПЕЦИАЛИЗАЦИЯ',
  ua: 'СПЕЦІАЛІЗАЦІЯ'
}

const about = {
  en: 'ABOUT ME',
  ru: 'ОБО МЕНЕ',
  ua: 'ПРО МЕНЕ'
}

const contacts = {
  en: 'CONTACT',
  ru: 'КОНТАКТЫ',
  ua: 'КОНТАКТИ'
}

export default observer(({ store }) => {
  return (
    <header>
        <a className='navbar-brand' onClick={() => store.navigate('/')}><img src='../img/logo.svg' alt='logo'/></a>
        <div className='navWrapper'>
          <nav id='nav'>
            <a className='navLinks' onClick={() => store.navigate('/payment/IT')}>{payment[store.language]}</a>
            <a className='navLinks' onClick={() => {
                store.navigate('/')
                if(!store.auth) setTimeout(() => {
                  const sections = Array.prototype.slice.call(document.getElementsByTagName('section'))
                  const index = sections.map(item => item.id).indexOf('specialise')
                  const height = sections.filter((item, key) => key < index).map(item => item.offsetHeight).reduce((a, b) => a + b)
                  document.body.scrollTop = height - document.getElementsByTagName('header')[0].offsetHeight
                }, 100)
              }}>{specialise[store.language]}</a>
            <a className='navLinks' onClick={() => store.navigate('/about')}>{about[store.language]}</a>
            <a className='navLinks' onClick={() => {
                store.navigate('/')
                if(!store.auth) setTimeout(() => {
                  const sections = Array.prototype.slice.call(document.getElementsByTagName('section'))
                  const index = sections.map(item => item.id).indexOf('sendMe')
                  const height = sections.filter((item, key) => key < index).map(item => item.offsetHeight).reduce((a, b) => a + b)
                  document.body.scrollTop = height - document.getElementsByTagName('header')[0].offsetHeight
                }, 100)
              }}>{contacts[store.language]}</a>
          </nav>
          <Selector store={store}/>
          <a onClick={() => {
            if($(window).width() <= 425) {
                if ($('#nav').css('display') == 'none'){
                    $('#nav').insertAfter($('header'))
                    $('#nav').css({
                        'z-index': '500',
                        'position': 'fixed',
                        'width': '100%',
                        'display': 'flex',
                        'flex-direction': 'column',
                        'background-color': '#19c3c1',
                        'margin': '0',
                        'padding-bottom': '20px'
                    })
                    $('.navLinks').css({ 'font-size': '6.5vw' })
                }
                else $('#nav').css({ 'display': 'none' })
                return false
            }
            else {
              $('#nav').toggle()
              return false
            }
            }}><img src='../img/menu.svg' alt='menu' className='menuButton'/></a>
        </div>
    </header>
  )
})
