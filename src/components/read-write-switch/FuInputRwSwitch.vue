<template>
  <fu-read-write-switch :write-trigger="writeTrigger" :data="data">
    <template #default="{ read }">
      <el-input v-model="data" v-bind="$attrs" @input="input" @blur="blur(read, $event)"
                @keydown="keydown(read, $event)"/>
    </template>
  </fu-read-write-switch>
</template>

<script setup lang="ts">

import FuReadWriteSwitch from "@/components/read-write-switch/FuReadWriteSwitch.vue";
import {ref, watch} from "vue";

defineOptions({name: "FuInputRwSwitch"});
const props = defineProps({
  value: [String, Number],
  writeTrigger: {
    type: String,
    default: "click",
    validator: (value: string) => {
      return ['click', 'dblclick'].includes(value)
    }
  }
})
const emit = defineEmits(["input", "blur"])

const data = ref(props.value)

watch(() => props.value, (v) => {
  data.value = v
})

function input(e: Event) {
  emit("input", data.value, e)
}

function blur(read: Function, e: Event) {
  emit("blur", data.value, e)
  read()
}

function keydown(read: Function, e: KeyboardEvent) {
  if (e.key === "Enter") {
    read()
  }
}
</script>
