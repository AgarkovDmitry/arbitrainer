import React from 'react'
import { observer } from 'mobx-react'


export default observer(({ data }) => {
  return (
    <section id="whyMe">
      <div className="left">
        <h2>{data.whyMe.header}</h2>
        <p>{data.whyMe.subheader}</p>
      </div>
      <div className="right"><p>{data.whyMe.text}</p></div>
    </section>
  )
})
