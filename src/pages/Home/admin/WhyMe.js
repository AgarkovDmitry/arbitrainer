import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
      <div>
        <div className="col">
          {data.whyMe.header != undefined && <input className="inp5" defaultValue={data.whyMe.header} onChange={e => data.whyMe.header = e.target.value}/>}
          {data.whyMe.subheader != undefined && <textarea name="" id="" rows="3" className="inp6" defaultValue={data.whyMe.subheader} onChange={e => data.whyMe.subheader = e.target.value}/>}
        </div>
        {data.whyMe.text != undefined && <textarea name="" id="" rows="3" className="inp7" defaultValue={data.whyMe.text} onChange={e => data.whyMe.text = e.target.value}/>}
      </div>
  )
})
