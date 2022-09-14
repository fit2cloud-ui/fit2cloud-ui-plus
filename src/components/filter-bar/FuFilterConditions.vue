<template>
  <div class="fu-filter-conditions">
    <div class="fu-filter-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <fu-filter-condition-text :condition="condition"/>
      <el-icon class="fu-scale-click" @click="remove(index)">
        <CloseBold/>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import FuFilterConditionText from "@/components/filter-bar/FuFilterConditionText.vue";
import {PropType} from "vue";
import {FilterCondition} from "@/components/filter-bar/types";

const props = defineProps({
  conditions: Array as PropType<Array<FilterCondition>>
})

const emit = defineEmits(["change"])

function remove(index: number) {
  props.conditions?.splice(index, 1)
  emit("change", props.conditions)
}

function text(condition: any) {
  return condition.label + " " + condition.valueLabel || condition.value
}

</script>
