/*
 * @Author: 吴占超
 * @Date: 2019-09-08 13:44:02
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-09-08 13:44:33
 */
import Toasted from 'vue-toasted';
import Vue from 'vue';
import i18n from './i18n';

Vue.use(Toasted, {
  position: 'top-center',
  duration: 3000,
  action: {
    text: i18n.t('close'),
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
});
