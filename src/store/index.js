import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import Axios from 'axios'

import ContactList from '@/store/modules/ContactList'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      ContactList
    },
    state:{
      isLogin:false,
      userInfo:{
        name:'zhangwei',
        password:'123'
      }
    },
    mutations:{
     
    },
    actions:{
      
    }
  });
  
  export default store;