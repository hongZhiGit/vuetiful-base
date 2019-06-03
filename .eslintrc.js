module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 分号
    semi: ['error', 'always'],
    // 函数调用时 函数名与()之间不能有空格
    // 'space-before-function-paren': [2, { anonymous: 'never', named: 'never' }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
