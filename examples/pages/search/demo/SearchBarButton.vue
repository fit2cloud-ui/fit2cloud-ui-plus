<demo>自定义按钮</demo>
<template>
  <div>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :use-clean-button="false" :use-refresh-button="false"
      :components="components" @exec="search">
      <fu-search-bar-button tooltip="下载" icon="Download" @click="download" />
      <fu-search-bar-button tooltip="上传" icon="Upload" @click="upload" />
    </fu-search-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const options = [{ label: "启用", value: "Enable" }, { label: "禁用", value: "Disable" }]
const components = [
  { field: "name", label: "输入", component: "FuComplexInput" },
  {
    field: "status",
    label: "选项",
    component: "FuComplexSelect",
    options: [{ label: "启用", value: "Enable" }, { label: "禁用", value: "Disable" }],
  },
  { field: "date", label: "日期", component: "FuComplexDate" },
]
const condition = ref({})

function download(e: Event) {
  console.log("下载 click", e)
}
function upload(e: Event) {
  console.log("上传 click", e)
}
function search(condition: any) {
  console.log("search", condition)
}

</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>
