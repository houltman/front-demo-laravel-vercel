<template>
	<Navbar />
	<div>
		<h1 class="text-2xl font-bold">Bienvenido al Dashboard</h1>
		<div v-if="loading" class="loading-spinner">Cargando...</div>
		<div v-else>
			<h1 class="text-1xl font-bold">Listado de tokens</h1>
			<div class="token-cards">
				<div v-for="token in tokens" :key="token.tokenId" class="card">
					<h2 class="card-title">{{ token.name }}</h2>
					<p class="card-id">Token ID: {{ token.tokenId }}</p>
					<p class="card-balance">Balance: {{ token.balance }}</p>
				</div>
			</div>
		</div>
		<div v-if="error" class="error-message">{{ error }}</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { listToken } from '../services/auth';
import Navbar from '../components/layout/navbar.vue';

export default {
	name: 'Dashboard',
	components: {
		Navbar,
	},
	setup() {
		const router = useRouter();
		const loading = ref(true);
		const tokens = ref([]);

		const fetchTokens = async () => {
			try {
				const response = await listToken();

				console.log(response.data);
				//await new Promise(resolve => setTimeout(resolve, 2000));
				tokens.value = response.data.tokens;

				loading.value = false;
			}
			catch (err) {
				error.value = `Error al cargar los datos: ${err.message}`;
			} finally {
				loading.value = false;
			}
		};

		onMounted(() => {
			fetchTokens();
		});

		return { loading, tokens };
	},
};
</script>

<style scoped>
.loading-spinner {
	font-size: 1.5rem;
	text-align: center;
}

.token-cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
}

.card {
	background: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 1.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	flex: 1 1 200px;
	max-width: 300px;
	transition: transform 0.2s;
}

.card:hover {
	transform: scale(1.05);
}

.card-title {
	font-size: 1.25rem;
	font-weight: bold;
}

.card-id,
.card-balance {
	margin: 0.5rem 0;
}

.error-message {
	color: red;
	text-align: center;
}
</style>