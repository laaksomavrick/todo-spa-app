<template>

  <modal 
    :show="show"
    :on_submit="on_submit">
    <div class="modal-header">
      <textarea v-model="card.title"></textarea>
    </div>
    <div class="modal-body">
      <textarea v-model="card.description"></textarea>
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
      const payload = { card: { id: this.card.id, title: this.card.title, description: this.card.description } }
      return this.update_card(payload)
    },

    close: function() {
      this.$emit('close')
    },

    ...mapActions([
      'unselect_card',
      'update_card'
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
