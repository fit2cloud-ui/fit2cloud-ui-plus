<template>
  <div class="fu-step" v-loading="loading">
    <slot/>
  </div>
</template>
<script lang="ts" setup>
import { inject, computed } from 'vue'
defineOptions({ name: "FuStep" });
const stepper: any = inject('stepper')
const loading = computed(() => stepper.isLoading || false)
</script>
