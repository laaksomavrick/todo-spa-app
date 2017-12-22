<template>
  <div class="login-container">
    <div class="login-form">
      <input v-model="email" placeholder="email">
      <input v-model="password" placeholder="password">
      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'Login',

  data: function() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    ...mapGetters([
      'getAuthenticated'
      ])
  },

  methods: {

    login: function() {
      const self = this
      const payload = { auth: {email: this.email, password: this.password} }
      this.fetchUserToken(payload)
        .then(() => {
          console.log(console.log("here1"))
        })
        .catch(() => {
          console.log(console.log("here2"))
        })
    },

    ...mapActions([
      'fetchUserToken'
      ])

  }

}

</script>

<style>
.login-container {
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
}
.login-form {
  justify-self: center;
  align-self: center;
}
</style>
