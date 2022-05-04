/**
 * @docMenus 配置导航目录
 * {component}是pages下每个文件夹的index.vue的name, 命名规则第一个字母大写Doc结尾
 * {path}, 动态路由
 * {name}, 目录的中文名以及页面标题
 */
 export const docMenus = {
  // guide: [
  //   {
  //     name: "快速上手",
  //     path: "getting-started",
  //     component: "GettingStartedDoc",
  //   },
  // ],
  components: [
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
    component: 'SplitPaneDoc'
    },
  ],
  // filters: [],
  // directives: [],
};

/**
 * @group 目录分组({name: string, value: string})[]
 */
const group = [
  {
    name: "开发指南",
    value: "guide",
  },
  {
    name: "组件",
    value: "components",
  },
  // {
  //   name: "过滤器",
  //   value: "filters",
  // },
  // {
  //   name: "指令",
  //   value: "directives",
  // },
];

/**
 * @getGroupName 将一级分类的value转name
 */
 export const getGroupName = (val: String) => {
  let name;
  group.map((item) => {
    if (val === item.value) {
      name = item.name;
    }
  });
  return name || "组件";
};

export default {
  docMenus,
  getGroupName,
};
