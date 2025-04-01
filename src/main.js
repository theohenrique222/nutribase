import { createApp } from 'vue';
import './assets/main.css';
import App from './views/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"



const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);

app.mount('#app');
