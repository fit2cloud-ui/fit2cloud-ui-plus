<demo>基本用法</demo>
<template>
  <div>
    <div>
      <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" :components="components" @exec="search"
                     @close="close"/>
    </div>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "BaseSearchbar",
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

    function close() {
      console.log('关闭高级搜索弹出框')
    }

    function search(obj: any) {
      condition.value = obj
    }

    return {
      components,
      condition,
      close,
      search
    }
  }
})
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>
