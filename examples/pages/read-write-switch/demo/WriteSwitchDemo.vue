<demo>写状态控制</demo>
<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="click" v-model="write">
      <el-input v-model="click" @blur="write = false" />
    </fu-read-write-switch>
  </div>

  <div style="line-height: 40px;">
    <fu-read-write-switch :data="dblclick" v-model="write2" write-trigger="onDblclick">
      <el-input v-model="dblclick" @blur="write2 = false" />
    </fu-read-write-switch>
  </div>

  <div style="line-height: 40px;">
    <fu-read-write-switch :data="manual" v-model="write3" write-trigger="manual">
      <el-input v-model="manual" @blur="write3 = false" />
    </fu-read-write-switch>
    <el-button @click="write3 = true">点击按钮填写</el-button>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const write2 = ref(false)
const write3 = ref(false)
const click = ref("单击填写")
const dblclick = ref("双击填写")
const manual = ref("点击无法填写")
</script>
