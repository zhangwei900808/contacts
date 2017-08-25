import * as types from '@/store/mutation-types'
import axios from 'axios'
import qs from 'qs'

export default {
    state:{
      contacts:[]
    },
    mutations:{
        // 获取所有联系人信息
      [types.GET_ALL_CONTACT_LIST](state){
            axios.get('http://localhost:8089/contacts')
                .then((res)=>{                
                    res.data.map((contact,index)=>{
                        contact.index = index+1;
                        contact.fullName = contact.first_name+contact.last_name
                    })
                    console.log(res.data);
                    state.contacts = res.data;
                })
                .catch((err)=>{
                    console.log(`msg:${err}`)
                })
      },
      // 添加联系人
      [types.ADD_CONTACT](state,obj){
            axios.post('http://localhost:8089/contacts',obj.contact)
                .then((res)=>{                
                    obj.success();
                })
                .catch((err)=>{
                    console.log(`msg:${err}`)
                })
      }
    },
    actions:{
        getContacts(context){
            context.commit(types.GET_ALL_CONTACT_LIST);
        },
        addContact(context,obj){
            context.commit(types.ADD_CONTACT,obj);
        }
    }
  };