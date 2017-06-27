import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="sendMe">
      <div className="sendMeWindow">
        <div className="sendMeForm">
          <h2>{data.sendMeForm.header}</h2>
          <form>
              <input defaultValue={data.sendMeData.name} placeholder={data.sendMeForm.name} onChange={e => data.updateMailData('name', e.target.value)}/>
              <input defaultValue={data.sendMeData.surname} placeholder={data.sendMeForm.surname} onChange={e => data.updateMailData('surname', e.target.value)}/>
              <input defaultValue={data.sendMeData.phone} placeholder={data.sendMeForm.phone} onChange={e => data.updateMailData('phone', e.target.value)}/>
              <input defaultValue={data.sendMeData.email} placeholder={data.sendMeForm.email} onChange={e => data.updateMailData('email', e.target.value)}/>
              <textarea defaultValue={data.sendMeData.body} placeholder={data.sendMeForm.body} onChange={e => data.updateMailData('body', e.target.value)}/>
          </form>
          <span style={{color: 'red'}}>{data.sendMeData.error}</span>
          <a onClick={() => data.sendMail()}><div>{data.buttons.send}<img src="img/pic-arrow-wht.svg" alt="arrow"/></div></a>
        </div>
        <div className="sendMeContacts">
          <div className="sendProf">
            {(data.sendMe.post || '').split('\n').map((item, key) =>
              <p key={key}>
                {item}
                <br/>
              </p>
            )}
          </div>
          <p className="sendName">{data.sendMe.name}</p>
          <a href="mailto:Polischuk@gmail.com" className="sendMail">{data.sendMe.mailto}</a>
          <a href="tel:+380509056279" className="sendTel">{data.sendMe.phone1}</a>
          <a href="tel:+380509056279" className="sendTel">{data.sendMe.phone2}</a>
        </div>
      </div>
    </section>
  )
})
