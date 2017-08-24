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
                items: [{
                    text: '首页',
                    href: '/',
                    }, {
                    text: '联系人管理',
                    href: '#',
                    active: true
                }],
            }
        },
        created(){

        },
        methods:{

        }
    }
</script>
<style lang="less">
    .contactsManage-container{
        .b-breadcrumb{
            border-radius:0;
        }
    }
</style>