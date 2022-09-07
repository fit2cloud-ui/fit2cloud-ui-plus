<template>
  <!-- 一级标题 -->
  <div class="style-guide">
    <div class="style-guide-item">
      <fu-icon-button name="EditPen"/>
      <fu-icon-button name="EditPen" disabled/>
    </div>
    <div class="style-guide-item">
      <fu-icon-button name="EditPen" type="primary"/>
      <fu-icon-button name="EditPen" type="primary" disabled/>
    </div>
    <div class="style-guide-item">
      <fu-icon-button name="EditPen" type="danger"/>
      <fu-icon-button name="EditPen" type="danger" disabled/>
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
