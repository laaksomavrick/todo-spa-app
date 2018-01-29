<template>
  <div class="card-parent-container">
  <div class="card-container">
    <card 
      v-if="editing" 
      :editing="editing"
      ref="editing"/>
    <card 
      v-for="card in cards" 
      :card="card" 
      :key="card.id"/>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Card from '@/components/Card'

export default {

  name: 'CardView',

  components: {
    'card': Card,
  },

  computed: {

    ...mapGetters([
      'get_all_cards',
      'get_cards_for_board',
      'get_editing',
    ]),

    cards () {
      const board_id = parseInt(this.$route.params.id)
      if (board_id) {
        return this.get_cards_for_board(board_id)
      } else {
        return this.get_all_cards
      }
    },

    editing () {
      return this.get_editing
    },

  },

}
</script>

<style>
.card-container {
  grid-area: container;
  display: grid;
  margin-right: 1em;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 10px;
}
</style>
