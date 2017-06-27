import React from 'react'
import { observer } from 'mobx-react'

@observer
class Selector extends React.Component {
  state = { isOpened: false }

  render () {
    return (
      <div onKeyDown={e => {
          if (e.keyCode == 13){
            let fl = this.props.submit()
            if(fl == true) this.setState({ isOpened: false })
            else document.getElementById('valid-error').innerHTML = 'Неправильный пароль'
          }
        }}>
        <a onClick={() => this.setState({ isOpened: true })}><img src="../img/key.png" alt="key"/></a>
        {
          this.state.isOpened && <div>
            <div style={{
              top: '0vh',
              left: '0vh',
              position: 'fixed',
              fontSize: '90px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: '100vw',
              height: '100vh'
            }} onClick={() => this.setState({ isOpened: false })}/>
            <div style={{
              backgroundColor: 'white',
              position: 'fixed',
              top: '30vh',
              left: '28vw',
              width: '45vw',
              height: '25vh'
            }}>
              {this.props.children}
              <div className="buttons-bar" style={{ marginTop: '2%', marginLeft: '35%' }}>
                  <button className="submit-button" onClick={() => {
                      let fl = this.props.submit()
                      if(fl == true) this.setState({ isOpened: false })
                      else document.getElementById('valid-error').innerHTML = 'Неправильный пароль'
                    }}>Войти в систему</button>
                  <button className="submit-button" onClick={() => this.setState({ isOpened: false })}>Отмена</button>
              </div>
              <span id='valid-error' style={{ color: 'red', marginLeft: '35%' }}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Selector
