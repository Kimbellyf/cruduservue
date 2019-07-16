    
<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="SignIn">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Senha"
          type="Senha"
          v-model="password"
        ></v-text-field>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="signin">
          SignIn
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      senha: '',
      error: null
    }
  },
  methods: {
    async signIn () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          senha: this.senha
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'users'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>