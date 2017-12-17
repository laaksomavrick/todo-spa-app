<template>
  <div class="container">
    <card v-for="card in getAllCards" :card="card" :key="card.id"></card>
    </div>
  </div>
</template>


<script>

import { mapActions, mapGetters } from 'vuex'
import Card from '@/components/Card'

export default {

  name: 'CardView',

  components: {
    'card': Card
  },

  mounted() {
    this.fetchAllCards()
  },

  computed: {
    ...mapGetters([
      'getAllCards'
    ])
  },

  methods: {
    ...mapActions([
      'fetchAllCards'
    ])
  }

}
</script>

<style>

.container {
  display: grid;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-template-rows: auto auto auto;
  justify-content: center;
}

</style>
