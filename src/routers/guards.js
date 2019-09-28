/*
 * @Author: 吴占超
 * @Date: 2019-04-29 11:38:33
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-09-28 14:20:53
 * 导航守卫
 */
'use strict';

import router from '../plugins/router';
import store from '../plugins/store';

router.beforeEach((to, from, next) => {
  const goTo = to.path === '/login';
  if (goTo) {
    next();
  }
  if (!store.getters['auth/token']) {
    router.replace('/login');
  } else {
    next();
  }
});
