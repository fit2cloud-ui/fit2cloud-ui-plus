<template>
  <el-steps :active="active" v-bind="stepper" direction="vertical" >
    <el-step v-for="(step, i) in steps" :key="i" v-bind="step" @click="click(i)"
      :class="disable!(i) && 'fu-step--disable'">
      <template #description>
        <span>{{ step.description }}</span>
        <el-collapse-transition>
          <div class="fu-steps__container" v-if="i === active" :style="heightStyle">
            <slot v-bind:step="step"></slot>
          </div>
        </el-collapse-transition>
      </template>
    </el-step>
  </el-steps>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from "vue";
import {Step} from "@/components/ steps/Stepper";
const props = defineProps({
  stepper: Object,
  steps: Array as PropType<Step[]>,
  disable: Function as PropType<(index: number) => boolean>
})
const emit = defineEmits(["active"])

const active = computed(() => {
  return props.stepper!.index
})

const heightStyle = computed(() => {
  return {
    height: parseInt(props.stepper?.height) + "px" || "auto",
  };
})

function click(index: number) {
  !props.disable!(index) && emit("active", index);
}
</script>
