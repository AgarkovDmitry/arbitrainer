import React from 'react'
import { observer } from 'mobx-react'

import Section from './Section'

export default observer(({ data }) => {
  return (
    <div className="col right">
        {data.rightHeader != undefined && <input type="text" value={data.rightHeader} onChange={e => data.rightHeader = e.target.value}/>}
        {data.rightSubheader != undefined && <input type="text" value={data.rightSubheader} onChange={e => data.rightSubheader = e.target.value}/>}
        {
          data.sections && data.sections.map((item, key) => <section key={key}>
            <Section section={item}/>
            <button className="button1" type="button" onClick={() => data.sections.splice(key, 1)} style={{ float: 'right' }}>
              УДАЛИТЬ РАЗДЕЛ
              <img src="../img/add.svg" alt="add" className="inverseAdd"/>
            </button>
          </section>)
        }
        <button className="button2" type="button" onClick={() => data.sections.push({ title: '', subsections: [] })}>
          ДОБАВИТЬ НОВЫЙ РАЗДЕЛ
          <img src="../img/add.svg" alt="add"/>
        </button>
    </div> : null
  )
})
