import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  const section = data.aboutMe
  return (
    (section) ?
      <section id="aboutMeTitle">
          <h2>{section.header}</h2>
          <p className="underHeader">{section.subheader}</p>
      </section> : null
  )
})
