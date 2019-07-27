import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueScrollReveal from 'vue-scroll-reveal';
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(Vuetify)
Vue.use(VueScrollReveal);

Vue.config.productionTip = false


axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
