import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router';

// global components
import Vector from '@/components/Vector.vue';

const app = createApp(App);

app.use(router);
app.component('Vector', Vector);
app.mount('#app');