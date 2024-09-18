import { createApp } from 'vue';

// Importa tu componente
import ExampleComponent from './components/ExampleComponent.vue';

// Crea la instancia de Vue
const app = createApp({});

// Registra el componente
app.component('example-component', ExampleComponent);

// Monta la aplicación
app.mount('#app');
