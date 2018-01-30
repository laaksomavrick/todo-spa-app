<template>
  <div 
    class="card"
    @click="select_card_local"
    v-bind:class="{ hover: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    >
    <div class="inner-card">
      <input 
        autofocus
        ref="editing"
        v-if="editing" 
        key="card-editing"
        v-model="title" 
        @keydown.esc="close"
        @keyup.enter="submit(title)"/>
      <a 
        v-else key="card-display">
        {{ card.title }}</a>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'Card',

  props: ['card', 'editing'],

  data: function(){
    return {
     title: '',
     isHovered: false
    }
  },

  mounted: function() {
    if (this.$refs.editing) {
      this.$refs.editing.focus()
    }
  },

  computed: {

    ...mapGetters([
        'get_selected_board'
      ])

  },

  methods: {
    
    submit: function(title) {
      const self = this
      const payload = { card: { title: self.title, board_id: self.get_selected_board } }

      this.create_card(payload)
        .catch(err => {
          console.log(err)
        })

    },

    close: function() {
      if (this.editing) {
        this.toggle_editing()
      }
    },

    select_card_local: function() {
      if(!this.editing) {
        this.select_card(this.card)
        this.open_card_details()
      }
    },

    ...mapActions([
        'create_card',
        'open_card_details',
        'select_card',
        'toggle_editing'
      ])

  }

}

</script>

<style>

.card {
  background-color: white;
  width: auto;
  height: 8em;
  margin: 0.5em;

  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  border-radius: 5px;
  border: 1px solid transparent;
  transition: box-shadow 100ms, transform 100ms, color 100ms;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hover {
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  transform: translateY(-2px);
  color: #3cbdb2;
}

.inner-card {
  margin: 8px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 110px;
}

.inner-card input {
  border: 1px solid transparent;
  outline: none;
  color: rgb(85,85,85);
  font-size: 16px;
  
  text-align: center;
  margin: 8px;
}



</style>
