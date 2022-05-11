<demo>操作列</demo>
<template>
  <div>
    <el-button size="mini" @click="enableAll">启用全部按钮</el-button>
    <el-button size="mini" @click="showAll">显示全部按钮</el-button>
    <fu-table :data="tableData" :columns="columns" local-key="TableOperations">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期" min-width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="180" fix></el-table-column>
      <el-table-column prop="address" label="地址" min-width="300" :show="false"></el-table-column>
      <fu-table-operations :ellipsis="2" :columns="columns" :buttons="buttons" label="操作" fix />
    </fu-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}
const tableData = [{
  date: "2016-05-02",
  name: "张三",
  address: "北京朝阳区财富中心 0室",
}, {
  date: "2016-05-04",
  name: "张三",
  address: "北京朝阳区财富中心 1室",
}, {
  date: "2016-05-01",
  name: "张三",
  address: "北京朝阳区财富中心 2室",
}, {
  date: "2016-05-03",
  name: "张三",
  address: "北京朝阳区财富中心 3室",
}]
const columns = ref([])
// const disabled = ref(true)

const buttons = [
  {
    label: "查看", icon: "el-icon-view", click: (row: User) => {
      console.log("查看:" + row.name)
    }, disabled: (row: User) => {
      return row.date === "2016-05-01"
    }
  },
  {
    label: "编辑", icon: "el-icon-edit", click: (row: User) => {
      console.log("编辑:" + row.name)
    }, show: false
  }, {
    label: "执行", icon: "el-icon-video-play", click: (row: User) => {
      console.log("执行:" + row.name)
    }, disabled: true
  }, {
    label: "删除", icon: "el-icon-delete", type: "danger", click: (row: User) => {
      console.log("删除:" + row.name)
    }
  }, {
    label: "复制", icon: "el-icon-document-copy", click: (row: User) => {
      console.log("复制:" + row.name)
    }
  }
]

function enableAll() {
  buttons.forEach(b => {
    b.disabled = false
  })
}
function showAll() {
  buttons.forEach(b => {
    b.show = true
  })
}


</script>
