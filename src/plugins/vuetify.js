import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';
// import '@fortawesome/fontawesome-free/css/all.css'; public/index 增加cdn引用

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zh-Hans'
  },
  icons: {
    iconfont: 'fa'
  }
});
