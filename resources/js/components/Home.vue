<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-700">Bienvenido</h2>
      <p class="mt-2 text-center text-gray-600">Elige una opción para continuar</p>

      <div class="mt-6">
        <router-link to="/login">
          <button class="w-full px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
            Iniciar Sesión
          </button>
        </router-link>
      </div>

      <div class="mt-4">
        <router-link to="/register">
          <button class="w-full px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
            Registrarse
          </button>
        </router-link>
      </div>
    </div>
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
