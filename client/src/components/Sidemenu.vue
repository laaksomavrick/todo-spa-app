<template>
  <div class="nav-container">
    <boardview/> 
  </div>
</template>

<script>

import BoardView from '@/components/BoardView'

export default {

  name: 'sidemenu',

  components: {
    'boardview': BoardView,
  }

}

</script>

<style>
.nav-container {
  display: grid;
}
</style>
