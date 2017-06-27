import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <div className="left">
      <h2>{data.leftHeader}</h2>
      <p className="underHeader">{data.leftSubheader}</p>
      {
        data.text && data.text.split('\n').map((item, key) => <p key={key}>{item}</p>)
      }
    </div> : null
  )
})
