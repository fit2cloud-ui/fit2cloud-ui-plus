<template>
  <div class="fu-complex-component">
    <div class="fu-complex-component__label">{{ label }}</div>
    <div class="fu-complex-component__content">
      <el-select class="fu-complex-select"
                 :placeholder="t('fu.search_bar.please_select')"
                 v-model="selection"
                 :size="configSize"
                 v-bind="$attrs"
                 clearable>
        <el-option v-for="o in options" :key="o.value" :label="o.label" :value="o.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, PropType, inject} from "vue";
import {ComplexCondition, OptionProps, ReferenceContext, referenceKey} from "../types";
import {validateSize} from "@/tools/size";
import {useLocale, useSize} from "@/hooks"

defineOptions({name: "FuComplexSelect"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  multiple: {
    type: Boolean,
    default: false
  },
  label: String,
  field: {
    type: String,
    required: true
  },
  options: {
    type: Array as PropType<OptionProps[]>,
    default: []
  }
})

const selection = ref<Array<string | number> | string | number>(props.multiple ? [] : '')

const configSize = useSize()

const valueLabel = computed(() => {
  if (Array.isArray(selection.value)) {
    let values: any = []
    selection.value.forEach((v: any) => {
      values.push(getValueLabel(v))
    })
    return values.join(", ");
  }
  return getValueLabel(selection.value);
})

const emit = defineEmits<{ (e: 'init'): void }>()

const {t} = useLocale()

function getValueLabel(value: string | number) {
  for (let o of props.options) {
    if (o.value === value) {
      return o.label
    }
  }
  return value
}

function getCondition(): ComplexCondition | undefined {
  if (!selection.value || (Array.isArray(selection.value) && selection.value.length === 0)) return;
  let {field, label} = props
  return {field, label, value: selection.value, valueLabel: valueLabel.value}
}

function init(v: any) {
  selection.value = v !== undefined ? v : props.multiple ? [] : ''
  emit("init")
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
