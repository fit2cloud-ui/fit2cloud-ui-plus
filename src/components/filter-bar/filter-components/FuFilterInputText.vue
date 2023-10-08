<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <el-input class="fu-filter-input-text" v-model="value" v-bind="$attrs" :size="configSize"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, inject} from "vue";
import {FilterCondition, ReferenceContext, referenceKey} from "../types";
import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";

defineOptions({name: "FuFilterInputText"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  label: String,
  field: {
    type: String,
    required: true
  },
})
const value = ref('')
const configSize = useSize()

const {t} = useLocale()

function getCondition(): FilterCondition | undefined {
  if (!String(value.value)) return;
  let {field, label} = props
  return {field, label, value: value.value, valueLabel: value.value}
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
