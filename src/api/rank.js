import axios from 'axios'

export function toprank (count) {
  const url = '/api/top250'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b',
    count: count
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function usrank () {
  const url = 'api/us_box'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function weeklyrank () {
  const url = 'api/weekly'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function newrank () {
  const url = 'api/new_movies'
  const data = {
    apikey: '0b2bdeda43b5688921839c8ecb20399b'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
