import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import NonMobileViewing from './components/NonMobileViewing.vue'
import MobileMin from './components/MobileMin.vue'
import router from './router'
import axios from 'axios' 
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueScrollReveal from 'vue-scroll-reveal';
import VueParticles from 'vue-particles'

Vue.use(Vuetify)
Vue.use(VueParticles)
Vue.use(VueScrollReveal);

Vue.config.productionTip = false


axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


new Vue({
  router,
  components: { Home, NonMobileViewing, MobileMin },
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: "#home",
//   components: { Home, NonMobileViewing, MobileMin },
//   template: "<Home />"
// });
