<template>

  <modal 
    :show="show"
    :on_submit="on_submit"
    :on_delete="on_delete">
    <div class="card-details-container">
      <autosize-textarea class="modal-title-textarea" v-model="card.title" placeholder="Add a title..."/>
      <autosize-textarea class="modal-body-textarea" v-model="card.description" placeholder="Add a description..."/>
    </div>
  </modal>
  
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Modal from '@/components/Modal'
import AutosizeTextArea from '@/components/AutosizeTextArea'

export default {

  props: [
    'show'
  ],

  components: {
    'modal': Modal,
    'autosize-textarea': AutosizeTextArea
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
      const card = Object.assign({}, this.get_selected_card)
      return card
    },

    ...mapGetters([
      'get_selected_card',
    ])

  }

}

</script>

<style>

.card-details-container {
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 6fr;
  grid-template-areas:
  "modal-title-textarea"
  "modal-body-textarea"

}

.modal-title-textarea {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  height: 32px;
}

.modal-body-textarea {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

</style>
