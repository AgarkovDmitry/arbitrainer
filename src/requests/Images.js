import request from 'superagent'
const apiRoute = `${window.location.origin}/api`

export default {
  post: (file) => request
    .post(`${apiRoute}/images`)
    .attach('image', file),

  delete: (path) => request
    .delete(`${apiRoute}/images?query=${JSON.stringify({ path })}`)
}
