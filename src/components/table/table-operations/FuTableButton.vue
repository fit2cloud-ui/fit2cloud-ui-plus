<template>
  <el-tooltip :content="label" :disabled="!label">
    <el-button circle :size="size"  v-bind="$attrs" :disabled="disabled">
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
    disabled: Boolean
});

</script>
