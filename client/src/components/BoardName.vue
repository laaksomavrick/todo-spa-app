<template>
  <div class="header-container">
    <textarea @input="did_change" placeholder="Add the name of this board...">{{ board_name }}</textarea>
    <delete-icon v-if="board_is_not_default" class="material-destroy" @click.native="destroy"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { _ } from 'vue-underscore'
import DeleteIcon from 'icons/delete'

export default {

  name: 'BoardName',

  props: ['board_id'],

  components: {
    'delete-icon': DeleteIcon
  },

  computed: {

    board_name: function() {
      if (this.get_board_details(this.board_id)) {
        return this.get_board_details(this.board_id).name
      }
    },

    board_is_not_default: function() {
      const default_board = this.get_default_board
      if (default_board) {
        return default_board.id !== this.board_id
      } else {
        return false
      }
    },

    ...mapGetters([
      'get_board_details',
      'get_default_board'
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

    destroy: function() {
      const payload = { board: { id: this.board_id } }
      this.delete_board(payload)
        .then(_ => {
          const default_board = this.get_default_board
          this.$router.push({ path: `/board/${default_board.id}` })
        })
        .catch(err => {
          console.log(err)
        })
    },

    ...mapActions([
      'update_board',
      'delete_board'
    ])

  }

}

</script>

<style>
.header-container {
  grid-area: header;
  margin-left: 8px;
  border: 1px solid transparent;
  display: flex;
  margin-right: 1.5em;
}
.header-container textarea {
  resize: none;
  border: 1px solid transparent;
  outline: none;
  color: #555;
  background: transparent;
  height: 100%;
  width: auto;
  align-self: flex-start;
  flex: 1;

  font-size: 3em;
  font-weight: 500;
}
.header-container .material-design-icon {
  visibility: hidden;
  margin-left: auto;
  margin-right: 8px;
}

.header-container:hover {
  border: 1px solid rgba(0,0,0,0.1);
}
.header-container:hover .material-design-icon {
  visibility: visible;
  opacity: 0.25;
  cursor: pointer;
}
.material-design-icon {
  height: 36px;
  width: 36px;
}
.material-design-icon__svg {
  height: 36px;
  width: 36px;
}
</style>
