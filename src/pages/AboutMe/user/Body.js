import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  const section = data.aboutMe
  return (
    (section) ?
      <section id="aboutMeBody">
          <div><p>{section.text}</p></div>
          <div>
              <img src="img/polishuk.png" alt="Polishuk" className="flipImg"/>
          </div>
      </section> : null
  )
})
