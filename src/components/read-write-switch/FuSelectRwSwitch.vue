<template>
  <fu-read-write-switch :write-trigger="writeTrigger" :data="data">
    <template #read>
      <slot name="read">
        {{ data }}
      </slot>
    </template>
    <template #default="{ read }">
      <el-select v-model="data" v-bind="$attrs" @input="input" @blur="blur(read, $event)"
        @change="change(read, $event)">
        <slot>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </slot>
      </el-select>
    </template>
  </fu-read-write-switch>
</template>

<script lang="ts">
export default {
  name: "FuSelectRwSwitch",
};
</script>
<script setup lang="ts">

import { ref, watch } from "vue";
const props = defineProps({
  value: [String, Number],
  options: Array,
  writeTrigger: {
    type: String,
    default: "click",
    validator: (value: string) => {
      return ['click', 'dblclick'].includes(value)
    }
  }
})
const emit = defineEmits(["input", "blur", "change"])
const data = ref(props.value)

watch(() => props.value, (v) => {
  data.value = v
})
function input(e: Event) {
  emit("input", data.value, e)
}
function blur(read: Function, e: Event) {
  setTimeout(() => {
    read()
  }, 100)
  emit("blur", data.value, e)
}
function change(read: Function, e: Event) {
  emit("change", data.value, e)
  read()
}

</script>
