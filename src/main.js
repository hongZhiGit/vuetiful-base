import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import '@mdi/font/css/materialdesignicons.css';
import i18n from './plugins/i18n';
import { found } from './utils/rules';

Vue.config.productionTip = false;

Vue.prototype.$rules = found;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
