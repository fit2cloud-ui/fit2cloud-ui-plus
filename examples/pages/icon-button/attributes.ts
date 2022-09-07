/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export const attributes = [
  {
    name: 'IconButton',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'name',
            desc: 'el-icon 名称，例如：Search',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'size',
            desc: '图标的大小，size x size，例如:20或20px',
            type: 'Number, String',
            enum: '-',
            default: '20',
          },
          {
            prop: 'color',
            desc: '图标颜色',
            type: 'String',
            enum: '-',
            default: 'inherit',
          },
          {
            prop: 'loading',
            desc: '值为true，图标就可以在 2 秒内旋转 360 度',
            type: 'Boolean',
            enum: '-',
            default: 'false',
          },
          {
            prop: 'disabled',
            desc: '是否禁用',
            type: 'Boolean',
            enum: '-',
            default: 'false',
          },
        ]
      },
      {
        name: "@Events",
        header: {
          event: "事件名",
          desc: "说明",
          value: "回调参数",
        },
        table: [
          {
            event: "click",
            desc: "点击时触发",
            value: "MouseEvent",
          },
        ],
      },
    ]
  }
];
