import React from 'react'
import { observer } from 'mobx-react'

import Store from '../../stores/Home'

import Title from './user/Title'
import Body from './user/Body'

import AdminTitle from './admin/Title'
import AdminBody from './admin/Body'

module.exports = observer(({ store }) => {
  if (store.pageTitle != 'About') store.setPageStore(Store, 'About')
  return (
    store.auth ?
    <section id="admin">
      <AdminTitle data={store.data}/>
      <AdminBody data={store.data}/>
      <div className="buttons-bar">
        <button className="submit-button" onClick={() => store.data.updateData()}>Сохранить</button>
        <button type="cancel" className="cancel-button" onClick={() => store.data.fetchData()}>Отмена</button>
      </div>
    </section> :
    <div>
      <Title data={store.data}/>
      <Body data={store.data}/>
    </div>
  )
})
