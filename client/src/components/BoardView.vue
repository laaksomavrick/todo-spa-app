<template>
  <div class="board-container">
    <board :board="null"/>
    <board v-for="board in get_all_boards" :board="board" :key="board.id"/>
    <board :board="null" :create="true"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Board from '@/components/Board'

export default {

  name: 'BoardView',

  components: {
    'board': Board
  },

  computed: {
    ...mapGetters([
      'get_all_boards'
    ])
  },

}

</script>

<style>
.board-container {
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  margin: 0.5em 0 0.5em 0.5em;
}
</style>
