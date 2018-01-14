<template>

  <modal 
    :show="show"
    @close="close">
    <div class="modal-header">
      <h3>Card Details</h3>
    </div>
    <div class="modal-body">
      <h3>hi</h3>
    </div>
    <div class="modal-footer">
      <button class="">One</button>
      <button class="">Two</button>
    </div>
  </modal>
  
</template>

<script>

import Modal from '@/components/Modal'

export default {

  props: [
    'show'
  ],

  components: {
    'modal': Modal
  },

  methods: {
    close: function() {
      this.$emit('close');
    }
  }

}

</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  transition: opacity 3s ease;
}
.modal-container {
  width: 300px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.33);
  transition: all 3s ease;
}
</style>
