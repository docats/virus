import { apiPost, apiGet } from '../request'
import myConfig from '../config'

export let Login = function(myUsername, myPassword) {
  return new Promise((resolve) => {
    apiPost("myConfig.ApiPath.Main.Login",{
      username: myUsername,
      password: myPassword
    }).then((response) => {
  
      resolve(response)
    }).catch((error) => console.log(error))
  })
}


export let Login2 = function() {
  return new Promise((resolve) => {
    apiGet(myConfig.ApiPath.Main.Login,{
    }).then((response) => {
  
      resolve(response)
    }).catch((error) => console.log(error))
  })
}