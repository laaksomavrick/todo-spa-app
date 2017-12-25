<template>
  <button @click="create">Create</button>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  
  name: 'createbutton',

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
