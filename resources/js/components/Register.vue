<template>
    <div class="form-container">
      <h2>Registro</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Contraseña</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
            />
            <button type="button" @click="togglePasswordVisibility">
              <span v-if="showPassword">👁️</span>
              <span v-else>🙈</span>
            </button>
          </div>
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <div class="password-input">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirmPassword"
              v-model="confirmPassword"
              required
            />
            <button type="button" @click="toggleConfirmPasswordVisibility">
              <span v-if="showConfirmPassword">👁️</span>
              <span v-else>🙈</span>
            </button>
          </div>
        </div>
  
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
      handleSubmit() {
        // Aquí puedes manejar el envío del formulario
        if (this.password !== this.confirmPassword) {
          alert("Las contraseñas no coinciden");
          return;
        }
        alert(`Nombre: ${this.name}\nEmail: ${this.email}\nContraseña: ${this.password}`);
        // Aquí iría el código para enviar los datos al backend
      },
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
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
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
  
  button[type="submit"] {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #358a6e;
  }
  </style>
  