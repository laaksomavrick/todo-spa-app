<template>
    <div class="container">
      <header class="brand-container"><brandbar/></header>
      <sidemenu class="sidemenu-container" />
      <boardname :board_id="selected_board_id"/>
      <createbutton class="create-button"/>
      <router-view></router-view>
      <card-details-modal :show="show_card_details_modal" @close="close_card_details"/>
      <loading :show="show_loading"/>  
      </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import CardView from '@/components/CardView'
import Card from '@/components/Card'
import CreateButton from '@/components/CreateButton'
import Sidemenu from '@/components/Sidemenu'
import BrandBar from '@/components/Brandbar'
import BoardName from '@/components/BoardName'
import CardDetailsModal from '@/components/CardDetailsModal'
import Loading from '@/components/Loading'

export default {

  name: 'CardView',

  components: {
    'createbutton': CreateButton,
    'sidemenu': Sidemenu,
    'brandbar': BrandBar,
    'boardname': BoardName,
    'card-details-modal': CardDetailsModal,
    'loading': Loading
  },

  created() {
    this.set_loading(true)
  },

  mounted() { 
    const board_id = parseInt(this.$route.params.id)
    this.startup(board_id)
      .then(() => new Promise(resolve => setTimeout(resolve, 1500)))
      .then( () => {
        const selected = this.get_selected_board
        this.$router.push({ path: `/board/${selected}` }) 
        this.set_loading(false)
      })
  },

  computed: {

    selected_board_id () {
      return parseInt(this.$route.params.id)
    },

    show_card_details_modal() {
      return this.get_card_edit_open
    },

    show_loading() {
      return this.get_loading
    },

    ...mapGetters([
      'get_selected_board',
      'get_card_edit_open',
      'get_loading'
      ])

  },

  methods: {

    ...mapActions([
      'startup',
      'set_loading',
      'close_card_details'
    ])

  }

}
</script>

<style>

.container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 50px 66px 32px auto;
  grid-template-areas:
    "brand brand"
    "sidemenu header"
    "sidemenu create-button"
    "sidemenu container";
}
.brand-container {
  grid-area: brand;
  height: 50px;
  background: linear-gradient(90deg, #0eb8b6, #098ebf);
}
.sidemenu-container {
  grid-area: sidemenu;
}
.create-button {
  grid-area: create-button;
  margin-left: 8px!important;
  margin-right: 1.5em!important;
  height: 2em;
}

</style>
