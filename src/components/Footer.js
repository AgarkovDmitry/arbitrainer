import React from 'react'
import { observer } from 'mobx-react'

import Modal from './Modal'

export default observer(({ store }) => {
  return (
    <footer>
        <p>Disclaimer  Site Map  <wbr/>       &copy; 2016 <a href="http://polishchuk.com">polishchuk.com</a> <wbr/> All rights reserved</p>
        {!store.auth &&
        <Modal store={store} submit={() => {
            const inputs = Array.prototype.slice.call(document.getElementsByClassName('loginInput')).map(item => item.value)
            if(inputs[0] == 'Admin' && inputs[1] == '1111') {
              store.auth = true
              return true
            }
            else return false
          }}>
          <div className="loginForm" style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '5%',
              marginLeft: '30%',
            }}>
              <input placeholder='Логин' style={{
                  border: 'none',
                  borderBottom: '2px solid black',
                  fontSize: '1.71vw',
                  lineHeight: '1.42',
                  letterSpacing: '0.6px',
                  textAlign: 'justify',
                  color: '#0f1d3e',
                  width: '17.71vw'
                }} className='loginInput'/>
              <input type='password' placeholder='Пароль' style={{
                  border: 'none',
                  borderBottom: '2px solid black',
                  fontSize: '1.71vw',
                  lineHeight: '1.42',
                  letterSpacing: '0.6px',
                  textAlign: 'justify',
                  color: '#0f1d3e',
                  width: '17.71vw'
                }} className='loginInput'/>
          </div>
        </Modal>}
    </footer>
  )
})
