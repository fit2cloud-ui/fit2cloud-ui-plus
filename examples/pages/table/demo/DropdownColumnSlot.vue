<demo>通过slot自定义列组件下拉菜单</demo>
<template>
  <div>
    <fu-table :data="tableData">
      <el-table-column type="selection" />
      <fu-table-column-dropdown showType="always" width="auto" ref="tableDropRef">
        <!-- 自定义触发图标 -->
        <template #icon>
          <el-icon>
            <setting />
          </el-icon>自定义
        </template>
        <!-- 自定义触发图标 -->
        <template #title>
          <div class="example-title">自定义标题</div>
        </template>
        <!-- 内容 -->
        <template #default="scope">
          <div class="example">
            <el-checkbox-group v-model="checkList">
              <el-checkbox value="复选框 A" />
              <el-checkbox value="复选框 B" />
              <el-checkbox value="复选框 C" />
            </el-checkbox-group>
            <div class="example-button">
              <el-button type="primary" size="small">确认</el-button>
              <el-button type="primary" plain @click="cancel(scope.$index)" size="small">取消</el-button>
            </div>
          </div>
        </template>
      </fu-table-column-dropdown>
      <el-table-column prop="date" label="日期" min-width="180" />
      <el-table-column prop="name" label="姓名" min-width="180" />
      <el-table-column prop="address" label="地址" min-width="300" />
    </fu-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checkList = ref([])
const tableDropRef = ref()

const tableData = [
  {
    id: 1,
    date: "2016-05-01",
    name: "张三",
    address: "北京朝阳区财富中心 0室",
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "张三",
    address: "北京朝阳区财富中心 1室",
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "张三",
    address: "北京朝阳区财富中心 2室",
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "张三",
    address: "北京朝阳区财富中心 3室",
  },
]

function cancel(index: number) {
  tableDropRef.value?.hide(index);
}

</script>
<style lang="scss" scoped>
.example-title {
  color: #004a71;
  text-align: center;
  padding: 5px 0;
  font-size: 15px;
}

.example {
  padding: 10px 20px;
  width: 125px;

  .example-button {
    margin-top: 10px;
  }
}
</style>
