<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
body{
  background: #d6bba5;
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
