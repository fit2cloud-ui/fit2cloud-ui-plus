<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
