import { createApp } from 'vue'
import App from './App.vue'
// 整体引入
import Fit2CloudPlus from '@/index'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index";
import CodeExample from "./components/CodeExample.vue";
import DocumentTable from "./components/DocumentTable.vue";
import "github-markdown-css";

// UI样式
import '@/styles/index.scss';
const app = createApp(App);
app.use(router).use(ElementPlus, { size: 'default', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(Fit2CloudPlus);
app.component('code-example', CodeExample)
app.component('document-table', DocumentTable)

app.mount("#app");
