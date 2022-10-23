import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createPinia} from "pinia";
import {Notify, Quasar} from 'quasar'

// // Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
//
// // Import Quasar css
import 'quasar/src/css/index.sass'


createApp(App).use(Quasar, {plugins: {Notify}}
).use(router).use(createPinia())
    .mount('#app')

// FILE: main.js

