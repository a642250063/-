import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index.vue'
import loading from '@/components/loading.vue'
import todata from '@/components/todata.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'loading', component: loading},
    { path: '/index' ,name: 'index', component: index},
    { path: '/todata' ,name: 'todata', component: todata},
    { path: '*', redirect: '/'}
  ],
  mode: 'history'
})
