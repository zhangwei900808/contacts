<template>
    <section class="edit-container">
       <b-breadcrumb class="b-breadcrumb" :items="items"/>
       
       <section class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mr-auto">
                    <b-alert variant="success" :show="alertShow">添加成功</b-alert>
                    <b-card-group deck>
                        <b-card header="联系人信息"
                                header-tag="header">
                            <b-form @submit="onSubmit">
                                <b-form-group label="姓:" label-for="firstName">
                                    <b-form-input id="firstName"
                                                type="text" 
                                                v-model.trim="form.first_name" 
                                                required
                                                :state="firstNameState"
                                                placeholder="输入姓"
                                    ></b-form-input>
                                    <b-form-feedback>
                                        请输入至少1个字符
                                    </b-form-feedback>
                                </b-form-group>
                                <b-form-group label="名:" label-for="lastName">
                                    <b-form-input id="lastName"
                                                type="text" 
                                                :state="lastNameState"
                                                v-model.trim="form.last_name" 
                                                required
                                                placeholder="输入名"
                                    ></b-form-input>
                                    <b-form-feedback>
                                        请输入至少1个字符
                                    </b-form-feedback>
                                </b-form-group>
                                <b-form-group label="邮箱:" label-for="email">
                                    <b-form-input id="email"
                                                type="email" 
                                                :state="emailState"
                                                v-model.trim="form.email" 
                                                required
                                                placeholder="输入邮箱"
                                    ></b-form-input>
                                    <b-form-feedback>
                                        邮箱输入不正确，请重新输入
                                    </b-form-feedback>
                                </b-form-group>
                                <b-form-group label="简介:" label-for="introduction">
                                    <b-form-textarea id="introduction"
                                        v-model="form.description"
                                        placeholder="输入简介"
                                        required
                                        :rows="3"
                                        :max-rows="6">
                                    </b-form-textarea>
                                    <b-form-feedback>
                                        请输入至少1个字符
                                    </b-form-feedback>
                                </b-form-group>
                            </b-form-group>
                            <b-button type="submit" variant="primary">保存</b-button>
                            <b-button variant="link" @click="onBack">返回</b-button>
                        </b-form>
                        </b-card>
                    </b-card-group>                    
                </div>
            </div>
       </section>
    </section>
</template>
<script>
    import {mapActions} from 'vuex'

    export default{
        data(){
            return {
                alertShow:false,
                firstNameState:null,
                lastNameState:null,
                emailState:null,
                descriptionState:null,
                form: {
                    first_name:'',
                    last_name:'',
                    email: '',
                    description: '',
                },
                items: [
                    {
                        text: '首页',
                        to: '/',
                    }, 
                    {
                        text: '联系人管理',
                        to: '/contactsManage'
                    },
                    {
                        text: '添加联系人',
                        to: '#',
                        active: true
                    }
                ],
            }
        },
        methods: {
            ...mapActions([
                'addContact'
            ]),
            validateForm(){
                if(this.form.first_name.length>=1){
                    this.firstNameState = null;
                    if(this.form.last_name.length >= 1){
                        this.lastNameState = null;
                        if(this.form.description.length >= 1){
                            this.descriptionState=null;
                            return true;
                        }else{
                            this.descriptionState='invalid'
                            return false;
                        }
                    }else{
                        this.lastNameState='invalid';
                        return false;
                    }
                }else{
                    this.firstNameState='invalid';
                    return false;
                }
            },
            onSubmit(evt) {
                evt.preventDefault();
                if(this.validateForm()){
                    console.log('contact before submit')          
                    console.log(this.form)      
                    this.addContact({
                        contact:this.form,
                        //添加成功产生的回调函数
                        success:()=>{
                            this.alertShow = true;
                            setTimeout(()=>{
                                this.alertShow=false;
                            },5000)
                        }
                    });                    
                }
            },
            onBack(){
                this.$router.push('/contactsManage')
            }
        }
    }
</script>
<style lang="less">
    .edit-container{
        margin-top:60px;
        .b-breadcrumb{
            border-radius:0;
            position:fixed;
            top:56px;
            right:0;
            left:250px;
            z-index:99;
        }
    }    
</style>