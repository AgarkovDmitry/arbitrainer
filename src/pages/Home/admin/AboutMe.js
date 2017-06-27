import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <div className="col">
      {data.aboutMe.header != undefined && <input className="inp14" defaultValue={data.aboutMe.header} onChange={e => data.aboutMe.header = e.target.value}/>}
      {data.aboutMe.subheader != undefined && <input className="inp15" defaultValue={data.aboutMe.subheader} onChange={e => data.aboutMe.subheader = e.target.value}/>}
      {data.aboutMe.text != undefined && <textarea name="" id="" rows="8" className="inp16" defaultValue={data.aboutMe.text} onChange={e => data.aboutMe.text = e.target.value}/>}
    </div>
  )
})
