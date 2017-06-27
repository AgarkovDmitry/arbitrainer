import React from 'react'
import { observer } from 'mobx-react'

import Textarea from 'react-textarea-autosize'

export default observer(({ data }) => {
  return (
    <div className="col left">
        {data.leftHeader != undefined && <input type="text" value={data.leftHeader} onChange={e => data.leftHeader = e.target.value}/>}
        {data.leftSubheader != undefined && <input type="text" value={data.leftSubheader} onChange={e => data.leftSubheader = e.target.value}/>}
        {data.text != undefined && <Textarea className="textarea" value={data.text} onChange={e => data.text = e.target.value}/>}
    </div> : null
  )
})
