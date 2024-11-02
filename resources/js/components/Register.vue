<template>
	<div class="flex items-center justify-center h-screen px-6 bg-gray-200">
		<div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
			<div class="flex items-center justify-center">
				<svg class="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
						fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
						fill="white" />
				</svg>
				<span class="text-2xl font-semibold text-gray-700">Registro</span>
			</div>
			<form class="mt-4" @submit.prevent="handleRegister">
				<label class="block text-left">
					<span class="text-sm text-gray-700">Nombre</span>
				</label>
				<input v-model="name" type="text"
					class="block w-full mt-1 border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 p-2"
					placeholder="" />
				<div v-if="nameError" class="text-red-600 text-sm mt-1">{{ nameError }}</div>

				<label class="block text-left mt-3">
					<span class="text-sm text-gray-700">Apellido</span>
				</label>
				<input v-model="lastname" type="text"
					class="block w-full mt-1 border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 p-2"
					placeholder="" />
				<div v-if="lastnameError" class="text-red-600 text-sm mt-1">{{ lastnameError }}</div>

				<label class="block text-left mt-3">
					<span class="text-sm text-gray-700">Email</span>
				</label>
				<input v-model="email" type="email"
					class="block w-full mt-1 border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 p-2"
					placeholder="" />
				<div v-if="emailError" class="text-red-600 text-sm mt-1">{{ emailError }}</div>

				<label class="block text-left mt-3">
					<span class="text-sm text-gray-700">Contraseña</span>
				</label>
				<input :type="showPassword ? 'text' : 'password'" v-model="password"
					class="block w-full mt-1 border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 p-2"
					placeholder="" />
				<div v-if="passwordError" class="text-red-600 text-sm mt-1">{{ passwordError }}</div>

				<label class="block text-left mt-3">
					<span class="text-sm text-gray-700">Confirmar Contraseña</span>
				</label>
				<input :type="showPassword ? 'text' : 'password'" v-model="confirmPassword"
					class="block w-full mt-1 border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 p-2"
					placeholder="" />
				<div v-if="confirmPassworError" class="text-red-600 text-sm mt-1">{{ confirmPassworError }}</div>

				<div class="mt-6">
					<button type="submit" :disabled="loading"
						class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500">

						<span v-if="loading">Cargando...</span>
						<span v-else>Registrarse</span>
					</button>
				</div>
				<p class="mt-4">
					Ya tienes cuenta?,
					<router-link to="/login" class="text-blue-500 hover:underline">
						Iniciar Sesión
					</router-link>
				</p>

				<!-- Mostrar errores -->
				<div v-if="error" class="mt-4 text-red-600">{{ error }}</div>
			</form>
		</div>
	</div>
</template>


<script>
import { ref } from 'vue';
import { register } from '../services/auth';
import { useRouter } from 'vue-router';

export default {
	name: 'RegisterComponent',
	setup() {
		const name = ref('');
		const lastname = ref('');
		const email = ref('');
		const password = ref('');
		const confirmPassword = ref('');
		const showPassword = ref(false);
		const error = ref('');
		const router = useRouter();
		const nameError = ref('');
		const lastnameError = ref('');
		const emailError = ref('');
		const passwordError = ref('');
		const confirmPassworError = ref('');
		const loading = ref(false);

		const togglePassword = () => {
			showPassword.value = !showPassword.value;
		};
		// agregar en un archivo de utilidades
		const validEmail = (email) => {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
			return re.test(email);
		};

		const handleRegister = async () => {
			nameError.value = '';
			lastnameError.value = '';
			emailError.value = '';
			passwordError.value = '';
			confirmPassworError.value = '';
			error.value = '';

			if (!name.value) {
				nameError.value = 'El nombre es requerido.';
			}

			if (!lastname.value) {
				lastnameError.value = 'El apellido es requerido.';
			}

			if (!email.value) {
				emailError.value = 'El correo electrónico es requerido.';
			} else if (!validEmail(email.value)) {
				emailError.value = 'El correo electrónico no es válido.';
			}

			if (!password.value) {
				passwordError.value = 'La contraseña es requerida.';
			} else if (password.value.length < 8) {
				passwordError.value = 'La contraseña debe tener al menos 6 caracteres.';
			}

			if (!confirmPassword.value) {
				confirmPassworError.value = 'La confirmación de la contraseña es requerida.';
			} else if (confirmPassword.value.length < 8) {
				confirmPassworError.value = 'La confirmación de la contraseña debe tener al menos 6 caracteres.';
			} else if (password.value !== confirmPassword.value) {
				confirmPassworError.value = 'Las contraseñas no coinciden.';
			}

			if (!nameError.value && !lastnameError.value && !emailError.value && !passwordError.value && !confirmPassworError.value) {
				loading.value = true;
				try {
					const response = await register({ name: name.value, lastname: lastname.value, email: email.value, password: password.value, 'confirm-password': confirmPassword.value });
					// Guardar el access-token en localStorage
					localStorage.setItem('access-token', response.data.accessToken);
					// Redirigir al dashboard
					router.push('/dashboard');
				} catch (err) {
					
					error.value = err.response.data.message || 'Registro fallido. Por favor, intente nuevamente.';
					//error.value = 'Registro fallido. Verifica tus datos.';
				}
				finally {
					loading.value = false;
				}
			}
		};

		return {
			name,
			lastname,
			email,
			password,
			confirmPassword,
			showPassword,
			nameError,
			lastnameError,
			emailError,
			passwordError,
			confirmPassworError,
			error,
			togglePassword,
			handleRegister,
			loading,
		};
	},
};
</script>