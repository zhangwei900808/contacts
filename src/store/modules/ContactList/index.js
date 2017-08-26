import * as types from '@/store/mutation-types'
import axios from 'axios'

export default {
    state:{
      contacts:[]
    },
    mutations:{
        // 根据联系人id删除联系人信息
        [types.DELETE_CONTACT_BY_ID](state,obj){
            axios.delete(`http://localhost:8089/contacts/${obj.id}`)
                .then((res)=>{
                    obj.success()
                }).catch((err)=>{
                    console.log(`msg:${err}`)
                })
        },
        // 根据联系人id更新联系人信息
        [types.UPDATE_CONTACT_BY_ID](state,obj){
            axios.put(`http://localhost:8089/contacts/${obj.contact.id}`,obj.contact)
            .then((res)=>{                
                obj.success();
            })
            .catch((err)=>{
                console.log(`msg:${err}`)
            })
        },
        // 根据联系人id获取联系人信息
        [types.GET_CONTACT_BY_ID](state,obj){
            axios.get(`http://localhost:8089/contacts/${obj.id}`)
            .then((res)=>{                
                console.log('contact by id:')
                console.log(res.data);
                obj.success(res.data);
            })
            .catch((err)=>{
                console.log(`msg:${err}`)
            })
        },
        // 获取所有联系人信息
        [types.GET_ALL_CONTACT_LIST](state){
            axios.get('http://localhost:8089/contacts')
                .then((res)=>{  
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
        getContactById(context,obj){
            context.commit(types.GET_CONTACT_BY_ID,obj);
        },
        getContacts(context){
            context.commit(types.GET_ALL_CONTACT_LIST);
        },
        addContact(context,obj){
            context.commit(types.ADD_CONTACT,obj);
        },
        updateContactById(context,obj){
            context.commit(types.UPDATE_CONTACT_BY_ID,obj);
        },
        deleteContactById(context,obj){
            context.commit(types.DELETE_CONTACT_BY_ID,obj);
        }
    }
  };