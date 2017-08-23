<template>
  <div id="app">
      <Layout></Layout>
      <router-view></router-view>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  name: 'app',
  components:{
    Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
