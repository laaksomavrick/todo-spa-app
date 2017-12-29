<template>
    <div class="container">
      <header class="header-container">{{ board_name }}</header>
      <div class="card-container">
        <card 
          v-if="editing" 
          :editing="true"/>
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

  mounted() { 
    this.fetch_all_cards()
  },

  computed: {

    ...mapGetters([
      'get_all_cards',
      'get_cards_for_board',
      'get_editing',
      'get_board_details'
    ]),

    cards () {
      let board_id = parseInt(this.$route.params.id)
      if (board_id) {
        return this.get_cards_for_board(board_id)
      } else {
        return this.get_all_cards
      }
    },

    editing () {
      return this.get_editing
    },

    board_name () {
      let board_id = parseInt(this.$route.params.id)
      if (board_id && this.get_board_details(board_id)) {
        return this.get_board_details(board_id).name 
      } else {
        return 'Home'
      }
    }

  },

  methods: {

    ...mapActions([
      'fetch_all_cards'
    ])

  }

}
</script>

<style>

.container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "container";
}

.header-container {
  grid-area: header;
}
.card-container {
  grid-area: container;
  display: grid;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-template-rows: auto auto auto;
}

</style>
