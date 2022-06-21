<demo>自定义读写内容</demo>
<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch>
      <!-- 自定义读内容 v-slot:read -->
      <template #read>
        <div>自定义读内容: {{ input }}</div>
      </template>

      <!-- 自定义写内容 v-slot:default -->
      <template #default="{read}">
        自定义写内容:
        <el-input v-model="input" @blur="read" style="width: 200px"/>
      </template>
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const input = ref("单击填写")
</script>
