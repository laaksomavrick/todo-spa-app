<template>
  <div class="brand-wrapper">
    <span>{{ username }}</span>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  name: 'BrandBar',

  mounted: function() {
    console.log(this.get_user)
  },

  computed: {

    username: function() {
      return this.get_user.username
    },

    ...mapGetters([
        'get_user'
      ])

  }

}

</script>

<style>
.brand-container {
  display: flex;
  flex-direction: row;
}

.brand-wrapper {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 2em;
}

.brand-wrapper span {
  color: white;
}
</style>
