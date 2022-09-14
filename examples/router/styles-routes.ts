/**
 * @componentsDocRoutes 配置样式规范目录
 * {component}是style-guide下每个文件夹的index.vue的name
 * {path}, 动态路由
 * {name}, 目录的中文名以及页面标题
 */
const stylesDocRoutes = [
  {
    name: '输入框样式',
    path: 'input',
    component: () => import('../style-guide/input/index.vue')
  },
  {
    name: '选择器样式',
    path: 'select',
    component: () => import('../style-guide/select/index.vue')
  },
  {
    name: '按钮样式',
    path: 'button',
    component: () => import('../style-guide/button/index.vue')
  },
  {
    name: '消息样式',
    path: 'message',
    component: () => import('../style-guide/message/index.vue')
  },
]

export {stylesDocRoutes};
