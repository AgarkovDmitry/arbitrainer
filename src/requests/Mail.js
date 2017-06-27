import request from 'superagent'
const apiRoute = `${window.location.origin}/api`

export default {
  post: (body) => request
    .post(`${apiRoute}/mail`)
    .send(body)
    .then(res => res),
}
