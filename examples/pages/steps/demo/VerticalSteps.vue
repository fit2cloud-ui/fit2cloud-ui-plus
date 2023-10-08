<demo>竖式步骤条</demo>
<template>
  <fu-steps direction="vertical" finish-status="success" height="150" @finish="submit" >
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
function submit() {
  alert("完成");
}
</script>
