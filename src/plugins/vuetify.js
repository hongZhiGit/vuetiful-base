import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import zhHant from 'vuetify/es5/locale/zh-Hant';

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'mdi',
  lang: {
    locales: { zhHant },
    current: 'zh-Hant'
  }
});
