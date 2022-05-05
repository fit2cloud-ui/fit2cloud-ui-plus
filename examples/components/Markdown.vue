<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>


<style lang="scss" scoped>
.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
