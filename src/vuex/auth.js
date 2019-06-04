/*
 * @Author: 吴占超
 * @Date: 2019-04-26 14:22:12
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-06-04 10:40:42
 */
import Storage from '../utils/storage.js';
import { validKey } from '../utils/validate';
import _ from 'lodash';

// 全局vuex
export default {
  namespaced: true,
  // module assets
  state: {
    // 加载状态
    ajaxLoad: false,
    // ajax正在加载的项目
    loadingItem: [],
    // 当前登陆人
    user: undefined,
    // 未解密的token
    token: undefined,
    // ios用全局
    entryUrl: undefined
  },
  getters: {
    entryUrl (state) {
      return state.entryUrl;
    },
    /**
     * 获取当前登陆用户
     *
     * @returns
     */
    user (state, getters) {
      let user = Storage.getSessionItem('user');
      if (!state.user && user) {
        state.user = user;
      }
      return state.user;
    },
    /**
     * ajax 加载状态
     *
     * @param {any} state
     * @returns Boolean
     */
    ajaxLoad (state) {
      return state.ajaxLoad;
    },
    /**
     * 未解密token
     *
     * @param {*} state
     * @returns
     */
    token (state) {
      let def = Storage.getSessionItem('token');
      if (!state.token && def) {
        state.token = def;
      }
      return state.token;
    }
  },
  mutations: {
    entryUrl (state, value) {
      state.entryUrl = value;
    },
    /**
     * 请求启动
     *
     * @param {any} state
     * @param {any} key
     */
    startAjax (state, key) {
      state.loadingItem.push(key);
      state.ajaxLoad = state.loadingItem.length > 0;
    },
    /**
     * 请求结束
     *
     * @param {any} state
     * @param {any} key
     */
    endAjax (state, key) {
      state.loadingItem = _(state.loadingItem)
        .filter(p => p !== key)
        .value();
      state.ajaxLoad = state.loadingItem.length > 0;
    },
    /**
     * 登陆成功
     *
     * @param {any} state
     * @param {any} [user=validKey()]
     */
    loginSuccess (state, user = validKey()) {
      state.user = user;
    },
    /**
     * 退出
     *
     * @param {any} state
     */
    logoutSuccess (state) {
      state.user = undefined;
    },
    /**
     * 未解密token
     *
     * @param {*} state
     * @param {*} value
     */
    token (state, value) {
      state.token = value;
    }
  },
  actions: {
    entryUrl (context, value) {
      context.commit('entryUrl', value);
    },
    startAjax (context, key = validKey()) {
      context.commit('startAjax', key);
    },
    endAjax (context, key = validKey()) {
      context.commit('endAjax', key);
    },
    /**
     * 登陆成功方法
     *
     * @param {any} context
     * @param {any} user
     */
    loginSuccess (context, user = validKey()) {
      Storage.setSessionItem('user', user);
      context.commit('loginSuccess', user);
    },
    /**
     * 清空登陆人
     *
     * @param {any} context
     */
    logoutSuccess (context) {
      Storage.clearSession('user');
      context.commit('logoutSuccess');
    },
    /**
     * 未解密
     *
     * @param {*} context
     * @param {*} value
     */
    token (context, value) {
      Storage.setSessionItem('token', value);
      context.commit('token', value);
    }
  }
};
