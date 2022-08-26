<demo>自定义按钮</demo>
<template>
  <div>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search">
      <fu-search-bar-button tooltip="下载" icon="Download" @click="download"/>
      <fu-search-bar-button tooltip="上传" icon="Upload" @click="upload"/>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "SearchBarButtonDemo",
  setup() {
    const components = [
      {field: "name", label: "姓名", component: "FuComplexInput"},
      {
        field: "status",
        label: "状态",
        component: "FuComplexSelect",
        options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        }
      },
      {
        field: "groups",
        label: "区域",
        component: "FuComplexSelect",
        options: [{label: "北区", value: "1"}, {label: "南区", value: "2"}, {label: "东区", value: "3"}],
      },
      {
        field: "date",
        label: "日期",
        component: "FuComplexDate",
      },
      {
        field: "datetime",
        label: "日期时间",
        component: "FuComplexDateTime",
      }
    ]
    const condition = ref({})

    function download(e: Event) {
      console.log("下载 click", e)
    }

    function upload(e: Event) {
      console.log("上传 click", e)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      components,
      condition,
      download,
      upload,
      search
    }
  }
})
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>
