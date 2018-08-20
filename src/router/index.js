import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component: resolve => require(['../views/Home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../views/login/Login'], resolve)
    },
    {
      path: '/codelogin',
      name: 'CodeLogin',
      component: resolve => require(['../views/login/CodeLogin'], resolve)
    }
  ]
})
