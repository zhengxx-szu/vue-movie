import axios from 'axios'

export default function search (query) {
  const url = '/api/search'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    q: query
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
