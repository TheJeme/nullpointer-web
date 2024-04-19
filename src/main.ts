import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(router)

app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireFirestoreOptionsAPI(),
  ],
})

app.mount('#app')
