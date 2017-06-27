import React from 'react'
import { observer } from 'mobx-react'

import UserHeader from './user/Header'
import UserLeft from './user/Left'
import UserRight from './user/Right'

import AdminHeader from './admin/Header'
import AdminLeft from './admin/Left'
import AdminRight from './admin/Right'

import Store from '../../stores/Payment'

module.exports = observer(({ store, title }) => {
  if (store.pageTitle != 'Payment') store.setPageStore(Store, 'Payment', title)
  return (
    store.auth ?
    <section id="admin">
      <AdminHeader data={store.data}/>
      <div>
          <AdminLeft data={store.data}/>
          <AdminRight data={store.data}/>
      </div>
      <div className="buttons-bar">
          <button className="submit-button" onClick={() => store.data.updateData()}>Сохранить</button>
          <button type="cancel" className="cancel-button" onClick={() => store.data.fetchData()}>Отмена</button>
      </div>
    </section> : <div>
      <UserHeader data={store.data}/>
      <section id="splata">
        <UserLeft data={store.data}/>
        <UserRight data={store.data}/>
      </section>
    </div>
  )
})
