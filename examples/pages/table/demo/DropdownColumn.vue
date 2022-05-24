<demo>列组件下拉菜单</demo>
<template>
    <el-radio-group v-model="showType" style="margin-bottom: 20px">
        <el-radio-button label="always">always</el-radio-button>
        <el-radio-button label="hover">hover</el-radio-button>
        <el-radio-button label="selected">selected</el-radio-button>
    </el-radio-group>
    <fu-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" />
        <fu-table-column-dropdown :menus="menus" :title="`已选中${selectRows.length}项`" :showType="showType" />
        <el-table-column prop="date" label="日期" min-width="180" />
        <el-table-column prop="name" label="姓名" min-width="180" />
        <el-table-column prop="address" label="地址" min-width="300" />
    </fu-table>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface User {
    id: number
    date: string
    name: string
    address: string
}

// *****此处类型争议
const selectRows = ref([])
const showType = ref("always")
const tableData: User[] = [
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
const menus = [
    {
        label: "批量编辑",
        icon: "Edit",
        click: (row: User) => {
            console.log("编辑:" + row.name);
        },
    },
    {
        label: "批量移动",
        icon: "Switch",
        click: (row: User) => {
            console.log("移动:" + row.name);
        },
        disabled: (row: User) => {
            if (row.id === 1) {
                return true;
            }
        },
    },
    {
        label: "批量删除",
        icon: "Delete",
        click: (row: User) => {
            console.log("删除:" + row.name);
        },
        divided: true,
    },
]
function handleSelectionChange(value: any) {
    selectRows.value = value;
}

</script>
