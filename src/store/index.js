import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      
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