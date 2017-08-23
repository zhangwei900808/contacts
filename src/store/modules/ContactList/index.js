import * as types from '@/store/mutation-types'
import axios from 'axios'
import qs from 'qs'

export default {
    state:{
      contacts:[]
    },
    mutations:{
      [types.GET_CONTACT_LIST](state){
        axios.get('http://localhost:8089/contacts')
             .then((res)=>{                
                res.data.map((contact)=>{
                    contact.fullName = contact.first_name+contact.last_name
                })
                console.log(res.data);
                state.contacts = res.data;
             })
             .catch((err)=>{
                 console.log(`msg:${err}`)
             })
      }
    },
    actions:{
        getContacts(context){
            context.commit(types.GET_CONTACT_LIST);
        },
    }
  };