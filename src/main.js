import { createApp } from 'vue';
import './assets/main.css';
import App from './views/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import Dialog from 'primevue/dialog';
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css'

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('VuePreloader', VuePreloader);

app.mount('#app');
