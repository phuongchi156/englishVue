import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import { firestorePlugin } from 'vuefire'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'






Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
