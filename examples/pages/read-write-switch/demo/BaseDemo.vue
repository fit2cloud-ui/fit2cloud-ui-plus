<demo>基本用法</demo>
<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" v-model="write" @change="change">
      <el-input v-model="input" @blur="blur" @keydown="keydown" />
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const input = ref("单击填写")

function change(obj: any) {
  console.log(obj)
}
function read() {
  write.value = false
}
function blur() {
  read()
}
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    read()
  }
}
</script>
