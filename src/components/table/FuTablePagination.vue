<template>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
    :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
  </el-pagination>
</template>

<script lang="ts" setup>
defineOptions({ name: "FuTablePagination" });
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 5
  },
  pageSizes: {
    type: Array,
    default: function () {
      return [5, 10, 20, 50, 100]
    }
  },
  total: {
    type: Number,
    default: 0
  },

});
const emit = defineEmits(["size-change", "current-change", "change", "update:pageSize", "update:currentPage"])

function handleSizeChange(size: number) {
  emit('update:pageSize', size)
  emit("size-change");
  emit("change"); // 兼容历史版本
}
function handleCurrentChange(current: number) {
  emit('update:currentPage', current)
  emit("current-change");
  emit("change"); // 兼容历史版本
}
</script>
