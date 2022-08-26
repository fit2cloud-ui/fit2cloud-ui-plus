<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button class="fu-search-bar-button" circle :size="size" v-bind="$attrs"/>
  </el-tooltip>
</template>


<script setup lang="ts">
import {validateSize} from "@/tools/size";

defineOptions({name: "FuSearchBarButton"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  tooltip: String
})
</script>
