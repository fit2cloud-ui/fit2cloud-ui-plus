<template>
  <div class="fu-filter-conditions">
    <div class="fu-filter-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div class="condition-text">{{ text(condition) }}</div>
      <el-icon class="fu-scale-click" @click="remove(index)">
        <CloseBold/>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  conditions: Array
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
