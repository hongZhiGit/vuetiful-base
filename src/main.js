import Vue from 'vue';
import './plugins/axios';
import vuetify from './plugins/vuetify';
import './plugins/vant';
import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
import i18n from './plugins/i18n';
import { found } from './utils/rules';
import './routers/guards';
import './plugins/rules';
import './plugins/toasted';

Vue.config.productionTip = false;

Vue.prototype.$rules = found;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
