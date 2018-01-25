<template>
<div class="brand-menu-wrapper">
    <div 
      v-on:mouseover="dropdown = true"
      v-on:mouseleave="dropdown = false"
      class="brand-menu">
      <span>Signed in as {{ username }}</span>
      <div v-bind:class="{ visible: dropdown }" class="brand-menu-dropdown-container">
        <div class="brand-menu-dropdown">
          <a class="dropdown-item" @click="click_logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'BrandBar',

  data: function() {
    return {
      dropdown: false
    }
  },

  methods: {

    click_logout: function() {
      this.logout()
      this.$router.push('login')
    },

    ...mapActions([
      'logout' 
    ])

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

.brand-menu-wrapper {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 2em;
}

.brand-menu-wrapper span {
  color: white;
}

.brand-menu-dropdown-container {
  padding-top: 4px;
  position: absolute;
  right: 32px;
  opacity: 0;
  transition: opacity 100ms;
  z-index: -1;
}

.brand-menu-dropdown-container:hover {
  opacity: 1;
  display: inherit;
}

.brand-menu-dropdown {
  background: #fff;
  padding: 8px 16px;
  border-radius: 5px;
}

.dropdown-item {
  display: block;
  padding: 4px 0;
  /*border-bottom: 1px solid #eaeaea;*/
  cursor: pointer;
  min-width: 100px;
}

.visible {
  z-index: 1;
  opacity: 1; 
}
</style>
