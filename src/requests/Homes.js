import request from 'superagent'
const apiRoute = `${window.location.origin}/api`

export default {
  get: (query = {}) => request
    .get(`${apiRoute}/homes?query=${JSON.stringify(query)}`),

  put: (query = {}, payment) => request
    .put(`${apiRoute}/homes?query=${JSON.stringify(query)}`)
    .send(payment),
}
