<template>
<div class="contact-list-container">
  <div class="row">
    <div class="col-md-4">
      <b-form-fieldset horizontal label="查询" :label-cols="2">
        <b-form-input v-model="filter" placeholder="请输入查询内容" />
      </b-form-fieldset>
    </div>
  </div>

  <b-table striped hover show-empty
           :items="contacts"
           :fields="fields"
           :filter="filter"
           :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc"
           @filtered="onFiltered">
    <template slot="name" scope="row">{{row.value.first}} {{row.value.last}}</template>
    <template slot="isActive" scope="row">{{row.value?'Yes :)':'No :('}}</template>
    <template slot="actions" scope="row">
      <b-btn size="sm" @click.stop="details(row.item,row.index,$event.target)">Details</b-btn>
    </template>
  </b-table>

  <b-modal id="modal1" @hide="resetModal" ok-only>
    <h4 class="my-1 py-1" slot="modal-header">Index: {{ modalDetails.index }}</h4>
    <pre>{{ modalDetails.data }}</pre>
  </b-modal>

</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  data() {
    return{
        fields: {
            fullName: { label: '姓名','class': 'text-center'},
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
  mounted(){
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
      
    }
  }
}
</script>

<style lang="less">
    .contact-list-container{
        margin-top:100px;
    }
</style>