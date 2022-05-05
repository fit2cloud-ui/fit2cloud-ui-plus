

/**
 * @componentsDocRoutes 配置组件目录
 * {component}是pages下每个文件夹的index.vue的name, 命名规则第一个字母大写Doc结尾
 * {path}, 动态路由
 * {name}, 目录的中文名以及页面标题
 */
const componentsDocRoutes = [
  // {
  //   name: 'Table 表格',
  //   path: 'table',
  //   component: 'TableDoc'
  // },
  // {
  //   name: 'SearchBar 搜索条',
  //   path: 'search',
  //   component: 'SearchDoc'
  // },
  {
    name: 'SplitPane 分割面板',
    path: 'split-pane',
    component: () => import('../pages/split-pane/index.vue')
  },
]

// /**
//  * @docMenus 目录，侧边栏使用
//  */
// const docMenus: any = [
//   {
//     name: "开发指南",
//     value: "guide",
//     children: [
//       {
//         name: "快速上手",
//         path: "getting-started",
//         component: Doc,
//         children: docRoutes,
//         component: GetStartedDoc,
//       },
//     ]
//   },
//   {
//     name: "组件",
//     value: "components",
//     children: componentsList
//   },
//   // {
//   //   name: "过滤器",
//   //   value: "filters",
//   // },
//   // {
//   //   name: "指令",
//   //   value: "directives",
//   // },
// ];



export { componentsDocRoutes };
