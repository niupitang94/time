import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Signin from './components/Signin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/signin',component:Signin},
  ]
})
