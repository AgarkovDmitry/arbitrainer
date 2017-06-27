import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="protect">
      <div className="protectText">
        <h2>{data.protect.header}</h2>
        <p className="underHeader">{data.protect.subheader}</p>
        <p>{data.protect.text}</p>
      </div>
      <div className="protectImg"/>
    </section>
  )
})
