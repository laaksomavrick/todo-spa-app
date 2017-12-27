<template>
  <div class="board-container">
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
    this.fetch_all_boards()
  },

  computed: {
    ...mapGetters([
      'get_all_boards'
    ])
  },

  methods: {
    ...mapActions([
      'fetch_all_boards'
    ])
  }

}

</script>

<style>
.board-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: center;
}
</style>
