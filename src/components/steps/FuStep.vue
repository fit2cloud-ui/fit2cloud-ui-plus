<template>
  <div class="fu-step" v-loading="loading">
    <slot/>
  </div>
</template>
<script lang="ts" setup>
import { inject, computed } from 'vue'
defineOptions({ name: "FuStep" });
const stepper = inject('stepper')
const loading = computed(() => {
  return stepper?.isLoading || false;
})
</script>
