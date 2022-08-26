<demo>高级搜索</demo>
<template>
  <div>
    <h4>
      1、使用v-slot:complex
    </h4>
    <fu-search-bar :use-quick-search="false" @exec="search">
      <template #complex>
        <fu-complex-input field="name" label="姓名"/>
        <fu-complex-select field="status" label="状态" :options="options" @change="change"/>
        <fu-complex-date-time field="create_time" label="创建时间"/>
      </template>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>

    <h4>
      2、使用components数组
    </h4>
    <fu-search-bar :use-quick-search="false" :components="components" @exec="search2"/>
    <pre class="condition_display">{{ condition2 }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ComplexSearchDemo",
  components: {},

  setup() {
    const options = [
      {label: "启用", value: "Enable"},
      {label: "禁用", value: "Disable"},
    ]
    const components = [
      {field: "name", label: "姓名", component: "FuComplexInput", clearable: true},
      {
        field: "status",
        label: "状态",
        component: "FuComplexSelect",
        options: [{label: "启用", value: "Enable"}, {label: "禁用", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        },
        filterable: true
      },
      {
        field: "date",
        label: "日期",
        component: "FuComplexDate",
      },
    ]
    const condition = ref({})
    const condition2 = ref({})

    function change(value: string) {
      console.log(value)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    function search2(obj: any) {
      console.log(obj)
      condition2.value = obj
    }

    return {
      options,
      components,
      condition,
      condition2,
      change,
      search,
      search2
    }
  }
})
</script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #f5f9ff;
}
</style>
