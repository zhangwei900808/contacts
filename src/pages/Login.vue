<template>
    <section class="container login-container">
        <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-7 col-sm-9 col-12 ml-auto mr-auto">
                <b-card-group deck>
                    <b-card header="用户登录" header-tag="header">
                        <b-form @submit="onSubmit">
                        <b-form-group label="用户名:" label-for="username">
                            <b-form-input id="username"
                                        type="text" 
                                        v-model.trim="form.name" 
                                        :state="nameState"
                                        placeholder="用户名"
                            ></b-form-input>
                            <b-form-feedback>
                                请输入至少2个字符
                            </b-form-feedback>
                        </b-form-group>
                        <b-form-group label="密码:" label-for="password">
                            <b-form-input 
                                        id="password"
                                        type="password" 
                                        :state="passwordState"
                                        v-model.trim="form.password" 
                                        placeholder="密码"
                            ></b-form-input>
                            <b-form-feedback>
                                请输入至少5个字符
                            </b-form-feedback>
                        </b-form-group>
                        <b-button type="submit" variant="primary" class="col-lg-auto col-sm-auto">提交</b-button>
                        <b-button type="reset" @click.stop="clearForm" variant="light" class="col-lg-auto col-sm-auto">重置</b-button>
                    </b-form>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </section>
</template>
<script>
import { mapState,mapActions } from 'vuex'

export default{
    data() {
        return{
            nameState:null,
            passwordState:null,
            form: {
                name: '',
                password: ''
            }
        }
    },
    computed:{
        ...mapState([
            'userInfo',
            'isLogin'
        ])
    },
    methods: {
        ...mapActions([
            'setLoginInfo',
            'setIsLogin'
        ]),
        validateForm(){
            if(this.form.name.length >=2){
                this.nameState = null;
                if(this.form.password.length>=5){
                    this.passwordState = null;
                    return true;
                }else{
                    this.passwordState = 'invalid';
                    return false;
                }
            }else{
                this.nameState = 'invalid';
                return false;
            }
        },
        onSubmit(evt) {
            evt.preventDefault();
            let validate = this.validateForm();
            if(validate){
                this.setLoginInfo(this.form);
                this.setIsLogin(true);
                this.$router.push('/');
            }
            
        },
        clearForm(){
            this.form ={
                name:'',
                password:''
            }
        }
    }
}
</script>
<style lang="less">
    .login-container{
        margin-top:60px;
    }
</style>