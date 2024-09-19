<template>
    <div class="dashboard">
      <aside class="sidebar">
        <h2>Panel de Control</h2>
        <nav>
            <!--
          <router-link to="/dashboard" class="nav-link">Inicio</router-link>
          <router-link to="/profile" class="nav-link">Perfil</router-link>
          <router-link to="/settings" class="nav-link">Configuraciones</router-link>
          <router-link to="/logout" class="nav-link">Cerrar Sesión</router-link>
        -->
        </nav>
      </aside>
  
      <main class="content">
        <h1>Bienvenido, {{ user.name }}!</h1>
        <div class="stats">
          <div class="stat-item">
            <h3>Usuarios Totales</h3>
            <p>{{ totalUsers }}</p>
          </div>
          <div class="stat-item">
            <h3>Artículos Publicados</h3>
            <p>{{ totalPosts }}</p>
          </div>
        </div>
        <div class="actions">
          <button @click="goToProfile">Ir a mi perfil</button>
          <button @click="goToSettings">Configuraciones</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        user: {
          name: 'Usuario', // Cambia esto por el nombre real del usuario
        },
        totalUsers: 100, // Este valor puede venir de una API
        totalPosts: 50, // Este valor puede venir de una API
      };
    },
    methods: {
      goToProfile() {
        this.$router.push({ name: 'Profile' });
      },
      goToSettings() {
        this.$router.push({ name: 'Settings' });
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
  }
  
  .sidebar {
    width: 250px;
    padding: 20px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
  }
  
  .sidebar h2 {
    margin-bottom: 20px;
  }
  
  .nav-link {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
    margin-bottom: 10px;
  }
  
  .nav-link:hover {
    background-color: #ddd;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .stat-item {
    background: #e9e9e9;
    padding: 20px;
    border-radius: 5px;
    flex: 1;
    margin: 0 10px;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #358a6e;
  }
  </style>
  