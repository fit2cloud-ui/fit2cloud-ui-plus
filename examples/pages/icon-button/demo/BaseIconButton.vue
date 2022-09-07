<demo>基本用法</demo>
<template>
  <div class="icon-buttons">
    <fu-icon-button name="EditPen" @click="click"/>
    <fu-icon-button name="EditPen" type="primary"/>
    <fu-icon-button name="EditPen" type="success"/>
    <fu-icon-button name="EditPen" type="warning"/>
    <fu-icon-button name="EditPen" type="danger"/>
    <fu-icon-button name="EditPen" type="info"/>
    <fu-icon-button name="EditPen" color="#5005b9"/>
  </div>
  <div class="icon-buttons">
    <fu-icon-button name="EditPen" disabled @click="click"/>
    <fu-icon-button name="EditPen" disabled @click="click" :size="24"/>
  </div>
  <div class="icon-buttons">
    <fu-icon-button name="Loading" loading disabled/>
  </div>
</template>

<script setup lang="ts">
function click() {
  console.log("click")
}
</script>


<style lang="scss" scoped>
.icon-buttons {
  display: flex;

  & + & {
    margin-top: 10px;
  }
}
</style>
