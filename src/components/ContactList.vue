<template>
    <div class="container contact-list-container">
        <div class="row row-bottom">
            <div class="col-auto">
                <b-button variant="primary" @click="onAddContact">添加</b-button>
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
                    :fields="fields"
                    :filter="filter"
                    @filtered="onFiltered">
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  data() {
    return{
        fields: {
            index:{label:'#'},
            fullName: { label: '姓名'},
            email: { label: '邮箱' },
            description: { label: '简介' }
        },
        sortBy: null,
        sortDesc: false,
        filter: null,
        modalDetails: { index:'', data:'' }
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
        'getContacts'
    ]),
    details(item, index, button) {
      this.modalDetails.data = JSON.stringify(item, null, 2);
      this.modalDetails.index = index;
      this.$root.$emit('show::modal','modal1', button);
    },
    resetModal() {
      this.modalDetails.data = '';
      this.modalDetails.index = '';
    },
    onFiltered(filteredItems) {
      
    },
    onAddContact(){
        this.$router.push('/contactsManage/addContact')
    }
  }
}
</script>

<style lang="less">
    .contact-list-container{
        .row-bottom{
            margin-bottom:15px;
        }
    }
</style>