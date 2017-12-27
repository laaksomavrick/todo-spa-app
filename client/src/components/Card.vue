<template>
  <div class="card">
    <input v-if="editing" v-model="title" @keyup.enter="submit(title)">
    <a v-else>{{ card.title }}</a>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

//div v-if editing -> EditingCard
//else -> DisplayCard

export default {

  name: 'Card',

  props: ['card', 'editing'],

  data: function(){

    return {

     title: '',

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

    ...mapActions([
        'create_card'
      ])

  }

}

</script>

<style>

.card {
  background-color: white;
  width: auto;
  height: 10em;
  margin: 0.5em;

  box-shadow: 0 1px 4px rgba(0,0,0,.05);
  border-radius: 5px;
}

</style>
