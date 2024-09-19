<template>
  <div class="form-container">
    <h1>Registro</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="name" type="text" placeholder="Nombre" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Contraseña"
          required
        />
        <button type="button" @click="togglePasswordVisibility">
          <span v-if="showPassword">👁️</span>
          <span v-else>🙈</span>
        </button>
      </div>
      <div class="password-input">
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          v-model="confirmPassword"
          placeholder="Confirmar Contraseña"
          required
        />
        <button type="button" @click="toggleConfirmPasswordVisibility">
          <span v-if="showConfirmPassword">👁️</span>
          <span v-else>🙈</span>
        </button>
      </div>
      <button type="submit">Registrarse</button>
      <p v-if="error">{{ error }}</p>
    </form>
    <router-link to="/">
      <button>Ir al home</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { register } from '../auth'; // Asegúrate de tener esta función

export default {
  name: 'RegisterComponent',
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const error = ref('');

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleConfirmPasswordVisibility = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    };

    const handleRegister = async () => {
      if (password.value !== confirmPassword.value) {
        error.value = 'Las contraseñas no coinciden.';
        return;
      }
      try {
        await register({ name: name.value, email: email.value, password: password.value });
        // Redirigir o manejar registro exitoso
      } catch (err) {
        error.value = 'Registro fallido. Por favor, intenta de nuevo.';
      }
    };

    return { name, email, password, confirmPassword, showPassword, showConfirmPassword, error, handleRegister, togglePasswordVisibility, toggleConfirmPasswordVisibility };
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.password-input {
  position: relative;
}

.password-input button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

button[type="submit"], button[type="button"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

button[type="submit"]:hover, button[type="button"]:hover {
  background-color: #358a6e;
}

p {
  color: red;
  text-align: center;
}
</style>
