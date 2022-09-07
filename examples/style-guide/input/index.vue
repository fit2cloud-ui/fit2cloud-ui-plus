<template>
  <!-- 一级标题 -->
  <h1 class="component-h1">输入框样式</h1>
  <!-- 一级描述 -->
  <p>样式定义来自于src/styles/themes/default.scss，如需替换样式，请参照default.scss自行定义</p>
  <!--内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <component :is="item.component"/>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue"
import SearchInput from "./SearchInput.vue"
import TextArea from "./Textarea.vue"

const comList = [
  {
    title: "基础输入框",
    titleDesc: "包含 Normal / Hover / Activated / Inputting / Complete / Disable / Error 状态的样式，自行点击查看",
    component: BaseInput,
    description: ""
  }, {
    title: "搜索输入框",
    titleDesc: "包含 Normal / Hover / Activated / Inputting / Complete / Disable / Error 状态的样式，自行点击查看",
    component: SearchInput,
    description: ""
  }, {
    title: "富文本输入框",
    titleDesc: "包含 Normal / Hover / Activated / Inputting / Complete / Disable / Error 状态的样式，自行点击查看",
    component: TextArea,
    description: ""
  },
]
</script>

<style lang="scss" scoped>
.component-h1 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}

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
