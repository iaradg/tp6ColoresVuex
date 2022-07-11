import Vue from 'vue'
import App from './App.vue'

/* VUEX / store */
/* https://vuex.vuejs.org/ */
/* npm i vuex@3 */
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
