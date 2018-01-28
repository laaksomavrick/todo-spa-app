<template>
  <div class="header-container">
    <textarea @input="did_change" placeholder="Add the name of this board...">{{ board_name }}</textarea>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { _ } from 'vue-underscore'

export default {

  name: 'BoardName',

  props: ['board_id'],

  computed: {

    board_name: function() {
      if (this.get_board_details(this.board_id)) {
        return this.get_board_details(this.board_id).name
      }
    },

    ...mapGetters([
      'get_board_details'
      ])

  },

  methods: {

    did_change: _.debounce(function(e) {
        const name = e.target.value
        const payload = {
          board: {
            id: this.board_id,
            name: name
          }
        }
          this.update_board(payload)
        }, 500 
    ),

    ...mapActions([
      'update_board'
    ])

  }

}

</script>

<style>
.header-container {
  grid-area: header;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-right: 2em;
}
.header-container textarea {
  resize: none;
  border: 1px solid transparent;
  outline: none;
  color: #555;
  padding: 5px;
  background: transparent;
  height: 100%;
  width: 100%;

  font-size: 3em;
  font-weight: 500;
}
.header-container textarea:hover {
  border: 1px solid rgba(0,0,0,0.1);
}
</style>
