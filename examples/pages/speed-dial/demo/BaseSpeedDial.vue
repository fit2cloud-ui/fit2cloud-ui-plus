<demo>基本用法</demo>
<template>
  <div class="speed-dial-demo">
    <div>
      <fu-speed-dial id="left" size="large" direction="left" :items="items" @click="click" />
    </div>

    <div>
      <fu-speed-dial id="top" :items="items" @click="click" type="success" icon="VideoPlay" active-icon="VideoPause" />
    </div>

    <div>
      <fu-speed-dial id="right" size="default" direction="right" type="warning" :items="items" @click="click" />
    </div>

    <div>
      <fu-speed-dial id="bottom" size="small" direction="bottom" type="danger" :items="items" @click="click" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: "Item 1", click: clickItem },
  { title: "Item 2", click: clickItem },
  { title: "Item 3", click: clickItem, icon: "Avatar" },
  { title: "Item 4", click: clickItem },
  { title: "Item 5", click: clickItem },
]

function click(obj: any, e: any) {
  console.log(obj, e)
}
function clickItem(item: any, e: any) {
  console.log(item, e)
}

</script>

<style lang="scss" scoped>
.speed-dial-demo {
  display: flex;
  align-items: center;

  >div {
    width: 25%;
  }
}
</style>
