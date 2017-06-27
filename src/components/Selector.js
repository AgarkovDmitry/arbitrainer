import React from 'react'
import { observer } from 'mobx-react'

const languages = ['ua', 'en', 'ru']

export default observer(({ store }) => {
  return (
    <ul className="dropdown">
      <li className="dropdown-top">
        <a className="dropdown-top">{store.language.toUpperCase()}</a>
        <ul className="dropdown-inside">
          {
            languages.filter(item => item != store.language).map((item, key) =>
              <li key={key}><a onClick={() => store.translate(item)}>{item.toUpperCase()}</a></li>
            )
          }
        </ul>
      </li>
    </ul>
  )
})
