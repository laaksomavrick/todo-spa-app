<template>
  <transition name="modal">
    <div class="modal-mask"
      @click="close"
      v-show="show">
      <div class="modal-container"
        @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>


export default {

  props: [
    'show'
  ],

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
  transition: opacity .3s ease;
}
.modal-container {
  width: 300px;
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
</style>
