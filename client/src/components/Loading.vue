<template>
  <transition name="loading">
    <div 
      v-show="show"
      class="loading-screen">
      Loading...
    </div>
  </transition>
</template>

<script>

export default {

  props: [
    'show'
  ],

}
</script>

<style>
.loading-screen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #0eb8b6, #098ebf);
  color: white;
  transition: opacity .5s;
}
.loading-enter-active, .loading-enter-leave {
  transition: opacity .5s;
}

.loading-enter, .loading-leave-to {
  opacity: 0;
}
</style>
