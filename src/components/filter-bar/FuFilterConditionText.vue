<template>
  <el-tooltip :content="text" placement="top" :disabled="disabled">
    <div class="condition-text" ref="textRef">{{ text }}</div>
  </el-tooltip>
</template>

<script setup lang="ts">
import {computed, nextTick, onMounted, onUpdated, PropType, ref} from "vue";
import {FilterCondition} from "@/components/filter-bar/types";

const props = defineProps({
  condition: {
    type: Object as PropType<FilterCondition>,
    required: true
  }
})

const textRef = ref<HTMLElement | null>(null)
const disabled = ref(true)

const text = computed(() => {
  let condition = props.condition
  return condition.label + " " + condition.valueLabel || condition.value
})

function computeDisable() {
  nextTick(() => {
    const el = textRef.value
    disabled.value = el === null || el.getBoundingClientRect().width < 320
  })
}

onMounted(() => computeDisable())
onUpdated(() => computeDisable())

</script>
