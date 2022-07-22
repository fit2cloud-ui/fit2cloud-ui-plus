# 快速上手

FIT2CLOUD UI PLUS是基于Element Plus二次开发的Vue 3组件库，提供企业软件开发时常用的组件

## 安装

推荐使用 npm 的方式安装

```
npm install fit2cloud-ui-plus
```

使用时需要安装Element Plus

```
npm install element-plus --save
```

因为需要使用scss，所以需要安装sass

```
npm install -D sass sass-loader
```

如果使用element plus的icon，根据element plus文档安装

```
npm install @element-plus/icons-vue
```


## 完整引入

在 main.js 中写入以下内容：

```
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Fit2CloudPlus from 'fit2cloud-ui-plus';
import "fit2cloud-ui-plus/src/styles/index.scss"; // 已经包含了element plus的scss

import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element plus的icon需要另安装

const app = createApp(App)
app.use(ElementPlus)
app.use(Fit2CloudPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
```
