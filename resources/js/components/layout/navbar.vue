<template>
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="flex-1 flex items-center justify-start">
                    <div class="flex space-x-4">
                        <button @click="createToken"
                            class="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500">Crear
                            Token</button>
                        <button @click="listToken"
                            class="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500">Listar
                            Token</button>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="relative" @click="toggleDropdown">
                        <span class="text-gray-900 cursor-pointer">{{ username }}</span>
                        <div v-if="dropdownOpen"
                            class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                            <a @click="showModal = true"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar
                                Sesión</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- Modal de Confirmación -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded shadow-lg">
            <h2 class="text-lg font-semibold">Confirmación</h2>
            <p>¿Deseas cerrar sesión?</p>
            <div class="mt-4">
                <button @click="logout" class="mr-2 px-4 py-2 bg-green-600 text-white rounded">
                    Sí
                </button>
                <button @click="close" class="px-4 py-2 bg-gray-300 rounded">
                    No
                </button>
            </div>
        </div>
    </div>
</template>

Script
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Navbar',
    setup() {
        const username = ref('Usuario');
        const dropdownOpen = ref(false);
        const showModal = ref(false);
        const router = useRouter();

        const toggleDropdown = () => {
            dropdownOpen.value = !dropdownOpen.value;
        };

        const createToken = () => {
            // Lógica para crear token
            console.log('Crear Token');
        };

        const listToken = () => {
            // Lógica para listar tokens
            console.log('Listar Token');
        };

        const logout = () => {
            // Lógica para cerrar sesión
            localStorage.removeItem('access-token');
            // Redirigir al login
            router.push('/');
        };

        return { username, dropdownOpen, toggleDropdown, createToken, listToken, logout };
    },
};
</script>