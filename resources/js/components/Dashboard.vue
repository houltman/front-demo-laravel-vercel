<template>
  
  <Navbar />
  <div>
    <h1 class="text-2xl font-bold">Bienvenido al Dashboard</h1>
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

    };

    return { showModal, confirmLogout };
  },
};
</script>

<style scoped>
/* Estilos opcionales para el modal */
</style>
