<template>
  <div :class="['fu-search-conditions', 'fu-search-conditions--' + size]">
    <div class="fu-search-conditions__item" v-for="(condition, index) in conditions">
      <div v-if="condition.label">{{ condition.label }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <el-icon class="condition-remove" @click="remove(index)">
        <Close/>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {ComplexCondition} from "./types";
import {validateSize} from "@/tools/size";

defineOptions({name: "FuSearchConditions"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  conditions: {
    type: Array as PropType<ComplexCondition[]>,
    required: true
  }
})

const emit = defineEmits<{ (e: 'change', conditions: Array<ComplexCondition>): void }>()

function remove(index: number) {
  props.conditions.splice(index, 1)
  emit("change", props.conditions)
}
</script>
