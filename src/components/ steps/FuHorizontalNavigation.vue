<template>
  <el-steps :active="stepper!.index" v-bind="stepper">
    <el-step v-for="(step, index) in steps" :key="index" v-bind="step" @click.native="click(index)"
      :class="disable!(index) && 'fu-step--disable'" />
  </el-steps>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
const props = defineProps({
  stepper: Object,
  steps: Array,
  disable: Function as PropType<(index: number) => boolean>
})
const emit = defineEmits(["active"])
function click(index: number) {
  (!props.disable!(index)) && emit("active", index);
}
</script>
