<template>
  <!-- 一级标题 -->
  <div class="style-guide">
    <div class="style-guide-item">
      <el-button :plain="true" @click="message">message</el-button>
      <el-button :plain="true" @click="success">success</el-button>
      <el-button :plain="true" @click="warning">warning</el-button>
      <el-button :plain="true" @click="error">error</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'

const msg = (str: string, type: any) => {
  ElMessage({
    message: str,
    type: type,
    duration: 999999999,
    showClose: true,
  })
}
const message = () => {
  msg("普通提示", "info")
}
const success = () => {
  msg("成功提示", "success")
}
const warning = () => {
  msg("警告提示", "warning")
}
const error = () => {
  msg("错误提示", "error")
}
</script>

<style lang="scss" scoped>
.style-guide {
  display: flex;
  flex-direction: column;
  width: 800px;

  .style-guide-item {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .label {
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
