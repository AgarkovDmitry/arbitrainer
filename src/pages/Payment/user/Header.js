import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="itCompanies">
      <h2>{data.topHeader}</h2>
      <p className="underHeader">{data.topSubheader}</p>
    </section> : null
  )
})
