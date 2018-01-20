<template>
  <transition name="modal">
    <div class="modal-mask"
      @click="close"
      v-show="show">
      <div class="modal-container"
        @click.stop>
        <div class="modal-header">
          <button class="" @click="on_delete_prop">Delete</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button class="" @click="close">Close</button>
          <button class="" @click="on_submit_prop">Save</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  props: [
    'show',
    'on_submit',
    'on_delete'
  ],

  methods: {

    close: function() {
      this.close_card_details()
    },

    on_submit_prop: function() {
      this.on_submit()
        .then(_ => {
          this.close()
        })
    },

    on_delete_prop: function() {
      this.on_delete()
        .then(_ => {
          this.close()
        })
    },

    ...mapActions([
      'close_card_details'
    ])

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
  transition: opacity .3s ease;
}
.modal-container {
  width: 50vw;
  height: 75vh;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.33);
  transition: all .3s ease;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webket-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-container textarea {
  resize: none;
}
</style>
