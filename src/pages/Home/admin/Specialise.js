import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {data.specialise.header != undefined && <input className="inp8" defaultValue={data.specialise.header} onChange={e => data.specialise.header = e.target.value}/>}
      {data.specialise.subheader != undefined && <input className="inp9" defaultValue={data.specialise.subheader} onChange={e => data.specialise.subheader = e.target.value}/>}
      <div className="jcsa">
        {
          data.secondPlates.map((item, key) =>
            <button onClick={() => data.navigate(item.route)} key={key}>
              {`${item.header1} ${item.header2}`}
              <img src="img/pic-arrow-wht.svg" alt="arrow"/>
            </button>
          )
        }
      </div>
      <div className="jcsa">
        {
          data.thirdPlates.map((item, key) =>
            <button onClick={() => data.navigate(item.route)} key={key}>
              {`${item.header1} ${item.header2}`}
              <img src="img/pic-arrow-wht.svg" alt="arrow"/>
            </button>
          )
        }
      </div>
    </section>
  )
})
