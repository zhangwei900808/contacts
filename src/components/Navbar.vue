<template>
    <section class="navbar-container">
        <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
                <b-navbar-brand to="/">Team247联系人管理</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                    <b-nav is-nav-bar class="ml-auto">
                        <b-nav-item to="/login"  v-if="!isLogin">登录</b-nav-item>
                        <b-nav-item-dropdown right  v-if="isLogin">
                            <template slot="button-content">
                            <em>{{userInfo.name}}</em>
                            </template>
                            <b-dropdown-item href="#" @click="onQuit">退出登录</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-nav>
                </b-collapse>
        </b-navbar>
    </section>
</template>
<script>
    import {mapState,mapActions} from 'vuex'

    export default{
        computed:{
            ...mapState([
                'isLogin',
                'userInfo'
            ])
        },
        methods:{
            ...mapActions([
                'setIsLogin'
            ]),
            onQuit(){
                this.setIsLogin(false);
                this.$router.push('/login');
            }
        }
    }
</script>
<style lang="less">
    .navbar-container{

    }
</style>