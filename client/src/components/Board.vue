<template>
  <div class="board">
    <router-link 
      @click.native="select_board_link(board)" 
      :to="{name: 'CardView', params: {id: board.id}}"> {{ board.name }} </router-link>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  name: 'Board',

  props: ['board'],

  methods: {

    select_board_link: function(board) {
      this.select_board(board)
    },

    ...mapActions(['select_board'])

  }

}

</script>

<style>

.board {
  color: red;
}

</style>
