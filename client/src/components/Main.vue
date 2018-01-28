<template>
    <div class="container">
      <header class="brand-container"><brandbar/></header>
      <sidemenu class="sidemenu-container" />
      <boardname :board_id="selected_board_id"/>
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
import BoardName from '@/components/BoardName'

export default {

  name: 'CardView',

  components: {
    'createbutton': CreateButton,
    'sidemenu': Sidemenu,
    'brandbar': BrandBar,
    'boardname': BoardName,
  },

  mounted() { 
    //set state.ui.loading = true
    const board_id = parseInt(this.$route.params.id)
    this.startup(board_id)
    //then.set.state.ui.loading = false
  },

  computed: {

    selected_board_id () {
      return parseInt(this.$route.params.id)
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
  grid-template-rows: 50px 66px auto;
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
