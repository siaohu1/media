//处理接口
import axios from 'axios'
//处理query
import qs from 'qs'
//token
// import store from '../store'
const lang = window.localStorage.lang
if(lang == 'CN'){
  var language = 1
}else if( lang == 'KR'){
  var language = 3
}else{
  var language = 2
}
//axios配置
const instance = axios.create({
  // baseURL: 'http://192.168.1.122:8082/apis/',
  baseURL: 'http://ec2-18-222-188-28.us-east-2.compute.amazonaws.com/apis/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin":"*"
    // response.setHeader("Access-Control-Allow-Origin", "*");
    //告诉浏览器编码方式
    // response.setHeader("Content-Type","text/html;charset=UTF-8" );

},

  transformRequest: [function (data) {
    return qs.stringify({
      ...data,
      language
    })
  }]
})

instance.interceptors.response.use(
  response => {
    if (response.data.code === 1000) {
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

//   --新闻--
//首页综合新闻
export const TypeLastesNews = params =>{
  return instance.post('/TypeLastesNews',params)
}
// 新闻列表
export const ContentList = params => {
  return instance.post('/contentList', params)
}
// 新闻详情
export const CcontentDetail = params => {
  return instance.post('/contentDetail', params)
}
// 最新新闻
export const LatestNews = params => {
  return instance.post('/latestNews', params)
}
//热点新闻
export const HotNews = params => {
  return instance.post('/hotNews', params)
}
//搜索
export const Search = params =>{
  return instance.post('/search',params)
}

// 公告
export const Notice = params => {
  return instance.post('/notice', params)
}

//招聘
export const Recruit = params => {
  return instance.post('/recruit', params)
}

export const Banner = params => {
  return instance.post('/banner', params)
}

export const Meetings = params => {
  return instance.post('/meetings', params)
}
//广告位

export const  Advert = params => {
  return instance.post('/advert', params)
}

// price


// export const  = params => {
//   return instance.post('', params)
// }
//
// export const  = params => {
//   return instance.post('', params)
// }
//
// export const  = params => {
//   return instance.post('', params)
// }























