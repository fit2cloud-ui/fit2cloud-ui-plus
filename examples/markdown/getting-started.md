# 快速上手

FIT2CLOUD UI 是基于Element UI二次开发的Vue组件库，提供企业软件开发时常用的组件，过滤器，指令等

## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm install fit2cloud-ui
```

使用时需要安装Element UI

```
npm install element-ui
```


## 完整引入

在 main.js 中写入以下内容：

```
import Vue from 'vue';
import ElementUI from 'element-ui'
import Fit2CloudUI from 'fit2cloud-ui';
import "fit2cloud-ui/src/styles/index.scss"; // 已经包含了element ui的scss
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Fit2CloudUI);

new Vue({
 el: '#app',
 render: h => h(App)
});
```
