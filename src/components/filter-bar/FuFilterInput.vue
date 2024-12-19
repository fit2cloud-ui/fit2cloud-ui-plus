<template>
  <el-input class="fu-filter-input" prefix-icon="Search" v-model="quick" @blur="blur" @keydown="keydown"
            @clear="clear" v-bind="$attrs" clearable :size="configSize"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {validateSize} from "@/tools/size";
import {useSize} from "@/hooks";

defineOptions({name: "FuFilterInput"});

defineProps({
  size: {
    type: String,
    validator: validateSize
  },
})

const emit = defineEmits(["change"])
const quick = ref("")
const configSize = useSize()

function blur(e: Event) {
  emit("change", quick.value, e)
}

function clear() {
  emit("change", quick.value)
}

function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    emit("change", quick.value, e)
  }
}
</script>
