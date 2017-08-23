<template>
    <section class="container login-container">
        <div class="row">
            <div class="col-xl-4 col-10 ml-auto mr-auto">
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
                                    type="text" v-model="form.name" required
                                    placeholder="密码"
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">提交</b-button>
                    <b-button type="reset" variant="secondary">重置</b-button>
                </b-form>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        data() {
            return{
                form: {
                    name: '',
                    password: null,
                    secret: 'S3CR3T'
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            }
        }
    }
</script>
<style lang="less">
    .login-container{
        margin-top:50px;
    }
</style>