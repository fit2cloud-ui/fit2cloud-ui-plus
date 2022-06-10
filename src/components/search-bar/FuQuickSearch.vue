<template>
  <!-- , 'fu-quick-search--' + configSize -->
  <div :class="['fu-quick-search']">
    <el-icon v-if="useIcon">
      <Search />
    </el-icon>
    <label>
      <input :placeholder="placeholder" v-model="quick" @input="input" @blur="blur" @keydown="keydown" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
defineOptions({ name: "FuQuickSearch" });
const props = defineProps({
  value: String,
  placeholder: String,
  useIcon: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(["input", "change"])
const quick = ref("")

watch(() => props.value, (val: any) => {
  quick.value = val
})
function input(e: Event) {
  emit("input", quick.value, e)
}
function blur(e: Event) {
  emit("change", quick.value, e)
}
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    emit("change", quick.value, e)
  }
}
</script>
