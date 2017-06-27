import React from 'react'
import { observer } from 'mobx-react'

import Textarea from 'react-textarea-autosize'

export default observer(({ data }) => {
  return (
    <div className="col left">
      {data.aboutMe.text != undefined && <Textarea className="textarea" value={data.aboutMe.text} onChange={e => data.aboutMe.text = e.target.value}/>}
    </div>
  )
})
