<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { docMenus } from "../../router/doc-routers";

const route = useRoute();
const nowComponent = ref();
watch(
  route,
  (newValue: any, oldValue: any) => {
    nowComponent.value = getComponent(
      newValue.params.comName,
      newValue.params.type
    );
  },
  { immediate: true, deep: true }
);

function getComponent(path: string, type: string) {
  let component;
  docMenus[type as keyof typeof docMenus].map((item: any) => {
    if (path === item.path) {
      component = item;
    }
  });
  return component || docMenus["guide"][0];
}
</script>

<template>
  <div class="main-wrapper">
    <h1>{{ nowComponent.name }}</h1>
    <component :is="nowComponent.component" class="page-container" />
  </div>
</template>


<style lang="scss" scoped>
.main-wrapper {

  // width: 100%;
  h1 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
  }

  :v-deep.page-container {
    position: relative;
  }
}
</style>
