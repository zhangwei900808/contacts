<template>
    <section class="layout-container">
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand href="/">联系人管理</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-nav>
                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                        <em>zhangwei</em>
                        </template>
                        <b-dropdown-item href="#">退出登录</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </section>
</template>
<script>
    import { mapState,mapActions } from 'vuex'

    export default{
        props:{
            showAdvisory:{
                type:Boolean,
                default:false
            },
        },
        computed:{
            ...mapState([
                'userInfo'
            ])
        },
        methods:{
            ...mapActions([
                'updateDemoPosition'
            ])
        }
    }
</script>
<style lang="less">
    
</style>