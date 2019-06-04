import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import zhHant from 'vuetify/es5/locale/zh-Hant';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'fa',
  lang: {
    locales: { zhHant },
    current: 'zh-Hant'
  }
});
