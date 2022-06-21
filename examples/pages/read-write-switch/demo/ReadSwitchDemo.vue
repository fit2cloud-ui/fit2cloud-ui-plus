<demo>读状态控制</demo>
<template>
  <h3>
    v-model + 事件 控制状态
  </h3>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" v-model="write">
      <el-input v-model="input" @blur="blur" @keydown.native="keydown" />
    </fu-read-write-switch>
  </div>

  <h3>
    slot参数 + 事件 控制状态
  </h3>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" #default="{ r }">
      <el-input v-model="input" @blur="r" @keydown.native="keydown2($event, read)" />
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const input = ref("单击填写")

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

function keydown2(e: Event, r: Function) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    r()
  }
}
</script>
