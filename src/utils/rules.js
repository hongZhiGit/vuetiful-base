/*
 * @Author: 吴占超
 * @Date: 2019-06-03 20:41:39
 * @Last Modified by:   吴占超
 * @Last Modified time: 2019-06-03 20:41:39
 */
'use strict';
import i18n from '../plugins/i18n';
import 'string-format-js';

export function found ({ dis, required = true } = { required: true }) {
  const rules = [];
  required && rules.push(v => !v && i18n.t('validate.required').format(i18n.t(dis)));
  return rules;
}
