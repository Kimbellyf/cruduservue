/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
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
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/searchuser',
      name: 'searchuser',
      component: SearchUser,
      meta: {auth: 'admin'}
    },
    {
      path: '/mainuser',
      name: 'mainuser',
      component: MainUser
    },
  ]
})
