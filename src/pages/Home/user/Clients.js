import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="clients">
      <h2>{data.clients.header}</h2>
      <p className="underHeader">{data.clients.subheader}</p>
      <div className="flexRow">
        {
          data.firstPlates.map((item, key) =>
            <a onClick={() => data.navigate(item.route)} className="plate" key={key}>
              <img src={item.img} alt={item.alt} className={item.class}/>
              <p>
                {item.header1}
                <br/>
                {item.header2}
                <br/>
                {item.header3}
              </p>
              <p className="more">{data.buttons.details}<img src="img/pic-arrow.svg" alt="arrow"/></p>
            </a>
          )
        }
      </div>
    </section>
  )
})
