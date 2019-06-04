/*
 * @Author: 吴占超
 * @Date: 2019-04-29 11:38:33
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-06-04 10:31:56
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
  if (!store.getters['auth/user']) {
    router.replace('/login');
  } else {
    next();
  }
});
