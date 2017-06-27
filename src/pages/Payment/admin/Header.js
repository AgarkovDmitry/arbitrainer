import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <div className="col header">
      {data.topHeader != undefined && <input type="text" value={data.topHeader} onChange={e => data.topHeader = e.target.value}/>}
      {data.topSubheader != undefined && <input type="text" value={data.topSubheader} onChange={e => data.topSubheader = e.target.value}/>}
    </div> : null
  )
})
