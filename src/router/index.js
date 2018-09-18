import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: "*",
    //   redirect: "/home"
    // },
    {
      path:'/',
      redirect: "/home",
      name:'',
      component: resolve => require(['../views/Home.vue'], resolve),
      children:[
        {
          path: 'home',
          name:'home',
          component: resolve => require(['../views/Home.vue'], resolve)
        },
        // {
        //   path:'stimulation',
        //   name:'Stimulation',
        //   component: resolve => require(['../views/Stimulation'], resolve)
        // }
      ]
    },
    { path: '*', redirect: '/home' },
    {
      path:'/insight',
      name:'Stimulation',
      component: resolve => require(['../views/Stimulation'], resolve)
    },
    {
      path:'/stimulationDetail',
      name:'stimulationDetail',
      component: resolve => require(['../views/stimulationDetail'], resolve)
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
    },
    {
      path: '/conference',
      name: 'conference',
      component: resolve => require(['../views/Conference'], resolve)
    },
    {
      path: '/noname',
      name: 'noname',
      component: resolve => require(['../views/Noname'], resolve)
    },
    {
      path: '/advancevip',
      name: 'onezeroone',
      component: resolve => require(['../views/OneZeroOne'], resolve)
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['../views/Video'], resolve)
    },
    {
      path: '/airdrop',
      name: 'airdrop',
      component: resolve => require(['../views/Airdrop'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['../views/SearchList'], resolve)
    }
  ]
})
