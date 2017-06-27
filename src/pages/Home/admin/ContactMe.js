import React from 'react'
import { observer } from 'mobx-react'

import Textarea from 'react-textarea-autosize'

export default observer(({ data }) => {
  return (
    <section>
      {data.contactMe.header != undefined && <input className="inp1" defaultValue={data.contactMe.header} onChange={e => data.contactMe.header = e.target.value}/>}
      {data.contactMe.subheader != undefined && <Textarea className="inp2" defaultValue={data.contactMe.subheader} onChange={e => data.contactMe.subheader = e.target.value}/>}
      {data.contactMe.post != undefined && <Textarea className="inp3" defaultValue={data.contactMe.post} onChange={e => data.contactMe.post = e.target.value}/>}
      {data.contactMe.name != undefined && <input className="inp4" defaultValue={data.contactMe.name} onChange={e => data.contactMe.name = e.target.value}/>}
    </section>
  )
})
