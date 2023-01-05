<template>
  <div class="fu-filter-option" :class="{ 'is-selected': selected, 'is-disabled': disabled }" @click.stop="click">
    {{ label || value }}
  </div>
</template>

<script setup lang="ts">
import {computed, inject} from "vue";
import {selectKey} from "@/components/filter-bar/types";

const props = defineProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true
  },
  label: [String, Number],
  disabled: {
    type: Boolean,
    default: false
  }
})

const select = inject(selectKey)

const selected = computed(() => {
  if (!select) return false
  if (Array.isArray(select.selection.value)) {
    return select.selection.value.includes(props.value)
  } else {
    return select.selection.value === props.value
  }
})

function click() {
  select?.setSelected(props.value, selected.value)
}

</script>
