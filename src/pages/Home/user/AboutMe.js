import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="aboutMe">
      <div className="aboutMeImg">
        <img src="img/polishuk.png" alt="Polishuk" className="flipImg"/>
      </div>
      <div className="aboutMeText">
        <h2>{data.aboutMe.header}</h2>
        <p className="underHeader">{data.aboutMe.subheader}</p>
        <p>{data.aboutMe.text}</p>
        <a onClick={() => data.navigate('/about')}><div>{data.buttons.details}<img src="img/pic-arrow-wht.svg" alt="arrow"/></div></a>
      </div>
    </section>
  )
})
