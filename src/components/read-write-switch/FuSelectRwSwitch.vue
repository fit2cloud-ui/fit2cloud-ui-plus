<template>
  <fu-read-write-switch :write-trigger="writeTrigger" :data="data">
    <template #read>
      <slot name="read">
        {{ data }}
      </slot>
    </template>
    <template #default="{ read }">
      <el-select v-model="data" v-bind="$attrs" @input="input" @blur="blur(read, $event)"
                 @change="change(read, $event)">
        <slot>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </slot>
      </el-select>
    </template>
  </fu-read-write-switch>
</template>

<script setup lang="ts">
import FuReadWriteSwitch from "./FuReadWriteSwitch.vue";
import {watch, ref, PropType} from "vue";
import {OptionProps} from "./types";

defineOptions({name: "FuSelectRwSwitch"});

const props = defineProps({
  modelValue: [String, Number],
  options: {
    type: Array as PropType<OptionProps[]>,
    default: []
  },
  blurTime: {
    type: Number,
    default: 150
  },
  writeTrigger: {
    type: String,
    default: "onClick",
    validator: (value: string) => {
      return ['onClick', 'onDblclick'].includes(value)
    }
  }
})
const emit = defineEmits(["input", "blur", "change", "update:modelValue"])
const data = ref(props.modelValue)

watch(() => props.modelValue, (v) => {
  data.value = v
})

function input(e: Event) {
  emit("input", data.value, e)
}

function blur(read: Function, e: Event) {
  if (props.blurTime > 0) {
    setTimeout(() => {
      read()
    }, props.blurTime)
    emit("blur", e)
  }
}

function change(read: Function, e: Event) {
  emit("update:modelValue", data.value, e)
  emit("change", data.value, e)
  read()
}

</script>
