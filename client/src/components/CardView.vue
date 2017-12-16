<template>
  <div class="container">
    <div><a>todo</a></div>
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
    //this.$http.get('/api')
    //  .then(res => console.log(res.body))
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
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  justify-content: center;
  width: 100%;
}

</style>
