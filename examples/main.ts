import {createApp} from 'vue'
import App from './App.vue'
import i18n from './locale'
// 整体引入
import Fit2CloudPlus from '@/index'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index";
import CodeExample from "./components/CodeExample.vue";
import DocumentTable from "./components/DocumentTable.vue";
import "github-markdown-css";

// UI样式
import './index.scss';

const app = createApp(App);
app.use(router)
const options = {size: 'default', zIndex: 3000, i18n: i18n.global.t}
app.use(Fit2CloudPlus, options);
app.use(ElementPlus, options)
app.use(i18n);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('code-example', CodeExample)
app.component('document-table', DocumentTable)

app.mount("#app");
