<template>
  <el-input class="fu-filter-input" prefix-icon="Search" v-model="quick" @input="input" @blur="blur" @keydown="keydown"
            @clear="clear" v-bind="$attrs" clearable :size="configSize"/>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {validateSize} from "@/tools/size";
import {useSize} from "@/hooks";

defineOptions({name: "FuFilterInput"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  modelValue: String,
})

const emit = defineEmits(["update:modelValue", "change"])
const quick = ref("")
const configSize = useSize()

watch(() => props.modelValue, (val: any) => {
  quick.value = val
})

function input(e: Event) {
  emit("update:modelValue", quick.value, e)
}

function blur(e: Event) {
  emit("change", quick.value, e)
}

function clear() {
  emit("update:modelValue", quick.value)
  emit("change", quick.value)
}

function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    emit("change", quick.value, e)
  }
}
</script>
