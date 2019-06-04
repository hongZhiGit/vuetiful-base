/*
 * @Author: 吴占超
 * @Date: 2019-04-26 14:24:40
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-06-04 10:49:31
 */
import _ from 'lodash';
import Jsrsasign from 'jsrsasign';
// import Jsencrypt from 'jsencrypt';
import publicKey from '../assets/key/privateKey.js';
import store from '../plugins/store.js';

let rsa = new Jsrsasign.RSAKey(); // 新建RSA对象
rsa = Jsrsasign.KEYUTIL.getKey(publicKey.key); // 设置私钥

/**
 * 校验key为必填
 *
 */
export function validKey (paramKey = 'key') {
  throw new Error(`Missing parameter[${paramKey}]`);
}

/**
 * 签名加密
 *
 * @export
 * @param {*} config
 */
export function sign (config) {
  let sign = [];
  _.mapKeys(config.data, (value, key) => {
    sign.push(`${key}=${_.isObject(value) ? JSON.stringify(value) : value}`);
  });
  const time = new Date().valueOf();
  sign.push(`time=${time}`);
  const tokenDef = store.getters['auth/token'];
  tokenDef && sign.push(`token=${tokenDef}`);
  const user = store.getters['auth/user'];
  user && sign.push(`userid=${user.id}`);
  const signdata = sign.toString('&');
  // 加签
  const hSig = rsa.sign(signdata, 'sha1'); // 加签
  config.headers.sign = Jsrsasign.hex2b64(hSig); // hex 转 b64
  config.headers.token = store.getters['auth/token'];
  config.headers.time = time;
}
