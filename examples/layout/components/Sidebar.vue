<template>
  <el-scrollbar>
    <div class="sidebar" v-for="(value, key, index) in docMenus" :key="index">
      <h1>{{ getGroupName(key) }}</h1>
      <ul v-for="(item, i) in value" :key="i">
        <li :class="{ active: showPath === item.path }" @click="isPath(item.path, key)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getGroupName, docMenus } from "../../router/doc-routers";

const route = useRoute();
const router = useRouter();
const showPath = ref();

onMounted(() => {
  showPath.value = route.params.comName || 'complex-table';
})

function isPath(path: String, key: String) {
  showPath.value = path;
  router.push(`/${key}/${path}`);
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
