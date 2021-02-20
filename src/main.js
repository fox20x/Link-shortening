import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

//import messagePlugin from './plugin/message.plugin'
import Loader from './components/Loader.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)
//Vue.use(messagePlugin)
Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
