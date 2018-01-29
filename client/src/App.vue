<template>
  <div id="app">
    <div class="router">
      <router-view/>
    </div>
    <card-details-modal :show="show_card_details_modal" @close="close_card_details"/>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import CardDetailsModal from '@/components/CardDetailsModal'

export default {
  name: 'app',

  components: {
    'card-details-modal': CardDetailsModal
  },

  methods: {

    ...mapActions([
      'close_card_details'  
    ])
  },

  computed: {
  
    show_card_details_modal() {
      return this.get_card_edit_open
    },

    ...mapGetters([
      'get_card_edit_open'
    ])

  },


}
</script>

<style>

body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;

  display: grid;
  grid-gap: 20px;
  grid-template-areas:
  "router"
}

.router {
  grid-area: router;
}

body {
  background: #f5f5f5;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #555555;
  /*overflow: hidden;*/
  height: 100vh;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #555555;
}

</style>
