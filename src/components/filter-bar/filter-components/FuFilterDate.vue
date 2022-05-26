<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
       <!-- :size="configSize"  -->
      <el-date-picker class="fu-filter-date" v-model="value" v-bind="$attrs" :align="align"
        :placeholder="t('fu.search_bar.select_date')" type="daterange" :value-format="valueFormat" range-separator=" - "
        :start-placeholder="t('fu.search_bar.start_date')" :end-placeholder="t('fu.search_bar.end_date')">
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuFilterDate",
};
</script>

<script setup lang="ts">
import { ref, computed } from "vue";
import FilterCondition from "../model";
import { dateFormat } from "@/tools/time";
import { useLocale } from "@/hooks"

const { t } = useLocale()

const props = defineProps({
  label: String,
  field: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: "right",
  },
  valueFormat: {
    type: String,
    default: "timestamp",
  },
})
const value = ref('')

const valueLabel = computed(() => {
  return (
    dateFormat(value.value[0]) +
    " - " +
    dateFormat(value.value[1])
  );
})

function getCondition() {
  if (!String(value.value)) return;
  let { field, label } = props
  return new FilterCondition({ field, label, value: value.value, valueLabel: valueLabel.value })
}
function init(value: any) {
  value.value = value !== undefined ? value : ''
}

defineExpose({
  getCondition,
  init
})
</script>
