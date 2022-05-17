<template>
  <div class="fu-search-bar">
    <!-- <div class="fu-search-bar__content">
      <fu-complex-search ref="complex" :components="components" @change="change" :size="configSize" v-if="showComplex" @close="closePopover">
        <slot name="complex"></slot>
      </fu-complex-search>
      <fu-search-conditions :conditions="conditions" :size="configSize" @change="change" v-if="showComplex"/>
      <fu-quick-search :size="configSize" :use-icon="!showComplex" :placeholder="placeholder" v-model="quick"
                       @change="quickChange" v-if="useQuickSearch"/>
    </div> -->
    <div class="fu-search-bar__buttons">
      <slot name="buttons">
        <fu-search-bar-button icon="el-icon-close" @click="clean" :size="configSize" :tooltip="t('fu.search_bar.clean')"
          v-if="showClean" />
        <fu-search-bar-button icon="el-icon-refresh" @click="refresh" :size="configSize"
          :tooltip="t('fu.search_bar.refresh')" v-if="showRefresh" />
        <slot></slot>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuSearchBar",
};
</script>

<script setup lang="ts">
import { ref, computed,useSlots } from "vue";
// import FuQuickSearch from "./FuQuickSearch";
// import FuComplexSearch from "./FuComplexSearch";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton.vue";
import { useLocale } from "@/hooks"

// import FuSearchConditions from "@/components/search-bar/FuSearchContions";

import ComplexCondition from "@/components/search-bar/store";

const { t } = useLocale()

const slots = useSlots()

const props = defineProps({
  quickKey: {
    type: String,
    default: "quick"
  },
  quickPlaceholder: String,
  useCleanButton: { // 是否使用清除按钮
    type: Boolean,
    default: true
  },
  useRefreshButton: { // 是否使用刷新按钮
    type: Boolean,
    default: false
  },
  useQuickSearch: { // 是否使用快速搜索
    type: Boolean,
    default: true
  },
  components: Array,
})

const emit = defineEmits(["close", "exec"])


const quick = ref("")
const conditions = ref([])

// refs

const complex = ref();

// target覆盖source相同的field
function merge(source: any, target: any) {
  let conditions = source.concat(target)
  let conditionMap = new Map()

  for (let condition of conditions) {
    conditionMap.set(condition.field, condition)
  }
  let result: any = [];
  conditionMap.forEach(c => {
    result.push(c)
  })

  return result
}




function closePopover() {
  emit("close")
}
function setConditions(conditions: any) {
  conditions.value = complex.value.createConditions(conditions)

  if (props.useQuickSearch && conditions[props.quickKey] !== undefined) {
    quick.value = conditions[props.quickKey].value
    quickChange(quick.value)
  } else {
    refresh()
  }
}
function quickChange(value: string, e?: any) {
  if (value) {
    const field = props.quickKey
    const valueLabel = value
    conditions.value = merge(conditions.value, [new ComplexCondition({ field, value, valueLabel })])
    exec(e)
    quick.value = "";
  }
}
function change(conditions: any) {
  conditions.value = merge(conditions.value, conditions)
  exec()
}
function clean() {
  quick.value = ""
  conditions.value = []
  emit("exec", conditions.value)
}
function refresh() {
  complex.value.close()
  exec()
}
function exec() {
  // 只有快速搜索
  if (!showComplex) {
    emit("exec", quick.value )
    return
  }
  emit("exec", condition.value )
}

const placeholder = computed(() => {
  return props.quickPlaceholder ? props.quickPlaceholder : t('fu.search_bar.search')
});
const showComplex = computed(() => {
  if (slots?.complex) return true
  return props.components?.length > 0;
});

const showClean = computed(() => {
  return props.useCleanButton && showComplex && (conditions.value.length > 0 || quick.value)
});

const showRefresh = computed(() => {
  return props.useRefreshButton && showComplex
});

const condition = computed(() => {
  const condition = {}
  if (conditions.value.length > 0) {
    conditions.value.forEach(c => {
      const { field, operator, value } = c
      condition[c.field] = { field, operator, value }
    })
  }

  return condition
});


</script>
