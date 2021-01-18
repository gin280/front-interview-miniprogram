import Vue from 'vue'
import App from './App'

import CompJS from './pages/js/index.vue'
Vue.component('comp-js', CompJS)

import CompCss from './pages/css/index.vue'
Vue.component('comp-css', CompCss)

import CompHtml from './pages/html/index.vue'
Vue.component('comp-html', CompHtml)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



