import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
      <section>
        {data.sendMe.post != undefined && <textarea name="" id="" rows="2" className="inp17" defaultValue={data.sendMe.post} onChange={e => data.sendMe.post = e.target.val}/>}
        {data.sendMe.name != undefined && <input className="inp18" defaultValue={data.sendMe.name} onChange={e => data.sendMe.name = e.target.val}/>}
        {data.sendMe.mailto != undefined && <input className="inp19" defaultValue={data.sendMe.mailto} onChange={e => data.sendMe.mailto = e.target.val}/>}
        {data.sendMe.phone1 != undefined && <input className="inp20" defaultValue={data.sendMe.phone1} onChange={e => data.sendMe.phone1 = e.target.val}/>}
        {data.sendMe.phone2 != undefined && <input className="inp20" defaultValue={data.sendMe.phone2} onChange={e => data.sendMe.phone2 = e.target.val}/>}
      </section>
  )
})
