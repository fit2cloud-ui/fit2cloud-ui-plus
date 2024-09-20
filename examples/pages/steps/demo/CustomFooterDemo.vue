<demo>自定义footer步骤按钮</demo>
<template>
  <fu-steps  ref="stepsRef" finish-status="success" @change="handleChange" height="200">
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
    <template #footer>
      <div class="footer">
        <el-button type="primary" @click="prev" v-if="nowIndex !== 0">上一步</el-button>
        <el-button type="primary" v-if="nowId === 'storage'">提交</el-button>
        <el-button type="primary" @click="next" v-else>下一步</el-button>
      </div>
    </template>
  </fu-steps>
</template>

<script setup lang="ts">
import {ref } from 'vue'
const nowId = ref(null)
const nowIndex = ref(0)

const stepsRef = ref()

function next() {
  stepsRef.value.next();
}
function prev() {
  stepsRef.value.prev();
}
function handleChange({ id, title, index }: any) {
  console.log(id, title, index)
  nowId.value = id
  nowIndex.value = index
}

</script>
<style lang="scss" scoped>
.footer {
  text-align: right;
}
</style>
