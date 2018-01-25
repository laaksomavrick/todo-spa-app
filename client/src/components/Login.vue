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
      'get_authenticated'
      ])
  },

  methods: {

    login: function() {
      
      const payload = { auth: {email: this.email, password: this.password} }
      this.fetch_user_token(payload)
        .then(_  => {
          this.startup()
            .then(_ => {
                this.$router.push('/')
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    ...mapActions([
      'fetch_user_token',
      'startup'
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
