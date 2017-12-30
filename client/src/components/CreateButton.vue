<template>
  <div 
    class="board" 
    v-bind:class="{ clicked: isClicked }"
    @mousedown="isClicked = true"
    @mouseup="isClicked = false"
    @click="create">
    <a>+</a>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  
  name: 'createbutton',

  data: function() {

    return { 
      isClicked: false 
    };

  },

  methods: {

    ...mapActions([
      'toggle_editing'
    ]),

    create: function() {
      this.toggle_editing()
    }

  }

}

</script>

<style>
</style>
