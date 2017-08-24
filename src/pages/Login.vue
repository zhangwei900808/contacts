<template>
    <section class="container login-container">
        <div class="row">
            <div class="col-xl-6 col-sm-6 col-lg-6 col-md-6 col-12 ml-auto mr-auto">
                <b-card-group deck>
                    <b-card header="用户登录" header-tag="header">
                        <b-form @submit="onSubmit">
                        <b-form-group label="用户名:" label-for="username">
                            <b-form-input id="username"
                                        type="text" v-model="form.name" required
                                        placeholder="用户名"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="密码:" label-for="password">
                            <b-form-input 
                                        id="password"
                                        type="password" v-model="form.password" required
                                        placeholder="密码"
                            ></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary" class="col-lg-auto col-sm-auto">提交</b-button>
                        <b-button type="reset" variant="light" class="col-lg-auto col-sm-auto">重置</b-button>
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
        onSubmit(evt) {
            evt.preventDefault();
            this.setLoginInfo(this.form);
            this.setIsLogin(true);
            this.$router.push('/')
        }
    }
}
</script>
<style lang="less">
    .login-container{
        margin-top:60px;
    }
</style>