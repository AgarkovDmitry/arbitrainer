import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {data.clients.header != undefined && <input className="inp8" defaultValue={data.clients.header} onChange={e => data.clients.header = e.target.value}/>}
      {data.clients.subheader != undefined && <input className="inp9" defaultValue={data.clients.subheader} onChange={e => data.clients.subheader = e.target.value}/>}
      <div className="jcsa">
      {
        data.firstPlates.map((item, key) =>
          <button onClick={() => data.navigate(item.route)} key={key}>
            {
              item.header3 ?
              `${item.header1} ${item.header3}` :
              `${item.header1} ${item.header2}`
            }
            <img src="img/pic-arrow-wht.svg" alt="arrow"/>
          </button>
        )
      }
      </div>
    </section>
  )
})
