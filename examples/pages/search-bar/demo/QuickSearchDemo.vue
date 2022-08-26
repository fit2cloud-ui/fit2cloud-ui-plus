<demo>快速搜索</demo>
<template>
  <div>
    <h4>
      1、快速搜索组件 FuQuickSearch
    </h4>
    <fu-quick-search placeholder="按 姓名/邮箱 搜索" v-model="quick" @change="change" style="width: 200px"/>
    <pre class="condition_display">{{ quick }}</pre>

    <h4>
      2、禁用高级搜索
    </h4>
    <fu-search-bar quick-placeholder="按 姓名/邮箱 搜索" @exec="search" style="width: 200px"/>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "QuickSearchDemo",
  components: {},

  setup() {
    const quick = ref("")
    const condition = ref({})

    function change(value: string) {
      console.log(value)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      condition,
      quick,
      change,
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
