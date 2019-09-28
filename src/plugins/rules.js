/*
 * @Author: 吴占超
 * @Date: 2019-06-03 20:41:39
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-09-28 14:10:09
 */
'use strict';
import i18n from './i18n';
import 'string-format-js';
import Vue from 'vue';

/**
 * 根据给定key获取多语言中的提示文本
 *
 * @export
 * @param {boolean} [{ dis, required = true }={ required: true }]
 * @returns
 */
const found = ({ dis, required = true, isNumber, isIntegral, isMoney, isBatch } = { required: true }) => {
  const rules = [];
  // 必填
  required && rules.push(v => !v && i18n.t('validate.required').format(i18n.t(dis)));
  // 数字
  isNumber && rules.push(v => (typeof (v) !== 'number') && i18n.t('validate.isNumber').format(i18n.t(dis)));
  // 积分（>0的正整数）
  isIntegral && rules.push(v => !(/^[1-9](\d+)?$/.test(v)) && i18n.t('validate.isIntegral').format(i18n.t(dis)));
  // 金钱（2位小数）
  isMoney && rules.push(v => !(/^\d+(\.\d{1,2})?$/.test(v)) && i18n.t('validate.isMoney').format(i18n.t(dis)));
  // 批次规则 大写字母+数字
  isBatch && rules.push(v => !(/^[0-9A-Z]{1,10}$/.test(v)) && i18n.t('validate.isBatch').format(i18n.t(dis)));
  return rules;
};

Vue.prototype.$rules = found;
