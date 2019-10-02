import Vue from 'vue';
import './plugins/axios';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
import i18n from './plugins/i18n';
import './routers/guards';
import './plugins/rules';
import './plugins/toasted';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
