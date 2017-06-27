import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return (
    <section id="specialise">
      <div>
        <h2>{data.specialise.header}</h2>
        <p className="underHeader">{data.specialise.subheader}</p>
      </div>
      <div className="flexCol">
        <div className="flexRow">
          {
            data.secondPlates.map((item, key) =>
              <a onClick={() => data.navigate(item.route)} className={item.class} key={key}>
                <p>{item.header1}<br/>{item.header2}</p>
                <p className="more">{data.buttons.details}<img src="img/pic-arrow.svg" alt="arrow"/></p>
              </a>
            )
          }
        </div>
        <div className="flexRow">
          {
            data.thirdPlates.map((item, key) =>
              <a onClick={() => data.navigate(item.route)} className="bluePlate" key={key}>
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
      </div>
    </section>
  )
})
