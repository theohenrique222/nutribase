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
import i18n from './i18n';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(i18n);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('VuePreloader', VuePreloader);

app.mount('#app');
