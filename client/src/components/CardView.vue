<template>
    <div class="container">
      <div class="sidemenu-container">
        <sidemenu/>
      </div>
      <header class="header-container">{{ board_name }}</header>
      <createbutton class="create-button"/>
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
import CreateButton from '@/components/CreateButton'
import Sidemenu from '@/components/Sidemenu'

export default {

  name: 'CardView',

  components: {
    'card': Card,
    'createbutton': CreateButton,
    'sidemenu': Sidemenu
  },

  mounted() { 
    this.fetch_all_cards()
  },

  computed: {

    ...mapGetters([
      'get_all_cards',
      'get_cards_for_board',
      'get_editing',
      'get_board_details',
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
  grid-gap: 10px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    "sidemenu header"
    "sidemenu create-button"
    "sidemenu container";
}
.sidemenu-container {
  grid-area: sidemenu;
}
.header-container {
  grid-area: header;
  margin-left: 8px;
  font-size: 3em;
  font-weight: 500;
}
.card-container {
  grid-area: container;
  display: grid;
  margin-right: 1em;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 10px;
}
.create-button {
  grid-area: create-button;
  margin-left: 8px!important;
  margin-right: 1.5em!important;
  height: 2em;
}

</style>
