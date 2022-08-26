<demo>回显条件</demo>
<template>
  <div>
    <el-button @click="init">设置条件</el-button>
    <fu-search-bar :components="components" @exec="search" ref="searchRef"/>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "EchoConditionsDemo",
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

    const searchRef: any = ref(null)

    function init() {
      let conditions = {
        quick: {
          value: "快速查询值"
        },
        name: {
          operator: "eq",
          value: "张三"
        },
        status: {
          operator: "ne",
          value: "Enable"
        }
      }
      searchRef.value?.setConditions(conditions)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      components,
      condition,
      searchRef,
      init,
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
