<template>
  <div class="fu-filter-option" :class="{ 'is-selected': selected, 'is-disabled': disabled }" @click.stop="click">
    {{ label || value }}
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
const props = defineProps({
  value: {
    type: [String, Number],
    required: true
  },
  label: [String, Number],
  disabled: {
    type: Boolean,
    default: false
  }
})

const select = inject('select')
const selected = computed(() => {
  if (!select.props.multiple) {
    return select.value === props.value
  } else {
    return select.value.includes(props.value)
  }
})


function click() {
  select.clickOption(props.value, selected.value)
}

</script>
