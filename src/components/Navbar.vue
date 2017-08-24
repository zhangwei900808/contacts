<template>
    <section class="navbar-container">
        <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
                    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
                        <b-navbar-brand href="/">Team247联系人管理</b-navbar-brand>
                        <b-collapse is-nav id="nav_collapse">
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