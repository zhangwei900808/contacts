<template>
  <div id="app">
      <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/pages/Layout'

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
  background-color:#f5f5f5 !important;
}
</style>
