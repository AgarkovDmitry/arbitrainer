import React from 'react'
import { observer } from 'mobx-react'

import Textarea from 'react-textarea-autosize'

export default observer(({ section }) => {
  return (
    <section>
      <div className="raz">
        <input type="text" value={section.title} onChange={e => section.title = e.target.value}/>
        <a onClick={() => section.open(section)}>
          {
            section.isShown ?
            <img src="../img/up-arrow-blk.svg" alt="" style={{ marginTop: '27px' }}/>:
            <img src="../img/up-arrow-blk.svg" alt="" className="inverseBlack" style={{ marginTop: '27px' }}/>
          }
        </a>
      </div>
      <div className="podraz">
        {
          section.isShown && <section className="content">
          {
            section.subsections.map((item, key) => <section key={key}>
              <button className="button1" type="button" onClick={() => section.subsections.splice(key, 1)} style={{ float: 'right' }}>
                Удалить подраздел
                <img src="../img/add.svg" alt="add" className="inverseAdd"/>
              </button>
              <Textarea className="textarea" value={item.text} onChange={e => item.text = e.target.value}/>
              <input type="text" value={item.price} onChange={e => item.price = e.target.value}/>
              <hr/>
            </section>)
          }
            <button className="button1" type="button" onClick={() => section.subsections.push({ text: '', value: '' })} style={{ float: 'right' }}>
              Добавить подраздел
              <img src="../img/add.svg" alt="add"/>
            </button>
          </section>
        }
      </div>
    </section>
  )
})
