import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Doc from '../layout/index.vue'

import {componentsDocRoutes} from "./doc-routes";
import {stylesDocRoutes} from "./styles-routes";

// md文档文件
import {h} from 'vue'
import Markdown from '../components/Markdown.vue'
import {html as gettingStarted} from '../markdown/getting-started.md'

const md = (string: any) => h(Markdown, {content: string, key: string});
const GetStartedDoc = md(gettingStarted);

export const routes: Array<RouteRecordRaw> = [
  {
    name: "开发指南",
    path: "/guide",
    redirect: "/guide/getting-started",
    component: Doc,
    children: [
      {
        name: "快速上手",
        path: "getting-started",
        component: GetStartedDoc,
      },
    ]
  },
  {
    name: "组件",
    path: "/components",
    component: Doc,
    children: componentsDocRoutes,
  },
  {
    name: "样式规范",
    path: "/styles",
    component: Doc,
    children: stylesDocRoutes,
  },
]
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  scrollBehavior: () => ({
    top: 0
  }),
  routes,
})

router.beforeEach((to, from, next) => {
  const scrollParent = document.querySelector(
    ".page-component__scroll > .el-scrollbar__wrap"
  )
  if (scrollParent) {
    scrollParent.scrollTop = 0
  }
  if (to.path === '/') {
    next('/guide/getting-started')
  }
  next()
})

export default router
