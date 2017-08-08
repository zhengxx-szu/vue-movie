import axios from 'axios'

export function getonshow () {
  const url = '/api/in_theaters'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    city: '深圳',
    start: 0,
    count: 100
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function gettoshow () {
  const url = '/api/coming_soon'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    city: '深圳',
    start: 0,
    count: 100
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getdetail (id) {
  const url = '/api/subject/' + id
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    city: '深圳'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getphoto (id) {
  const url = '/api/subject/' + id + '/photos'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    city: '深圳'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
