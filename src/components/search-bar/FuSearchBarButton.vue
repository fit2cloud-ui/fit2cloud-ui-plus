<template>
  <el-tooltip :content="tooltip" :disabled="!tooltip">
    <el-button class="fu-search-bar-button" circle :size="configSize" v-bind="$attrs"/>
  </el-tooltip>
</template>


<script setup lang="ts">
import {validateSize} from "@/tools/size";
import {useSize} from "@/hooks";

defineOptions({name: "FuSearchBarButton"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  tooltip: String
})

const configSize = useSize()
</script>
