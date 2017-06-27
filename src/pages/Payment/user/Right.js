import React from 'react'
import { observer } from 'mobx-react'

import Section from './Section'

export default observer(({ data }) => {
  return (
    <div className="right">
        <h2>{data.rightHeader}</h2>
        <p className="underHeader">{data.rightSubheader}</p>
        <div className="accordion-container">
        {
          data.sections && data.sections.map((item, key) => <Section section={item} key={key}/>)
        }
        </div>
    </div> : null
  )
})
