<template>
  <div>
    <h1>Hola desde Vue!</h1>
    <h2>Hola desde Vue!</h2>
    <h3>Hola desde Vue!</h3>
    <router-link to="/login">
      <button>Ir al Login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
h1 {
  color: blue;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983; /* Color de fondo del botón */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de mano al pasar el mouse */
}
button:hover {
  background-color: #358a6e; /* Color de fondo al pasar el mouse */
}
</style>
