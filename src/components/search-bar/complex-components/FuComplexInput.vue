<template>
  <div class="fu-complex-component">
    <div class="fu-complex-component__label">{{ label }}</div>
    <div class="fu-complex-component__content">
      <el-input v-model="inputValue" :placeholder="t('fu.search_bar.please_input')" :size="configSize" v-bind="$attrs"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, inject} from "vue";
import {ComplexCondition, ReferenceContext, referenceKey} from "../types";
import {validateSize} from "@/tools/size";
import {useLocale, useSize} from "@/hooks"

defineOptions({name: "FuComplexInput"});

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

const inputValue = ref<string | number>("")

const configSize = useSize()

const {t} = useLocale()

function getCondition(): ComplexCondition | undefined {
  if (!inputValue.value) return;
  let {field, label} = props
  let value = inputValue.value;
  let valueLabel = inputValue.value as string
  return {field, label, value, valueLabel}
}

function init(v: any) {
  inputValue.value = v !== undefined ? v : ''
}

const references = inject(referenceKey)
const field = props.field
const reference: ReferenceContext = {field, init, getCondition}
references?.value.push(reference)

defineExpose({
  getCondition,
  init,
})
</script>
