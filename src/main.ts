import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createPinia} from "pinia";
import {Notify, Quasar} from 'quasar'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// // Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// // Import Quasar css
import 'quasar/src/css/index.sass'


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
    .use(Quasar, {plugins: {Notify}}
    ).use(router).use(pinia)
    .mount('#app')

// FILE: main.js

