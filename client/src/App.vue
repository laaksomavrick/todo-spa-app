<template>
  <div id="app">
    <sidemenu/>
    <router-view/>
  </div>
</template>

<script>

import Sidemenu from '@/components/Sidemenu'

export default {
  name: 'app',

  components: {
    'sidemenu': Sidemenu
  }
}
</script>

<style>

body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
  height: 100vh;
}

</style>
