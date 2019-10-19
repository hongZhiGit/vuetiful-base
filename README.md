开心快乐每一天

# vuetify-base

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

## 发版规范

1. XX.XX.XX（大版本.生产版本.小版本迭代 bug 修复、测试）
2. 小版本 bug 修正 统统 末尾追加
3. 所有正式发布的生产版本

## 开发规范

1. ~~var~~
2. 启用 eslint
3. 常量使用 const 变量使用 let
4. 禁止使用 npm 统一使用 yarn
5. 文件名全小写中横线分词
6. 图片名全小写中横线分词
7. 所有項目，都要繼承 base
8. 所有跳轉都要走封裝的方法

## html 约定

1. 网站项目不使用 view，块元素全部使用 div
2. 网站项目禁止使用直接的 html 元素做全局样式定义，全局必须使用.class 或者#id 进行范围控制，可以用 html 和 body，但是需要经过评审同意
3. 新增全局变量需要评审
4. 不允许复写 全局[uni-app] 的样式，如有修改，请自行写样式，并通过调整权重方式修改
5. CSS 样式编写，须遵守 scss 规范，单个页面请按照横向最大块级元素为整体，进行层级嵌套和布局编写
6. 列表高度不允许写死，要通过 item 的高度和个数撑起列表。根据需要可以出现 min-height
7. 不允许直接从其他标注工具中直接 copy 源代码。

## vue 约定

1. vue 方法放置顺序

- extends: [base]
- components
- model
- props
- beforeCreate
- data
- computed
- created/onLoad
- beforeMount
- mounted/onReady
- beforeUpdate
- updated
- beforeDestroy
- destroyed
- methods
- watch

2. props 必须声明验证，指定验证格式，适当情况指定默认值  
   prop 为单向数据流禁止子组件更新数据

正例：

    props: {
      miniVariant: {
        type: Boolean,
        required: true
      },
      clipped: {
        type: Boolean,
        required: true
      },
      drawer: {
        type: Boolean,
        required: true
      },
      st: {
        type: String,
        required: true
      }
    }

反例：
props: ['miniVariant', 'clipped', 'drawer']

3. 此项目的列表数据更新，请全部放在 onShow 中，下拉刷新数据时，请重置相关数据，如'pageIndex','Arr/List','totalRows'

## e2e cypress

1. yarn add cypress --save --dev
2. [yarn run cypress open] or [./node_modules/.bin/cypress open]

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
