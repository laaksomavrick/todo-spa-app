<template>
  <transition name="modal">
    <div class="modal-mask"
      @click="close"
      v-show="show">
      <div class="modal-container"
        @click.stop>
        <div class="modal-header">
          <button class="" @click="on_delete_prop">DELETE</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button class="" @click="close">CLOSE</button>
          <button class="" @click="on_submit_prop">SAVE</button>
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

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto 40px;

  width: 50vw;
  height: 75vh;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.33);
  transition: all .3s ease;
}
.modal-header {
  display: flex;
  justify-content: flex-end;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
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
.modal-container button {
 margin-left: 10px;
 margin-right: 10px;
 width: 20%;
 max-width: 100px;
 overflow: hidden;
 border-width: 0;
 outline: none;
 cursor: pointer;
 color: #3cbdb2;
 font-size: 14px;
 font-weight: 600;
 border-radius: 2px;
}

.modal-container button:active {
  background-color: rgba(0,0,0,0.05);
}

.modal-container textarea {
  resize: none;
  border: 1px solid transparent;
  outline: none;
  color: #555;
  padding: 5px;
}
.modal-container textarea:hover {
  border: 1px solid rgba(0,0,0,0.1);
}
</style>
