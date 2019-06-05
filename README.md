# advokate-earn-pos-vuetify

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### vant

1. yarn add vant --save
2. yarn add babel-plugin-import -D
3. babel.config.js

```plugins
  module.exports = {
    presets: [
      '@vue/app'
    ],
    plugins: [
      ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }, 'vant']
    ]
  };
```

4. plugins/vant.js

```vant.js
  import Vue from 'vue';
  import { Uploader, Toast } from 'vant';

  Vue.use(Toast);
  Vue.use(Uploader);
```
