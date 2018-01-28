<template>
  <div class="board-container">
    <board v-for="board in get_all_boards" :board="board" :key="board.id"/>
    <board v-if="editing" :editing="true"/>
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

    editing() {
      return this.get_board_create_open
    },

    ...mapGetters([
      'get_all_boards',
      'get_board_create_open'
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
