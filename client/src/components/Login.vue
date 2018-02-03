<template>
  <div class="login-container">
    <div class="login-form">
      <span class="login-form-item"> Resolution </span>
      <input class="login-form-item" type="text" autocomplete="off" v-model="email" placeholder="email">
      <input class="login-form-item" type="password" autocomplete="off" v-model="password" placeholder="password">
      <button class="login-form-item" v-on:click="login">Login</button>
    </div>
    <vue-particles 
      class="login-particles" 
      color="#dedede"
      :particlesNumber="60"
      :lineLinked="false"
      :hoverEffect="false"
      :moveSpeed="2"
      :clickEffect="false"
      >
    </vue-particles>
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
          this.set_loading(true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    ...mapActions([
      'fetch_user_token',
      'startup',
      'set_loading'
      ])

  }

}

</script>

<style>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #0eb8b6, #098ebf);
  overflow: hidden;
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20vw;
  height: 75vh;
  position: absolute;
  z-index: 9999;
}
.login-particles {
  opacity: 0.8;
  height: 100%;
  width: 100%;
}
.login-form-item {
  margin: 10px;
  padding: 5px;
  width: 100%;
  height: 30px;
  font-size: 16px;
}
.login-form input {
  resize: none;
  border: 1px solid transparent;
  outline: none;
  color: white!important;
  background-color: transparent!important;
  background: transparent!important;
}
.login-form span {
  color: white;
  font-weight: 500;
  font-size:22px;
  text-align: center;

}
.login-form button {
  padding: 2px;
  overflow: hidden;
  border-width: 0;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  border-radius: 2px;
  color: white;
  background: rgba(255,255,255,0.1);
  height: 40px;
}
.login-form button:active {
  background: rgba(255,255,255,0.2);
}
.login-form ::placeholder {
  color: rgba(255,255,255,0.5);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
}
</style>
