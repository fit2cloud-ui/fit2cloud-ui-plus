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

<script lang="ts">
export default {
  name: "FuQuickSearch",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
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

watch(() => props.value, (val) => {
  quick.value = val
})
function input(e: Event) {
  emit("input", quick.value, e)
}
function blur(e: Event) {
  emit("change", quick.value, e)
}
function keydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    emit("change", quick.value, e)
  }
}
</script>
