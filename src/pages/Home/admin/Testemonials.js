import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ data }) => {
  return(
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {data.review != undefined && <input className="inp10" defaultValue={data.review} onChange={e => data.review = e.target.value}/>}
      {
        data.testemonials.map((item, key) => <section key={key} style={{ display: 'flex', flexDirection: 'column' }}>
          <input className="inp11" defaultValue={item.header} onChange={e => item.header = e.target.value}/>
          <div>
            <div className="col">
              <input type="file" id={`photo${key}`} style={{ display: 'none' }} onChange={e => {
                  data.uploadImage(e.target.files[0]).then(res => {
                    item.url = 'image/' + res.body.path
                  })
                }} accept="image/*"/>
              <img src={item.url} alt="foto" className="foto" onClick={() => {
                  document.getElementById(`photo${key}`).click()
                }}/>
              <textarea name="" id="" rows="2" className="inp12" defaultValue={item.name} onChange={e => item.name = e.target.value}/>
              <textarea name="" id="" rows="2" className="inp12" defaultValue={item.post} onChange={e => item.post = e.target.value}/>
            </div>
            <textarea name="" id="" rows="2" className="inp13" defaultValue={item.text} onChange={e => item.text = e.target.value}/>
          </div>
          <button className="button3" type="button" onClick={() => data.testemonials.splice(key, 1)}>Удалить комментарий <img src="img/add.svg" className="inverseAdd" alt="add"/></button>
        </section>)
      }
      <button className="button3" type="button" onClick={() => data.testemonials.push({
          header: '',
          url: '',
          name: '',
          post: '',
          text: ''
        })}>Добавить комментарий <img src="img/add.svg" alt="add"/></button>
    </section>
  )
})
