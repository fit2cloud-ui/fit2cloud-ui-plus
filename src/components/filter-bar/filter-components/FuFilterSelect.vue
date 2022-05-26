<template>
  <div class="fu-filter-component">
    <div class="fu-filter-component__label">{{ label }}</div>
    <div class="fu-filter-component__content">
      <fu-filter-option :label="o.label" :value="o.value" v-for="o in showOptions" :key="o.value" />
      <el-popover popper-class="fu-filter-component-popover" :visible-arrow="false" placement="bottom-start"
        trigger="click">
        <!-- :size="configSize" -->
        <el-select v-model="value" v-bind="$attrs" :multiple="multiple" @change="change">
          <el-option value="" v-if="useSelectAll && multiple">
            <div @click="selectAll">{{ t('fu.filter_bar.select_all') }}</div>
          </el-option>
          <el-option :label="o.label" :value="o.value" v-for="o in options" :key="o.value" />
        </el-select>
        <template #reference>
          <div class="fu-filter-option">
            <i class="el-icon-plus"> {{ t('fu.filter_bar.more') }}</i>
          </div>
        </template>

      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuFilterSelect",
};
</script>

<script setup lang="ts">
import { ref, provide, getCurrentInstance, computed } from "vue";
import FuFilterOption from "./FuFilterOption.vue";
import FilterCondition from "../model";

import { useLocale } from "@/hooks"

const { t } = useLocale()

const instance = getCurrentInstance()

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  showLimit: {
    type: Number,
    default: 3 // -1 全显示
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
  options: Array
})
const emit = defineEmits(["change"])
// const visible = ref(false)
const value = ref(props.multiple ? [] : '')

const showOptions = computed(() => {
  return props.options.filter((o, i) => {
    let show = props.showLimit < 0 ? true : i < props.showLimit
    if (props.multiple) {
      return show || value.value.includes(o.value)
    } else {
      return show || value.value === o.value
    }
  })
})

const valueLabel = computed(() => {
  if (props.multiple) {
    let values: any = []
    Array.isArray(value.value) && value.value.forEach((v: any) => {
      values.push(getValueLabel(v))
    })
    return values.join(", ");
  }
  return getValueLabel(value.value);
})

function change(v: string) {
  if (v.includes("")) {
    value.value = props.options.map(o => o.value)
  }
  emit("change", value.value)
}
function clickOption(value: string, selected: boolean) {
  if (!props.multiple) {
    value.value = selected ? '' : value
    return
  }
  if (selected) {
    let index = value.value.indexOf(value)
    Array.isArray(value.value) && value.value.splice(index, 1)
  } else {
    Array.isArray(value.value) && value.value.push(value)
  }
}
function selectAll() {
  value.value = props.options.map(o => o.value)
}
function getValueLabel(value: string) {
  for (let o of props.options) {
    if (o.value === value) {
      return o.label
    }
  }
  return value
}
function getCondition() {
  if (!value.value || value.value.length === 0) return;
  let { field, label } = props
  return new FilterCondition({ field, label, value: value.value, valueLabel: valueLabel.value })
}

function init(v: any) {
  value.value = v !== undefined ? v : props.multiple ? [] : ''
}

provide('select', {
  clickOption,
  value: value.value,
  props
})

defineExpose({
  clickOption,
  getCondition,
  init,
})
</script>
