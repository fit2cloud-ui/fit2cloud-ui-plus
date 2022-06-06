<template>
  <div>
    <!-- 一级标题 -->
    <h1 class="component-h1">ReadWriteSwitch 读写切换</h1>
    <!-- 一级描述 -->
    <p>读状态与写状态切换，读状态默认显示只读文本，可以自定义读/写状态的内容</p>
    <!--内容 -->
    <div class="component-block" v-for="(item, index) in comList" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.titleDesc }}</p>
      <code-example :component="item.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDemo from "./demo/BaseDemo.vue";
import CustomContentDemo from "./demo/CustomContentDemo.vue";
import InputRwSwitchDemo from "./demo/InputRwSwitchDemo.vue";
import ReadSwitchDemo from "./demo/ReadSwitchDemo.vue";
import SelectRwSwitchDemo from "./demo/SelectRwSwitchDemo.vue";
import TableInnerEditDemo from "./demo/TableInnerEditDemo.vue";
import WriteSwitchDemo from "./demo/WriteSwitchDemo.vue";
const comList = [
  {
    title: "基本用法",
    titleDesc: "读写状态切换，允许自定义读写内容、自定义读写状态控制，可用于Table 表内编辑等",
    component: BaseDemo,
  },
  // {
  //   title: "写状态控制",
  //   titleDesc: "单击，双击，手动触发",
  //   component: WriteSwitchDemo,
  // },
  // {
  //   title: "读状态控制",
  //   titleDesc: "使用v-model或者使用slot的参数切换读状态",
  //   component: ReadSwitchDemo,
  // },
  // {
  //   title: "自定义读写内容",
  //   titleDesc: "v-slot:read 和 v-slot:default 分别为读内容和写内容",
  //   component: CustomContentDemo,
  // },
  // {
  //   title: "InputRwSwitch",
  //   titleDesc: "Input状态切换组件",
  //   component: InputRwSwitchDemo,
  //   description: `继承el-input的功能`
  // },
  // {
  //   title: "SelectRwSwitch",
  //   titleDesc: "Select状态切换组件",
  //   component: SelectRwSwitchDemo,
  //   description: `继承el-select的功能`
  // },
  // {
  //   title: "表格行内编辑",
  //   titleDesc: "使用 InputRwSwitch 和 SelectRwSwitch 实现行内编辑功能",
  //   component: TableInnerEditDemo,
  // }
]

</script>

<style lang="scss" scoped>
.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
