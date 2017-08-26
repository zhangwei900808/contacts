import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

let router = new Router({
  routes: [
      {
        path: '/',
        name: 'index',
        meta: {
            requireAuth: true,
        },
        component: function (resolve) {
          require(['@/pages/Index'], resolve)
        }
      },
      {
        path:'/contactsManage',
        meta: {
            requireAuth: true,
        },
        component:require('@/components/RouterView'),
        children:[
          {
            path:'/',
            name:'contactsManage',
            component: function (resolve) {
              require(['@/pages/contactsManage/ContactsManage'], resolve)
            },
          },
          {
            path:'addContact',
            meta: {
                requireAuth: true,
            },
            component: function (resolve) {
              require(['@/pages/contactsManage/EditContact'], resolve)
            },
          },
          {
            path:'editContact/:id',
            meta: {
                requireAuth: true,
            },
            component: function (resolve) {
              require(['@/pages/contactsManage/EditContact'], resolve)
            },
          }
        ]
      },
      {
        path:'/login',
        name:'login',
        component: function (resolve) {
          require(['@/pages/Login'], resolve)
        }
      },
      {
        path:'/about',
        name:'about',
        meta: {
            requireAuth: true,
        },
        component: function (resolve) {
          require(['@/pages/About'], resolve)
        }
      },
      { path: '*', component: function (resolve) {
        require(['@/pages/NotFound'], resolve)
      } 
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 检测是否要跳转到登录页面
  if (to.matched.some(r => r.meta.requireAuth)) {
      if (!store.state.isLogin) {
         return next('/login');
      }
  }
  return next();
})

export default router;