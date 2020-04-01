import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './route'
import i18n from './lang/index'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')


