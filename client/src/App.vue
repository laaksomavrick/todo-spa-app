<template>
  <div id="app">
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
  height: 100vh;

  max-width: 1012px;
  margin-left: auto;
  margin-right: auto;
}

body {
  background: #f5f5f5;
}

</style>
