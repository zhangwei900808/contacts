<template>
    <section class="contactsManage-container">
        <b-breadcrumb class="b-breadcrumb" :items="items"/>
        <ContactList></ContactList>
    </section>
</template>
<script>
    import ContactList from '@/components/ContactList'
    export default{
        components:{
            ContactList
        },
        data(){
            return{
                items: [
                    {
                        text: '首页',
                        to: '/',
                    }, 
                    {
                        text: '联系人管理',
                        to: '#',
                        active: true
                    }
                ],
            }
        }
    }
</script>
<style lang="less">
    .contactsManage-container{
        position:relative;
        margin-top:61px;
        z-index:10;
        .b-breadcrumb{
            border-radius:0;
            position:fixed;
            top:56px;
            right:0;
            left:250px;
            z-index:99;
        }
    }
    @media screen and (max-width: 991px) {
        .b-breadcrumb {
            left:0 !important;
        }
    }
</style>