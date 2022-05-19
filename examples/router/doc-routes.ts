

/**
 * @componentsDocRoutes 配置组件目录
 * {component}是pages下每个文件夹的index.vue的name, 命名规则第一个字母大写Doc结尾
 * {path}, 动态路由
 * {name}, 目录的中文名以及页面标题
 */
const componentsDocRoutes = [
  {
    name: 'Table 表格',
    path: 'table',
    component: () => import('../pages/table/index.vue')
  },
  {
    name: 'SearchBar 搜索条',
    path: 'search',
    component: () => import('../pages/search/index.vue')
  },
  {
    name: 'SplitPane 分割面板',
    path: 'split-pane',
    component: () => import('../pages/split-pane/index.vue')
  },
  {
    name: 'Tabs 标签页',
    path: 'tabs',
    component: () => import('../pages/tabs/index.vue')
  },
]

export { componentsDocRoutes };
