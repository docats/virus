import axios from 'axios'
import Vue from 'vue'
import myConfig from './config'

let service = axios.create({
  baseURL: myConfig.BaseUrl,
  timeout: myConfig.Timeout
})


service.interceptors.request.use(
  config =>{
    
    config.headers = {
      // 'Content-Type': 'application/json',
      'X-Rapidapi-Host': 'covid-193.p.rapidapi.com',
      'X-Rapidapi-Key': '315568554amsha05e85e246992dfp1295ecjsnc1c353a6a75a'
    }
    
  
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('response error:' + error)
    if (!error.response) {
      Vue.prototype.$message.error(error, myConfig.Timeout)
    } else {
      if (error.response.data && error.response.data.message) {
        Vue.prototype.$message.error(error.response.data.message, myConfig.Timeout)
      } else {
        Vue.prototype.$message.error(error.message, myConfig.Timeout)
      }
    }

    return Promise.reject(error)
  }
)

export function apiPost(url, infoRequest = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, infoRequest).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function apiGet(url) {
  return new Promise((resolve, reject) => {
    service.get(url).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
  })
}