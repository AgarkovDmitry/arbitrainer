import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <div className="col header">
      {data.aboutMe.header != undefined && <input type="text" value={data.aboutMe.header} onChange={e => data.aboutMe.header = e.target.value} style={{ textAlign: 'center' }}/>}
      {data.aboutMe.subheader != undefined && <input type="text" value={data.aboutMe.subheader} onChange={e => data.aboutMe.subheader = e.target.value} style={{ textAlign: 'center' }}/>}
    </div> : null
  )
})
