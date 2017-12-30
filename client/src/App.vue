<template>
  <div id="app">
    <div class="sidemenu">
      <sidemenu/>
    </div>
    <div class="router">
      <router-view/>
    </div>
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

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
  "sidemenu router"
}

.sidemenu {
  grid-area: sidemenu;
}

.router {
  grid-area: router;
}

body {
  background: #f5f5f5;
  font-family: Helvetica;
  color: #282828;
}

</style>
