<template>
    <section class="sidebar-container">
        <div class="menu-out">
            <span class="title">导航菜单</span>
        </div>
        <b-nav vertical class="w-250">
            <b-nav-item class="b-nav-item" to="/">首页</b-nav-item>
            <b-nav-item class="b-nav-item" to="/contactsManage">联系人管理</b-nav-item>
            <b-nav-item class="b-nav-item" to="/about">关于</b-nav-item>
        </b-nav>
    </section>
</template>
<script>
    
</script>
<style lang="less">
    .sidebar-container{
        display:block;
        width:250px;
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        border-right:1px solid #ccc;
        padding-top:100px;
        .menu-out{
            background-color:#e9ecef;
            position:absolute;
            top:55px;
            left:0;
            right:0;
            color:#868e96;
            padding:12px;
        }

        .b-nav-item{
            padding-left:15px;
            &:hover{
                background-color:#e9ecef;
            }
        }
    }
    @media screen and (max-width: 960px) {
        .sidebar-container {
            display:none;
        }
    }
</style>