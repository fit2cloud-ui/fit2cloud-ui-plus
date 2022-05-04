import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../layout/index.vue'
// //获取原型对象上的push函数
// const originalPush = VueRouter.prototype.replace
// //修改原型对象中的push方法
// VueRouter.prototype.replace = function replace(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes: Array<RouteRecordRaw> = [{
    path: "/:type/:comName",
    meta: {
      title: "首页"
    },
    component: Home,
}]
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
  // if (to.path === '/') {
  //   next('/guide/getting-started')
  // }
  next()
})

export default router
