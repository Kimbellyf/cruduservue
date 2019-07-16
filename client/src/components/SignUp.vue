<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Nome"
            type="nome"
            v-model="nome"
            autocomplete="digite seu nome"
          ></v-text-field>
          <br>
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="senha"
            type="senha"
            v-model="senha"
            autocomplete="digite uma senha"
          ></v-text-field>
           <!-- ajeitar aq - telefone tem vários e é numero e ddd --->
          <v-text-field
            label="Telefone"
            type="telefone"
            v-model="telefone"
            autocomplete="digite seu telefone"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="signUp">
          SignUp
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
      nome: '',
      email: '',
      senha: '',
      telefone: '',
      error: null
    }
  },
  methods: {
    async signUp () {
      try {
        const response = await AuthenticationService.signUp({
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          telefone:this.telefone,
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






