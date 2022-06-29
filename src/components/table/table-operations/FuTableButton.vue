<template>
  <el-tooltip :content="label" :disabled="!icon">
    <el-button link v-bind="$attrs" :disabled="disabled">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>
<script lang="ts" setup>
defineOptions({ name: "FuTableButton" });
defineProps({
  label: String,
  disabled: Boolean,
  icon: Boolean,
});

</script>
