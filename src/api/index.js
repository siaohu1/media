//处理接口
import axios from 'axios'
//处理query
import qs from 'qs'
//token
import store from '../store'
//axios配置
const instance = axios.create({
  baseURL: 'http://47.75.202.148:9082/organapi',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    return qs.stringify({
      ...data,
      token:store.state.token
    })
  }]
})

instance.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    } else {
      // alert(response.data.msg)
      return response.data
      console.log(data.msg)
    }
  },
  error => {
    console.log(error)
  }
)

//   --  用户模块  --
// 发送登陆邮件验证码
export const SendLoginEmail = params => {
  return instance.post('/user/sendLoginEmail', params)
}
// 用户登陆
export const UserLogin = params => {
  return instance.post('/user/login', params)
}
// logout登出
export const UserLogout = params => {
  return instance.post('/user/logout', params)
}

