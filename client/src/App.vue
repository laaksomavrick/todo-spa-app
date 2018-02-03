<template>
  <div id="app">
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {

  name: 'app',

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

  display: grid;
  grid-gap: 20px;
  grid-template-areas:
  "router"
}

.router {
  grid-area: router;
}

body {
  background: #f5f5f5;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #555555;
  /*overflow: hidden;*/
  height: 100vh;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #555555;
}

</style>
