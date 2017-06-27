import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <div className="col">
      {data.protect.header != undefined && <input className="inp14" defaultValue={data.protect.header} onChange={e => data.protect.header = e.target.value}/>}
      {data.protect.subheader != undefined && <input className="inp15" defaultValue={data.protect.subheader} onChange={e => data.protect.subheader = e.target.value}/>}
      {data.protect.text != undefined && <textarea name="" id="" rows="2" className="inp16" defaultValue={data.protect.text} onChange={e => data.protect.text = e.target.value}/>}
    </div>
  )
})
