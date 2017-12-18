<template>
  <div class="board-container">
    <board v-for="board in getAllBoards" :board="board" :key="board.id"/>
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
    this.fetchAllBoards()
  },

  computed: {
    ...mapGetters([
      'getAllBoards'
    ])
  },

  methods: {
    ...mapActions([
      'fetchAllBoards'
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
