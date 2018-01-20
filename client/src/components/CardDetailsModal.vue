<template>

  <modal 
    :show="show"
    :on_submit="on_submit"
    :on_delete="on_delete">
    <div class="card-details-container">
      <textarea v-model="card.title"></textarea>
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

    on_delete: function() {
      const payload = { card: { id: this.card.id } }
      return this.delete_card(payload)
    },

    close: function() {
      this.$emit('close')
    },

    ...mapActions([
      'unselect_card',
      'update_card',
      'delete_card'
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

.card-details-container {
  display: grid;
}

</style>
