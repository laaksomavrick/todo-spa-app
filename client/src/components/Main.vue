<template>
    <div class="container">
      <header class="brand-container"><brandbar/></header>
      <sidemenu class="sidemenu-container" />
      <header class="header-container">{{ board_name }}</header>
      <createbutton class="create-button"/>
      <router-view></router-view>
      </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import CardView from '@/components/CardView'
import Card from '@/components/Card'
import CreateButton from '@/components/CreateButton'
import Sidemenu from '@/components/Sidemenu'
import BrandBar from '@/components/Brandbar'

export default {

  name: 'CardView',

  components: {
    'createbutton': CreateButton,
    'sidemenu': Sidemenu,
    'brandbar': BrandBar
  },

  mounted() { 
    //set state.ui.loading = true
    const board_id = parseInt(this.$route.params.id)
    this.startup(board_id)
    //then.set.state.ui.loading = false
  },

  computed: {

    ...mapGetters([
      'get_board_details',
    ]),

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
      'startup'
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
.header-container {
  grid-area: header;
  margin-left: 8px;
  font-size: 3em;
  font-weight: 500;
}
.create-button {
  grid-area: create-button;
  margin-left: 8px!important;
  margin-right: 1.5em!important;
  height: 2em;
}

</style>
