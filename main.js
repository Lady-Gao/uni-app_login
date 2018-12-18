import Vue from 'vue'
import App from './App'

import store from './store'

import service from "./service";
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$service = service
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
