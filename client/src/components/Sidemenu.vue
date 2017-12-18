<template>
  <div class="nav-container">
    <boardview/> 
    <button>todo</button>
  </div>
</template>

<script>

import BoardView from '@/components/BoardView'

export default {

  name: 'sidemenu',

  components: {
    'boardview': BoardView
  }

}

</script>

<style>
.nav-container {
  height: 100vh;
  width: 25%;
  float: left;

  /*
  display: grid;
  grid-template-columns: auto;
  */
}
</style>
