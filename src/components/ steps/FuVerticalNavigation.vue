<template>
  <el-steps :active="stepper?.index" v-bind="stepper" direction="vertical" >
    <el-step v-for="(step, i) in steps" :key="i" v-bind="step" @click="click(i)"
      :class="disable!(i) && 'fu-step--disable'">
      <template #description>
        <span>{{ step?.description }}</span>
        <el-collapse-transition>
          <div class="fu-steps__container" v-if="i === stepper?.index" :style="heightStyle">
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
const props = defineProps({
  stepper: Object,
  steps: Array,
  disable: Function as PropType<(index: number) => boolean>
})
const emit = defineEmits(["active"])

const heightStyle = computed(() => {
  return {
    height: parseInt(props.stepper?.height) + "px" || "auto",
  };
})

function click(index: number) {
  !props.disable!(index) && emit("active", index);
}
</script>
