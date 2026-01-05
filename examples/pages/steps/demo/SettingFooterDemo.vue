<demo>footer步骤按钮的配置</demo>
<template>
  <el-radio-group v-model="labelPosition" style="margin-bottom: 30px;">
    <el-radio-button value="left">左对齐</el-radio-button>
    <el-radio-button value="right">右对齐</el-radio-button>
    <el-radio-button value="center">居中对齐</el-radio-button>
    <el-radio-button value="flex">两端对齐</el-radio-button>
  </el-radio-group>
  <fu-steps ref="steps" finish-status="success" height="200" @finish="submit" :cancelButtonText="cancelText"
    :finishButtonText="finishText" :prevButtonText="prevText" :nextButtonText="nextText" buttonSize="small"
    :footerAlign="labelPosition" showCancel>
    <fu-step id="cluster" title="第1步">
      <div class="example">
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="network" title="第2步">
      <div class="example">
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="storage" title="完成">
      <div class="example">
        <h1>完成</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
  </fu-steps>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const labelPosition = ref("right")
const cancelText = ref("Cancel")
const prevText = ref("Prev")
const nextText = ref("Next")
const finishText = ref("Submit")
function submit() {
  alert("完成");
}
</script>
