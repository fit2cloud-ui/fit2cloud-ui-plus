<template>
  <el-tooltip :content="label" :disabled="!icon">
    <el-button link v-bind="$attrs" :disabled="disabled">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>
<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: "default"
  },
  label: String,
  disabled: Boolean,
  icon: Boolean,
});

</script>
