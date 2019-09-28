'use strict';

import Vue from 'vue';
import axios from 'axios';
import store from './store.js';
import { sign, deleteData } from '../utils/validate.js';
import router from './router.js';
import i18n from './i18n';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || '/api'
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

// #region 设置加密和加签
const configSetting = config => {
  config.params && deleteData(config.params);
  config.body && deleteData(config.body);
  store.dispatch('auth/startAjax', `${config.baseURL}${config.url}`);
  config.headers.i18n = i18n.locale;
  if (config.method === 'post') {
    sign(config);
  } else if (store.getters['auth/token']) {
    config.headers.token = store.getters['auth/token'];
  }

  return config;
};
// #endregion

const _axios = axios.create(config);

_axios.interceptors.request.use(
  configSetting,
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    store.dispatch('auth/endAjax', response.config.url);
    // Do something with response data
    // 后台更新token
    response.headers.token && store.dispatch('auth/token', response.headers.token);
    return response;
  },
  function (error) {
    store.dispatch('auth/endAjax', error.config.url);
    // Do something with response error
    if (error.response.status === 500 && error.response.message === '401.1') {
      // 重新登录
      return router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath }
      });
    }
    if (error.response.status === 500 && error.response.message === '401.2') {
      // return Toast.fail(error.response.data.message);
    }
    window.vm.$toasted.error(error.response.data);
    return Promise.reject(error.response.data);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios;
      }
    },
    $axios: {
      get () {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
