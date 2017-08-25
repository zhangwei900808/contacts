<template>
    <section class="layout-container">
        <Navbar></Navbar>
        <Sidebar v-if="isLogin"></Sidebar>
        <main :class="{'left-250':isLogin}">
            <router-view></router-view>
        </main>
    </section>
</template>
<script>
    import { mapState,mapActions } from 'vuex'
    import Sidebar from '@/components/Sidebar'
    import Navbar from '@/components/Navbar'

    export default{
        data(){
            return{
                
            }
        },
        components:{
            Sidebar,
            Navbar
        },
        props:{
            showAdvisory:{
                type:Boolean,
                default:false
            },
        },
        computed:{
            ...mapState([
                'isLogin',
                'userInfo'
            ])
        },
        methods:{
            ...mapActions([
                
            ])
        }
    }
</script>
<style lang="less">
    main{
        position:absolute;
        top:55px;
        right:0;
        left:0;
        bottom:0;
        box-sizing:border-box;
    }
    .left-250{
        left:250px;
    }
    @media screen and (max-width: 991px) {
        main {
            left:0 !important;
        }
    }
</style>