import { createApp } from 'vue'
import App from './App.vue'
// 整体引入
import Fit2CloudPlus from '@/index'
import ElementPlus from 'element-plus'
import router from "./router/index";
// import pages from './pages/index'
import CodeExample from "./components/CodeExample.vue";
import "github-markdown-css";

// UI样式
import '@/styles/index.scss';

const app = createApp(App);
// pages(app)
app.use(router).use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(Fit2CloudPlus);
app.component('code-example', CodeExample)


app.mount("#app");
