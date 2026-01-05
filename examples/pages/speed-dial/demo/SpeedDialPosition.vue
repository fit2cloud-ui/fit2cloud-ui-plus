<demo>定位方式</demo>
<template>
  <div class="speed-dial-demo">
    <div>
      拖拽:
      <el-radio-group v-model="movable">
        <el-radio :value="true">允许</el-radio>
        <el-radio :value="false">禁止</el-radio>
      </el-radio-group>
    </div>
    <div>
      position:
      <el-radio-group v-model="position">
        <el-radio value="absolute">absolute</el-radio>
        <el-radio value="fixed">fixed</el-radio>
      </el-radio-group>
    </div>

    <div class="speed-dial-move">
      <fu-speed-dial :position="position" bottom="calc(50% - 20px)" right="calc(50% - 20px)" :movable="movable"
        :items="items" @click="click" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const items = [
  { title: "Item 1", click: clickItem },
  { title: "Item 2", click: clickItem },
  { title: "Item 3", click: clickItem, icon: "Avatar" },
  { title: "Item 4", click: clickItem },
  { title: "Item 5", click: clickItem },
]
const position = ref("absolute")
const movable = ref(false)

function click(obj: any, e: any) {
  console.log(obj, e)
}
function clickItem(item: any, e: any) {
  console.log(item, e)
}
</script>

<style lang="scss" scoped>
.speed-dial-demo {
  width: 100%;

  .speed-dial-move {
    margin-top: 10px;
    border: 1px #7c7c7c dashed;
    position: relative;
    width: 100%;
    height: 100px;
  }
}
</style>
