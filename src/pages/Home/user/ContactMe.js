import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="contactMe">
      <div>
        <h2>
          <span>{data.contactMe.header}</span>
          <br/>
          {(data.contactMe.subheader || '').split('\n').map((item, key) =>
            <div key={key}>
              {item}
              <br/>
            </div>
          )}
        </h2>
        <a href="#sendMe"><div className="sendButton">{data.buttons.contact}</div></a>
        <div className="adv">
          {(data.contactMe.post || '').split('\n').map((item, key) =>
            <p key={key}>
              {item}
              <br/>
            </p>
          )}
        </div>
        <p className="pol">{data.contactMe.name}</p>
      </div>
      <div className="contactImg">
        <img src="img/polishuk.png" alt="Polishuk"/>
      </div>
    </section>
  )
})
