import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Home from '@/components/Home'
import Mine from '@/components/users/Mine'
import Login from '@/components/users/Login'
import Reg from '@/components/users/Reg'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/search',name: 'Search',component: Search},
    {path: '/users/mine',name: 'Mine',component: Mine},
    {path: '/users/login',name: 'Login',component: Login},
    {path: '/users/reg',name: 'Reg',component: Reg},
    {path: '/detail',name: 'Detail',component: Detail},
  ]
})
