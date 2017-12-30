<template>
  <div class="board-container">
    <board :board="null"/>
    <board v-for="board in get_all_boards" :board="board" :key="board.id"/>
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

  mounted() {
    const board_id = parseInt(this.$route.params.id) 
    this.fetch_all_boards(board_id)
  },

  computed: {
    ...mapGetters([
      'get_all_boards'
    ])
  },

  methods: {

    ...mapActions([
      'fetch_all_boards',
    ])
  }

}

</script>

<style>
.board-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  margin: 0.5em 0 0.5em 0.5em;
}
</style>
