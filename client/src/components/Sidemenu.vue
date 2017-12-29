<template>
  <div class="nav-container">
    <boardview/> 
    <createbutton/>
  </div>
</template>

<script>

import BoardView from '@/components/BoardView'
import CreateButton from '@/components/CreateButton'

export default {

  name: 'sidemenu',

  components: {
    'boardview': BoardView,
    'createbutton': CreateButton
  }

}

</script>

<style>
.nav-container {
  display: grid;
}
</style>
