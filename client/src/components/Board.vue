<template>
  <div 
      class="board"
      v-bind:class="{ clicked: isClicked }"
      @mousedown="isClicked = true"
      @mouseup="isClicked = false"
      >
    <router-link 
      v-if="board"
      @click.native="select_board_link(board)" 
      :to="{name: 'CardView', params: {id: board.id}}"> {{ board.name }} </router-link>
    <router-link 
      v-else
      @click.native="select_home" 
      :to="{name: 'Main'}"> Home </router-link>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  name: 'Board',

  props: ['board'],

  data: function() {

    return {
      isClicked: false
    }

  },

  methods: {

    select_board_link: function(board) {
      this.select_board(board)
    },

    select_home: function() {
      this.select_board(null)
    },

    ...mapActions(['select_board'])

  }

}

</script>

<style>

.board {
  background: white;
  height: 30px;

  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  margin: 4px 0;
  text-align: center;

  transition: box-shadow 100ms, transform 100ms, border-color 100ms, color 100ms; 
  cursor: pointer;

}

.board:hover {
  border-color: #3cbdb2;
  color: #3cbdb2;
}

.board a {
  color: inherit;
  text-decoration: none;
  display: block;
  margin-top: 4px;
}

.clicked {
  box-shadow: none;
  transform: translateY(2px);
}

</style>
