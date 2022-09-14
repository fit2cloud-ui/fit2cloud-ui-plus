<template>
  <!-- 一级标题 -->
  <h1 class="component-h1">消息通知样式</h1>
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
import BaseMessage from "./BaseMessage.vue"

const comList = [
  {
    title: "基础消息通知",
    titleDesc: "",
    component: BaseMessage,
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
