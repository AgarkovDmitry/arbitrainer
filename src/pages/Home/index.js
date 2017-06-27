import React from 'react'
import { observer } from 'mobx-react'

import ContactMe from './user/ContactMe'
import WhyMe from './user/WhyMe'
import Clients from './user/Clients'
import Specialise from './user/Specialise'
import Testemonials from './user/Testemonials'
import Customer from './user/Customer'
import Protect from './user/Protect'
import AboutMe from './user/AboutMe'
import SendMe from './user/SendMe'

import AdminContactMe from './admin/ContactMe'
import AdminWhyMe from './admin/WhyMe'
import AdminClients from './admin/Clients'
import AdminSpecialise from './admin/Specialise'
import AdminTestemonials from './admin/Testemonials'
import AdminProtect from './admin/Protect'
import AdminAboutMe from './admin/AboutMe'
import AdminSendMe from './admin/SendMe'

import Store from '../../stores/Home'

module.exports = observer(({ store }) => {
  if (store.pageTitle != 'Home') store.setPageStore(Store, 'Home')
  return (
    store.auth ?
    <section id="admin2">
      <form>
        <AdminContactMe data={store.data}/>
        <AdminWhyMe data={store.data}/>
        <AdminClients data={store.data}/>
        <AdminSpecialise data={store.data}/>
        <AdminTestemonials data={store.data}/>
        <div>
          <AdminProtect data={store.data}/>
          <AdminAboutMe data={store.data}/>
        </div>
        <button className="about">О мне <img src="img/pic-arrow-wht.svg" alt="arrow"/></button>
        <AdminSendMe data={store.data}/>
        <div className="buttons-bar">
            <button className="submit-button" onClick={() => store.data.updateData()}>Сохранить</button>
            <button type="cancel" className="cancel-button" onClick={() => store.data.fetchData()}>Отмена</button>
        </div>
      </form>
    </section> : <div>
      <ContactMe data={store.data}/>
      <WhyMe data={store.data}/>
      <Clients data={store.data}/>
      <Specialise data={store.data}/>
      <Customer data={store.data}/>
      <Testemonials data={store.data} delay={3000}/>
      <Protect data={store.data}/>
      <AboutMe data={store.data}/>
      <SendMe data={store.data}/>
    </div>
  )
})
