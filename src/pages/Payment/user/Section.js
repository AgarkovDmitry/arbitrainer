import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ section }) => {
  return (
    <div className="set">
        <a onClick={() => section.open(section)}>
          {section.title}
          {
            section.isShown ?
            <img src="../img/up-arrow.svg" alt="arrow"/>:
            <img src="../img/down-arrow.svg" alt="arrow"/>
          }
        </a>
        {
          section.isShown && <div className="content">
          {
            section.subsections.map((item, key) => <div key={key}>
              <p className="accNor">{item.text}</p>
              <p className="accMid">{item.price}</p>
              <hr/>
            </div>)
          }
          </div>
        }
    </div>
  )
})
