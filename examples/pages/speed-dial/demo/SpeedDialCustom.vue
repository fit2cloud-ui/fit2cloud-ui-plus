<demo>自定义内容</demo>
<template>
  <div class="speed-dial-demo">
    <div>
      <h4>
        默认
      </h4>
      <fu-speed-dial>
        <fu-speed-dial-item :index="0" title="No.0" @click="clickItem" />
        <fu-speed-dial-item :index="1" title="No.1" @click="clickItem" />
      </fu-speed-dial>
    </div>

    <div>
      <h4>
        Items数组
      </h4>
      <fu-speed-dial :items="items" />
    </div>

    <div>
      <h4>
        Slot
      </h4>
      <fu-speed-dial>
        <fu-speed-dial-item :index="0" title="No.0" @click="clickItem" color="#222" bg-color="#DDD"
          title-bg-color="#F1F1F1" title-color="#555" />
        <fu-speed-dial-item :index="1" title="No.1" @click="clickItem" button-class="custom-button"
          title-class="custom-title" />
      </fu-speed-dial>
    </div>

    <div>
      <h4>
        Item Slot
      </h4>
      <fu-speed-dial ref="speedDialRef">
        <fu-speed-dial-item :index="0">
          <el-button @click="clickItem({ title: 'Item 1', index: 0, custom: true }, $event)">Item 1</el-button>
        </fu-speed-dial-item>

        <fu-speed-dial-item :index="1">
          <el-button @click="clickItem({ title: 'Item 2', index: 1, custom: true }, $event)">Item 2</el-button>
        </fu-speed-dial-item>
      </fu-speed-dial>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const itemStyle = {
  bgColor: "#DDD",
  color: "#222",
  titleBgColor: "#F1F1F1",
  titleColor: "#555",
}
const items = [
  {
    title: "Item 1",
    icon: "Edit",
    click: clickItem,
    ...itemStyle
  },
  { title: "Item 2", click: clickItem, ...itemStyle },
  { title: "Item 3", click: clickItem, ...itemStyle },
  { title: "Item 4", click: clickItem, ...itemStyle },
  { title: "Item 5", click: clickItem, ...itemStyle },
]

const speedDialRef = ref()
function clickItem(item: any, e: any) {
  if (item.custom) {
    speedDialRef.value.close()
  }
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


  :deep(.custom-button) {
    color: #222;
    background-color: #DDD;
  }

  :deep(.custom-title) {
    color: #555;
    background-color: #F1F1F1;
  }
}
</style>
