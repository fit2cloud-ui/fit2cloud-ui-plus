<template>
<!-- , 'fu-search-conditions--' + configSize -->
  <div :class="['fu-search-conditions']">
    <div class="fu-search-conditions__item" v-for="(condition, index) in conditions" :key="index">
      <div v-if="condition.label">{{ condition.label }}</div>
      <div v-if="condition.operatorLabel">{{ condition.operatorLabel }}</div>
      <div class="condition-value">{{ condition.valueLabel }}</div>
      <i class="el-icon-close condition-remove" @click="remove(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  conditions: Array
})
const emit = defineEmits(["change"])

function remove(index: number) {
  props.conditions.splice(index, 1)
  emit("change", props.conditions)
}

</script>
