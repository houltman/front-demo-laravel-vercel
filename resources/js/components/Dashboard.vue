<template>
  
  <Navbar />
  <div>
    <h1 class="text-2xl font-bold">Bienvenido al Dashboard</h1>
    <button @click="showModal = true" class="mt-4 px-4 py-2 bg-red-600 text-white rounded">
      Cerrar Sesión
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/layout/navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
  },
  setup() {
    const showModal = ref(false);
    const router = useRouter();

    const confirmLogout = () => {
      // Eliminar el access-token de localStorage
      localStorage.removeItem('access-token');
      // Redirigir al login
      router.push('/'); // Asegúrate de que la ruta de login sea correcta
    };

    return { showModal, confirmLogout };
  },
};
</script>

<style scoped>
/* Estilos opcionales para el modal */
</style>
