<template>
  <el-scrollbar>
    <div class="sidebar" v-for="(item, index) in routes" :key="index">
      <h1>{{ item.name }}</h1>
      <ul v-for="(child, i) in item.children" :key="i">
        <li
          :class="{ active: showPath === Path(child.path, item.path) }"
          @click="toPath(child.path, item.path)"
        >
          {{ child.name }}
        </li>
      </ul>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import {routes} from "../../router"

const route = useRoute();
const router = useRouter();
const showPath = ref("");

onMounted(() => {
  showPath.value = route.path || "/";
});

function Path(path: String, parentPath: String) {
  return `${parentPath}/${path}`;
}

function toPath(path: String, parentPath: String) {
  showPath.value = Path(path, parentPath);
  router.push(Path(path, parentPath));
}
</script>
<style lang="scss" scoped>
$themeColor: #2d61a2;
.sidebar {
  h1 {
    font-size: 16px;
    margin-top: 20px;
    padding-left: 10px;
  }
  ul {
    line-height: 35px;
    color: #666666;
    // margin-left:25px;
    li {
      cursor: pointer;
      padding: 5px 0;
      padding-left: 10px;
      &:hover {
        color: $themeColor;
      }
    }
    .active {
      background-color: #e6f7ff;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        border-left: 3px solid $themeColor;
      }
    }
  }
}
</style>
