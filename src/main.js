import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import './plugins/vant';
import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
import i18n from './plugins/i18n';
import { found } from './utils/rules';
import './routers/guards';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.prototype.$rules = found;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
