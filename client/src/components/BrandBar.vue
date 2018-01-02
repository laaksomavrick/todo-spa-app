<template>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  name: 'BrandBar',

  computed: {

    ...mapGetters([
        'get_selected_board'
      ])

  }

}

</script>

<style>

</style>
