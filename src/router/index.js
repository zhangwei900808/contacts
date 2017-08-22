import Vue from 'vue'
import Router from 'vue-router'
import RouterView from '@/components/RouterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: function (resolve) {
        require(['@/pages/Main'], resolve)
      },
      children:[
        {
          path:'test',
          component: function (resolve) {
            require(['@/pages/Main'], resolve)
          }
        }
      ]
    }
  ]
})
