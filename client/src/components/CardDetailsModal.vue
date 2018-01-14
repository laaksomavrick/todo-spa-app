<template>

  <modal 
    :show="show"
    :on_submit="on_submit">
    <div class="modal-header">
      <h3> {{ card.title }}</h3>
    </div>
    <div class="modal-body">
      <h3>{{ card.description }}</h3>
    </div>
  </modal>
  
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Modal from '@/components/Modal'

export default {

  props: [
    'show'
  ],

  components: {
    'modal': Modal
  },

  data: function() {
    return {
      card: {
        title: '',
        description: ''
      }
    }
  },

  watch: {
    selected_card: function() {
      this.card = this.selected_card
    }
  },

  methods: {
    on_submit: function() {
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
    close: function() {
      this.$emit('close')
    },

    ...mapActions([
      'unselect_card'
    ])

  },

  computed: {
  
    selected_card: function() {
      return this.get_selected_card
    },

    ...mapGetters([
      'get_selected_card',
    ])

  }

}

</script>

<style>
</style>
