<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <!-- :size="configSize"  -->
    <el-button class="fu-search-bar-button" circle v-bind="$attrs" />
    <!-- <slot></slot> -->
     <!-- *****element问题  加上插槽 空的情况下渲染多出一个span标签问题 待考虑 -->
  </el-tooltip>
</template>

<script lang="ts">
export default {
  name: "FuSearchBarButton",
};
</script>

<script setup lang="ts">
defineProps({
  tooltip: String
});
</script>
