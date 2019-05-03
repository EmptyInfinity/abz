import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/scss/preset.scss'
import './assets/scss/global.scss'
import './assets/scss/media.scss'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
