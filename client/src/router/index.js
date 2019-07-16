/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import MainUser from '@/components/MainUser'
import SearchUser from '@/components/SearchUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/searchuser',
      name: 'searchuser',
      component: SearchUser
    },
    {
      path: '/mainuser',
      name: 'mainuser',
      component: MainUser
    },
  ]
})
