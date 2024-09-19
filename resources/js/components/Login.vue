<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>

    <router-link to="/">
      <button>Ir al home</button>
    </router-link>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { login } from '../auth';
  
  export default {
     name: 'LoginComponent',
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref('');
  
      const handleLogin = async () => {
        try {
          await login({ email: email.value, password: password.value });
          // Redirigir o manejar login exitoso
        } catch (err) {
          error.value = 'Login failed. Please check your credentials.';
        }
      };
  
      return { email, password, error, handleLogin };
    },
  };


  </script>
  