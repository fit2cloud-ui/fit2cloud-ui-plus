<demo>分页</demo>
<template>
  <fu-table :data="tableData">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>
    <el-table-column prop="address" label="地址" :show="false"></el-table-column>
  </fu-table>
  <div class="pagination">
    <fu-table-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :total="total"
                         @size-change="sizeChange" @current-change="currentChange"/>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const items = [{
  date: '2016-05-01',
  name: '张三',
  address: '北京朝阳区财富中心 1室'
}, {
  date: '2016-05-02',
  name: '张三',
  address: '北京朝阳区财富中心 2室'
}, {
  date: '2016-05-03',
  name: '张三',
  address: '北京朝阳区财富中心 3室'
}, {
  date: '2016-05-04',
  name: '张三',
  address: '北京朝阳区财富中心 4室'
}, {
  date: '2016-05-05',
  name: '张三',
  address: '北京朝阳区财富中心 5室'
}, {
  date: '2016-05-06',
  name: '张三',
  address: '北京朝阳区财富中心 6室'
}, {
  date: '2016-05-07',
  name: '张三',
  address: '北京朝阳区财富中心 7室'
}, {
  date: '2016-05-08',
  name: '张三',
  address: '北京朝阳区财富中心 8室'
}, {
  date: '2016-05-09',
  name: '张三',
  address: '北京朝阳区财富中心 9室'
}, {
  date: '2016-05-10',
  name: '张三',
  address: '北京朝阳区财富中心 10室'
}, {
  date: '2016-05-11',
  name: '张三',
  address: '北京朝阳区财富中心 11室'
}, {
  date: '2016-05-12',
  name: '张三',
  address: '北京朝阳区财富中心 12室'
}];

const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(5)
const total = ref(0)

function currentChange() {
  console.log("currentChange")
  search()
}

function sizeChange() {
  console.log("sizeChange")
  currentPage.value = 1;
  search()
}

function search() {
  total.value = items.length;
  let start = (currentPage.value - 1) * pageSize.value;
  let end = currentPage.value * pageSize.value;
  tableData.value = items.slice(start, end);
}

onMounted(() => {
  search()
})
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
