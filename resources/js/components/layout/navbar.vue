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
                            <a @click="confirmLogout"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar
                                Sesión</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
export default {
    name: 'Navbar',
    setup() {
        const showModal = ref(false); 
        const username = ref('Usuario');
        const dropdownOpen = ref(false);
        const router = useRouter();

        const toggleDropdown = () => {
            dropdownOpen.value = !dropdownOpen.value;
        };

        const createToken = async () => {
            await router.push('/dashboard/create-token');
        };

        const listToken = async () => {
            await router.push('/dashboard');
        };

        const closeModal = () => {
            showModal.value = false; 
        }

        const logout = () => {
            localStorage.removeItem('access-token');
            router.push('/');
        };

        const confirmLogout = async () => {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Deseas cerrar sesión?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No'
            });

            if (result.isConfirmed) {
                logout();
            }
        };

        return { username,confirmLogout, dropdownOpen, toggleDropdown, createToken, listToken, logout, closeModal };
    },
};
</script>