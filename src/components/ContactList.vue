<template>
    <div class="container contact-list-container">
        <div class="row row-bottom">
            <div class="col-auto">
                <b-button variant="primary" @click="addContact">添加</b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <b-table 
                    striped 
                    hover 
                    bordered
                    show-empty
                    responsive
                    :items="contacts"
                    :fields="fields">
                    <template slot="index" scope="data">
                        {{data.index + 1}}
                    </template>
                     <template slot="fullName" scope="data">
                        {{data.item.first_name}}{{data.item.last_name}}
                    </template>
                    <template slot="actions" scope="row">
                        <b-btn size="sm" @click.stop="updateContact(row.item)" variant="success">编辑</b-btn>
                        <b-btn size="sm" @click.stop="showDeleteModal(row.item)" variant="danger">删除</b-btn>
                    </template>
                </b-table>
            </div>
        </div>

       <b-modal id="delModal"
                 v-model="deleteModal.show"
                 :class="{'delModal':deleteModal.showClass}"
                 title="提示"
                 ok-title="确定"
                 close-title="取消"
                 @ok="deleteContact"
                 no-close-on-backdrop>
            <p>您确定要删除 “{{deleteModal.name}}“ 的联系人信息吗？</p>
        </b-modal>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  data() {
    return{
        deleteModal:{
            show:false,
            id:0,
            name:'',
            //解决bootstrap b-modal显示问题
            showClass:false,
        },
        fields: {
            index: {label:'#'},
            fullName: { label: '姓名'},
            email: { label: '邮箱' },
            description: { label: '简介' },
            actions:  { label: '操作',class:'text-center' }
        }
    }
  },
  computed:{
    ...mapState({
        contacts:state=>state.ContactList.contacts
    })
  },
  created(){
      this.getContacts();
  },
  methods: {
      ...mapActions([
        'getContacts',
        'deleteContactById'
    ]),
    showDeleteModal(contact){
        this.deleteModal.id=contact.id;
        this.deleteModal.name=`${contact.first_name}${contact.last_name}`
        this.deleteModal.show = true;
        //解决bootstrap b-modal显示问题
        this.deleteModal.showClass = true;
    },
    addContact(){
        this.$router.push('/contactsManage/addContact')
    },
    updateContact(item){
        console.log('item:')
        console.log(item)
        this.$router.push(`/contactsManage/editContact/${item.id}`)
    },
    deleteContact(e){        
        this.deleteContactById({
            id:this.deleteModal.id,
            success:()=>{
                this.getContacts();
                this.deleteModal.show = false;
                //解决bootstrap b-modal显示问题
                this.deleteModal.showClass = false;
            }
        })
        return e.cancel();
    }
  }
}
</script>

<style lang="less">
    #delModal{
        .modal-dialog {
            top:100px;
        }
    }
    .contact-list-container{
        //解决bootstrap b-modal显示问题
        .delModal{
            #delModal{
                opacity: 1;
            }
        }
        .row-bottom{
            margin-bottom:15px;
        }
    }
</style>