<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <el-select v-model="selection" v-bind="$attrs" :multiple="multiple" @change="change" :teleported="false"
                 :size="configSize" :placeholder="t('fu.search_bar.please_select')" class="fu-filter-select">
        <el-option value="-$SELECT-ALL$-" v-if="showSelectAll">
          <div @click="selectAll">{{ t('fu.filter_bar.select_all') }}</div>
        </el-option>
        <el-option :label="o.label" :value="o.value" v-for="o in options" :key="o.value"/>
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, provide, computed, PropType, Ref, inject} from "vue";
import {FilterCondition, OptionProps, ReferenceContext, referenceKey, selectKey} from "../types";

import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";

defineOptions({name: "FuFilterNormalSelect"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  multiple: {
    type: Boolean,
    default: false
  },
  useSelectAll: {
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
const emit = defineEmits(["change"])

const selection: Ref<Array<string | number> | string | number> = ref(props.multiple ? [] : '')
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

const showSelectAll = computed(() => {
  return props.useSelectAll && props.multiple
})

const {t} = useLocale()

function change(v: any) {
  if (showSelectAll.value && v?.includes("-$SELECT-ALL$-")) {
    selection.value = props.options.map(o => o.value)
  }
  emit("change", selection.value)
}

function setSelected(value: string | number, selected: boolean) {
  if (!Array.isArray(selection.value)) {
    selection.value = selected ? '' : value
    return
  }
  if (selected) {
    let index = selection.value.indexOf(value)
    selection.value.splice(index, 1)
  } else {
    selection.value.push(value)
  }
}

function selectAll() {
  selection.value = props.options.map(o => o.value)
}

function getValueLabel(value: string | number) {
  for (let o of props.options) {
    if (o.value === value) {
      return o.label
    }
  }
  return value
}

function getCondition(): FilterCondition | undefined {
  if (!selection.value || (Array.isArray(selection.value) && selection.value.length === 0)) return;
  let {field, label} = props
  return {field, label, value: selection.value, valueLabel: valueLabel.value}
}

function init(v: any) {
  selection.value = v !== undefined ? v : props.multiple ? [] : ''
}

provide(selectKey, {
  setSelected,
  selection: selection,
})

const references = inject(referenceKey)
const field = props.field
const reference: ReferenceContext = {field, init, getCondition}
references?.value.push(reference)

defineExpose({
  getCondition,
  init,
})
</script>
