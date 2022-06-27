<template>
  <div class="document-table">
    <el-tooltip content="属性说明" placement="left">
      <el-button size="large" @click="drawer = true" class="attributes-button" icon="Document" circle>
      </el-button>
    </el-tooltip>
    <el-drawer v-model="drawer" direction="rtl" size="60%">
      <div class="drawer-container">
        <div class="table" v-for="(item, index) in data" :key="index">
          <h1>{{ item.name || 'Attributes' }}</h1>
          <div v-if="item.children && item.children.length > 0">
            <div v-for="(child, i) in item.children" :key="i">
              <h4>{{ child.name || 'Attributes' }}</h4>
              <el-table :data="child.table" style="width: 100%" border header-row-class-name="attr-table-th">
                <el-table-column v-for="(value, key) in child.header" :key="key" :prop="key" :label="value">
                  <template #default="scope">{{ scope.row[key] }}</template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <el-table v-else :data="item.table" style="width: 100%" border header-row-class-name="attr-table-th">
            <el-table-column v-for="(value, key) in item.header" :key="key" :prop="key" :label="value">
              <template #default="scope">{{ scope.row[key] }}</template>
            </el-table-column>

          </el-table>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Array as any,
    default: () => [],
  },
});
const drawer = ref(false)
</script>
<style scoped lang="scss">
.attributes-button {
  position: fixed;
  margin-left: 800px;
  // right: 0;
  top: 25%;
  z-index: 5;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}

:deep(.el-drawer__header) {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
}

.drawer-container {
  height: calc(100vh - 55px);
  overflow: auto;
  padding: 0 20px;
}

.table {
  margin-bottom: 40px;

  h4 {
    font-size: 18px;
    color: #999999;
  }
}

:deep(.attr-table-th) th {
  background: #f5f7fa;
}

@media (max-width: 1200px) {

  .attributes-button {
    right: 0;
  }

}

@media (min-width: 1600px) {

  .attributes-button {
    right: 8%;
  }

}
</style>
