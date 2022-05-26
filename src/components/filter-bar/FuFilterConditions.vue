<template>
  <div class="fu-filter-conditions">
    <div class="fu-filter-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div class="condition-text">{{ text(condition) }}</div>
      <i class="el-icon-close fu-filter-conditions__remove" @click="remove(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  conditions: Array
})

const emit = defineEmits(["change"])
function remove(index: number) {
  let conditions: any = props.conditions
  conditions.splice(index, 1)
  emit("change", conditions)
}
function text(condition: any) {
  return condition.label + " " + condition.valueLabel || condition.value
}

</script>
