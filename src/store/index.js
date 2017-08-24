import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import Axios from 'axios'
import * as types from './mutation-types'
import ContactList from '@/store/modules/ContactList'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      ContactList
    },
    state:{
      isLogin:false,
      userInfo:{
        name:'',
        password:''
      }
    },
    mutations:{
      [types.SET_LOGIN_INFO](state,userInfo){
        state.userInfo = userInfo;
      },
      [types.SET_IS_LOGIN](state,islogin){
        state.isLogin = islogin;
      }
    },
    actions:{
      setLoginInfo(context,userInfo){
        context.commit(types.SET_LOGIN_INFO,userInfo);
      },
      setIsLogin(context,islogin){
        context.commit(types.SET_IS_LOGIN,islogin);
      }
    }
  });
  
  export default store;