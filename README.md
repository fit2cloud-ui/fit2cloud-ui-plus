# FIT2CLOUD UI PLUS

FIT2CLOUD UI PLUS是基于Element Plus二次开发的Vue 3组件库，提供企业软件开发时常用的组件

### 安装

```sh
npm install fit2cloud-ui-plus
```

使用时需要安装Element Plus

```sh
npm install element-plus --save
```

因为需要使用scss，所以需要安装sass

```sh
npm install -D sass sass-loader
```

如果使用element plus的icon，根据element plus文档安装

```sh
npm install @element-plus/icons-vue
```

### 完整引入

```js
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
### 组件文档

文档地址：https://fit2cloud-ui.github.io/fit2cloud-ui-plus/

### 致谢

- [Element Plus](https://element-plus.org/zh-CN/) 感谢 Element Plus 提供的优秀组件库

### License & Copyright

Copyright (c) 2014-2024 飞致云 FIT2CLOUD, All rights reserved.

Licensed under The GNU General Public License version 3 (GPLv3)  (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

https://www.gnu.org/licenses/gpl-3.0.html

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "
AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
language governing permissions and limitations under the License.
