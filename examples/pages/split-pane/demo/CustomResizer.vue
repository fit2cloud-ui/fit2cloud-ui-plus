<demo>嵌套用法</demo>
<template>
  <div class="demo-split">
    <fu-split-pane left="200" direction="horizontal" :resizer-style="{ width: '10px' }">
      <template #left>
        <div style="padding-right:5px">
          Left
        </div>
      </template>
      <template #resizer>
        <el-icon :size="10">
          <DCaret />
        </el-icon>
      </template>
      <template #right>
        <div style="padding-left:5px">
          Right
        </div>
      </template>
    </fu-split-pane>
  </div>
  <el-divider></el-divider>
  <div class="demo-split">
    <fu-split-pane top="50%" direction="vertical" :resizer-style="{ height: '10px' }">
      <template #top>
        Top
      </template>
      <template #resizer>
        <el-icon :size="10">
          <DCaret />
        </el-icon>
      </template>
      <template #bottom>
        <div style="padding-top:5px">
          Bottom
        </div>
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
