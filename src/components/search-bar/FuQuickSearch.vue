<template>
  <div :class="['fu-quick-search', 'fu-quick-search--' + size]">
    <el-icon v-if="useIcon">
      <Search/>
    </el-icon>
    <label>
      <input :placeholder="placeholder" v-model="value" @blur="blur" @focus="focus" @keydown="keydown"/>
    </label>
  </div>
</template>


<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {validateSize} from "@/tools/size";

defineOptions({name: "FuQuickSearch"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  modelValue: String,
  placeholder: String,
  useIcon: {
    type: Boolean,
    default: true
  }
})

const focused = ref(false)

const emit = defineEmits(["update:modelValue", "change"])

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val as string)
  }
})

function focus() {
  focused.value = true
}

function blur(e: Event) {
  if (focused.value) {
    emit("change", value.value, e)
  }
  focused.value = false
}

function keydown(e: KeyboardEvent) {
  const {code} = e
  if (code === "Enter") {
    focused.value = false
    emit("change", value.value, e)
  }
}
</script>
