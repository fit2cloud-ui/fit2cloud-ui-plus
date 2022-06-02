<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <!-- :size="configSize"  -->
      <el-date-picker class="fu-filter-date" v-model="value" v-bind="$attrs"
                      :placeholder="t('fu.search_bar.select_date')" type="daterange" :value-format="valueFormat"
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
import {ref, computed, inject} from "vue";
import {FilterCondition, ReferenceContext, referenceKey} from "../types";
import {dateFormat} from "@/tools/time";
import {useLocale} from "@/hooks"

const {t} = useLocale()

const props = defineProps({
  label: String,
  field: {
    type: String,
    required: true
  },
  valueFormat: {
    type: String,
    default: "x",
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

function getCondition(): FilterCondition | undefined {
  if (!String(value.value)) return;
  let {field, label} = props
  return {field, label, value: value.value, valueLabel: valueLabel.value}
}

function init(v: any) {
  value.value = v !== undefined ? v : ''
}

const references = inject(referenceKey)
const field = props.field
const reference: ReferenceContext = {field, init, getCondition}
references?.value.push(reference)

defineExpose({
  getCondition,
  init
})
</script>
