<template>
  <!-- 一级标题 -->
  <div class="style-guide">
    <div class="style-guide-item">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
    </div>
    <div class="style-guide-item">
      <el-button type="danger">危险按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.style-guide {
  display: flex;
  flex-direction: column;
  width: 800px;

  .style-guide-item {
    display: flex;
    gap: 20px;

    .label {
      font-size: 14px;
      line-height: 22px;
    }

    & + .style-guide-item {
      margin-top: 20px;
    }
  }
}


.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
