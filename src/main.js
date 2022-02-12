import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import router from './router';

// global components
import Vector from '@/components/Vector.vue';

const app = createApp(App);

app.use(router);
app.use(Velocity);
app.component('Vector', Vector);
app.mount('#app');