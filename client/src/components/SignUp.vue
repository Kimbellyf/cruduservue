<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>SignUp</h2>

    <input
      type = "nome"
      name = "nome"
      v-model ="nome"
      placeholder ="nome" />
    <br>
    <input
      type = "email"
      name = "email"
      v-model="email"
      placeholder ="email" />
    <br>
    <input
      type = "senha"
      name = "senha"
      v-model="senha"
      placeholder ="senha" />
    <br>
    <!-- ajeitar aq - telefone tem vários e é numero e ddd --->
    <input
      type = "telefone"
      name = "telefone"
      v-model = "telefone"
      placeholder ="telefone" />
    <br>
    <button @click="signup">
      Cadastrar usuário
    </button>
    
  </div>
</template>

<script>
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nome: '',
      email:'',
      senha:'',
      telefone:'',
      
    }
  },
  methods:{
    async signup(){
      await AuthenticationService.signup({
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        //telefone
      })
      console.log('register button was clicked')
    }
  },
  watch:{
    email(value){
      console.log('email has changed', value)
    }
  },
  mounted(){
    setTimeout(()=>{
      this.email='Hello World'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
