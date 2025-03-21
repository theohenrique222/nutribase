import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';


const app = createApp(App);

app.use(router);
app.use(PrimeVue, { unstyled: false, pt: Aura });

app.component('Menubar', Menubar);
app.component('Badge', Badge);
app.component('InputText', InputText);
app.component('Avatar', Avatar);

app.mount('#app');
