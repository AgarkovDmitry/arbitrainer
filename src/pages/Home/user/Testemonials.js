import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return(
    <section id="rewievs">
      <div className="rewHeader">
        <h2>{data.review}</h2>
        <p className="underHeader">{data.currentTestemonial.header}</p>
      </div>
      <div className="slickCarouselWrapper">
        <div className="item flexWrapperRev">
          <div className="person">
            <img src={data.currentTestemonial.url} className="rev-photo" alt=""/>
            <h3>{data.currentTestemonial.name}</h3>
            <p>{data.currentTestemonial.post}</p>
          </div>
          <div className="rev-container">
            <br/>
            <div>
              <span className="quotesUp">“</span>
              <div>{data.currentTestemonial.text}</div>
              <span className="quotesDown">”</span>
            </div>
          </div>
        </div>
      </div>
      <div className="carouselImg">
        <img src="img/pic-bottom-testemonials.svg" alt="testmonials"/>
      </div>
      <ul className="slick-dots" style={{ display: 'block' }}>
        {
          data.testemonials.map((item, key) => {
            let name = (key == data.currentIndex) ? 'slick-active' : ''
            return (
              <li className={name} aria-hidden="false" key={key}>
                <button type="button" data-role="none" role="button" tabIndex="0" onClick={() => data.setIndex(key)}>{key + 1}</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
})
