import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
var VueResource = require('vue-resource');
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
