<template>
  <el-input class="fu-search-input" prefix-icon="Search" v-model="quick" @input="input" @blur="blur" @keydown="keydown"
    v-bind="$attrs" clearable :size="size"/>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { validateSize } from "@/tools/size";
defineOptions({ name: "FuSearchInput" });

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  value: String,
})
const emit = defineEmits(["input", "change"])
const quick = ref("")

watch(() => props.value, (val: any) => {
  quick.value = val
})

function input(e: Event) {
  emit("input", quick.value, e)
}
function blur(e: Event) {
  emit("change", quick.value, e)
}
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    emit("change", quick.value, e)
  }
}
</script>
