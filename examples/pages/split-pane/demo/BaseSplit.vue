<demo>基本用法</demo>
<template>
  <el-divider content-position="left">水平分割</el-divider>
  <div class="demo-split">
    <fu-split-pane left="200px">
      <template #left>
        Left
      </template>
      <template #right>
        Right
      </template>
    </fu-split-pane>
  </div>
  <el-divider content-position="left">垂直分割</el-divider>
  <div class="demo-split">
    <fu-split-pane top="40%" direction="vertical">
      <template #top>
        Top
      </template>
      <template #bottom>
        Bottom
      </template>
    </fu-split-pane>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
</style>
