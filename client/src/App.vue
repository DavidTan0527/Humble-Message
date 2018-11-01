<template>
  <div id="app">
    <navbar>
      <router-view/>
    </navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: "Noto Sans SC";
  -webkit-font-smoothingx: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0F2346;
  height: 100%;
  min-height: 100vh;
}
</style>
