import{d as h,r as t,o as C,c as G,w as a,a as e,_,b as F,e as f,f as i,F as B,g as D,h as H,p as V,i as N,j as w,u as J,k as Q,t as x}from"./index.08a9fafa.js";function k(n){n.__sourceCode=`<template>
  <fu-table :data="tableData" style="width: 100%">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" width="180"></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740"></el-table-column>
  </fu-table>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-02",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
  },
  {
    date: "2016-05-04",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
  },
  {
    date: "2016-05-01",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
  },
  {
    date: "2016-05-03",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
  }
]
<\/script>`,n.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const R=h({__name:"BaseTable",setup(n){const l=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}];return(d,c)=>{const o=t("el-table-column"),s=t("fu-table");return C(),G(s,{data:l,style:{width:"100%"}},{default:a(()=>[e(o,{type:"selection"}),e(o,{prop:"date",label:"\u65E5\u671F",width:"180"}),e(o,{prop:"name",label:"\u59D3\u540D",width:"180"}),e(o,{prop:"address",label:"\u5730\u5740"})]),_:1})}}});typeof k=="function"&&k(R);var W=_(R,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/BaseTable.vue"]]);function S(n){n.__sourceCode=`<template>
  <div style="margin-bottom: 20px">
    <span>Popover\u9009\u5217(hover)\uFF1A</span>
    <fu-table-column-select :columns="columns" trigger="hover"/>
    <span style="margin-left: 20px">Popover\u9009\u5217(click)\uFF1A</span>
    <fu-table-column-select :columns="columns"  />
    <span style="margin-left: 20px">Dialog\u9009\u5217\uFF1A</span>
    <fu-table-column-select type="dialog" :columns="columns" />
  </div>
  <fu-table :data="tableData" :columns="columns">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180"></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740" :show="false"></el-table-column>
  </fu-table>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([])

const tableData = [
  {
    date: "2016-05-02",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
  },
  {
    date: "2016-05-04",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
  },
  {
    date: "2016-05-01",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
  },
  {
    date: "2016-05-03",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
  }
]
<\/script>`,n.__sourceCodeTitle="\u8868\u683C\u9009\u5217"}const Y={style:{"margin-bottom":"20px"}},Z=i("span",null,"Popover\u9009\u5217(hover)\uFF1A",-1),ee=i("span",{style:{"margin-left":"20px"}},"Popover\u9009\u5217(click)\uFF1A",-1),ue=i("span",{style:{"margin-left":"20px"}},"Dialog\u9009\u5217\uFF1A",-1),I=h({__name:"SelectColumn",setup(n){const l=F([]),d=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}];return(c,o)=>{const s=t("fu-table-column-select"),u=t("el-table-column"),p=t("fu-table");return C(),f(B,null,[i("div",Y,[Z,e(s,{columns:l.value,trigger:"hover"},null,8,["columns"]),ee,e(s,{columns:l.value},null,8,["columns"]),ue,e(s,{type:"dialog",columns:l.value},null,8,["columns"])]),e(p,{data:d,columns:l.value},{default:a(()=>[e(u,{type:"selection"}),e(u,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(u,{prop:"name",label:"\u59D3\u540D","min-width":"180"}),e(u,{prop:"address",label:"\u5730\u5740",show:!1})]),_:1},8,["columns"])],64)}}});typeof S=="function"&&S(I);var ne=_(I,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/SelectColumn.vue"]]);function T(n){n.__sourceCode=`<template>
  <div style="margin-bottom: 20px">
    <fu-table-column-select :columns="columns" />
  </div>
  <fu-table :data="tableData" :columns="columns" localKey="SaveSelectColumn">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180" fix></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740" :show="false"></el-table-column>
  </fu-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([])

const tableData = [
  {
    date: "2016-05-02",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
  },
  {
    date: "2016-05-04",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
  },
  {
    date: "2016-05-01",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
  },
  {
    date: "2016-05-03",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
  }
]
<\/script>`,n.__sourceCodeTitle="\u9009\u5217\u4FDD\u5B58"}const te={style:{"margin-bottom":"20px"}},L=h({__name:"SaveSelectColumn",setup(n){const l=F([]),d=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}];return(c,o)=>{const s=t("fu-table-column-select"),u=t("el-table-column"),p=t("fu-table");return C(),f(B,null,[i("div",te,[e(s,{columns:l.value},null,8,["columns"])]),e(p,{data:d,columns:l.value,localKey:"SaveSelectColumn"},{default:a(()=>[e(u,{type:"selection"}),e(u,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(u,{prop:"name",label:"\u59D3\u540D","min-width":"180",fix:""}),e(u,{prop:"address",label:"\u5730\u5740",show:!1})]),_:1},8,["columns"])],64)}}});typeof T=="function"&&T(L);var le=_(L,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/SaveSelectColumn.vue"]]);function $(n){n.__sourceCode=`<template>
  <div style="margin-bottom: 20px">
    <el-button @click="enableAll">\u542F\u7528\u5168\u90E8\u6309\u94AE</el-button>
    <el-button @click="showAll">\u663E\u793A\u5168\u90E8\u6309\u94AE</el-button>
  </div>
  <h4>
    laber \u6309\u94AE
  </h4>
  <fu-table :data="tableData" :columns="columns">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180" fix></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740" min-width="300" :show="false"></el-table-column>
    <fu-table-operations :ellipsis="2" :buttons="buttons" label="\u64CD\u4F5C" fixed="right" />
  </fu-table>
  <h4>
    icon \u6309\u94AE
  </h4>
  <fu-table :data="tableData" :columns="columns" style="margin-top: 20px">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180" fix></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740" min-width="300" :show="false"></el-table-column>
    <fu-table-operations :ellipsis="2" type="icon" :buttons="buttons" label="\u64CD\u4F5C" fixed="right" />
  </fu-table>
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
  name: "\u5F20\u4E09",
  address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
}, {
  date: "2016-05-04",
  name: "\u5F20\u4E09",
  address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
}, {
  date: "2016-05-01",
  name: "\u5F20\u4E09",
  address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
}, {
  date: "2016-05-03",
  name: "\u5F20\u4E09",
  address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
}]
const columns = ref([])

const buttons = [
  {
    label: "\u67E5\u770B", icon: "View", click: (row: User) => {
      console.log("\u67E5\u770B:" + row.name)
    }, disabled: (row: User) => {
      return row.date === "2016-05-01"
    }
  },
  {
    label: "\u7F16\u8F91", icon: "Edit", click: (row: User) => {
      console.log("\u7F16\u8F91:" + row.name)
    }, show: false
  }, {
    label: "\u6267\u884C", icon: "VideoPlay", click: (row: User) => {
      console.log("\u6267\u884C:" + row.name)
    }, disabled: true
  }, {
    label: "\u5220\u9664", icon: "Delete", type: "danger", click: (row: User) => {
      console.log("\u5220\u9664:" + row.name)
    }
  }, {
    label: "\u590D\u5236", icon: "DocumentCopy", click: (row: User) => {
      console.log("\u590D\u5236:" + row.name)
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


<\/script>`,n.__sourceCodeTitle="\u64CD\u4F5C\u5217"}const ae={style:{"margin-bottom":"20px"}},oe=D("\u542F\u7528\u5168\u90E8\u6309\u94AE"),se=D("\u663E\u793A\u5168\u90E8\u6309\u94AE"),de=i("h4",null," laber \u6309\u94AE ",-1),ce=i("h4",null," icon \u6309\u94AE ",-1),M=h({__name:"TableOperations",setup(n){const l=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}],d=F([]),c=[{label:"\u67E5\u770B",icon:"View",click:u=>{console.log("\u67E5\u770B:"+u.name)},disabled:u=>u.date==="2016-05-01"},{label:"\u7F16\u8F91",icon:"Edit",click:u=>{console.log("\u7F16\u8F91:"+u.name)},show:!1},{label:"\u6267\u884C",icon:"VideoPlay",click:u=>{console.log("\u6267\u884C:"+u.name)},disabled:!0},{label:"\u5220\u9664",icon:"Delete",type:"danger",click:u=>{console.log("\u5220\u9664:"+u.name)}},{label:"\u590D\u5236",icon:"DocumentCopy",click:u=>{console.log("\u590D\u5236:"+u.name)}}];function o(){c.forEach(u=>{u.disabled=!1})}function s(){c.forEach(u=>{u.show=!0})}return(u,p)=>{const b=t("el-button"),m=t("el-table-column"),r=t("fu-table-operations"),E=t("fu-table");return C(),f(B,null,[i("div",ae,[e(b,{onClick:o},{default:a(()=>[oe]),_:1}),e(b,{onClick:s},{default:a(()=>[se]),_:1})]),de,e(E,{data:l,columns:d.value},{default:a(()=>[e(m,{type:"selection"}),e(m,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(m,{prop:"name",label:"\u59D3\u540D","min-width":"180",fix:""}),e(m,{prop:"address",label:"\u5730\u5740","min-width":"300",show:!1}),e(r,{ellipsis:2,buttons:c,label:"\u64CD\u4F5C",fixed:"right"})]),_:1},8,["columns"]),ce,e(E,{data:l,columns:d.value,style:{"margin-top":"20px"}},{default:a(()=>[e(m,{type:"selection"}),e(m,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(m,{prop:"name",label:"\u59D3\u540D","min-width":"180",fix:""}),e(m,{prop:"address",label:"\u5730\u5740","min-width":"300",show:!1}),e(r,{ellipsis:2,type:"icon",buttons:c,label:"\u64CD\u4F5C",fixed:"right"})]),_:1},8,["columns"])],64)}}});typeof $=="function"&&$(M);var re=_(M,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/TableOperations.vue"]]);function z(n){n.__sourceCode=`<template>
  <fu-table :data="tableData">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180" fix></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740" :show="false"></el-table-column>
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
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4'
}, {
  date: '2016-05-02',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4'
}, {
  date: '2016-05-03',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4'
}, {
  date: '2016-05-04',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 4\u5BA4'
}, {
  date: '2016-05-05',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 5\u5BA4'
}, {
  date: '2016-05-06',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 6\u5BA4'
}, {
  date: '2016-05-07',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 7\u5BA4'
}, {
  date: '2016-05-08',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 8\u5BA4'
}, {
  date: '2016-05-09',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 9\u5BA4'
}, {
  date: '2016-05-10',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 10\u5BA4'
}, {
  date: '2016-05-11',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 11\u5BA4'
}, {
  date: '2016-05-12',
  name: '\u5F20\u4E09',
  address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 12\u5BA4'
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
<\/script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>`,n.__sourceCodeTitle="\u5206\u9875"}const ie={class:"pagination"},O={__name:"TablePagination",setup(n){const l=[{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 4\u5BA4"},{date:"2016-05-05",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 5\u5BA4"},{date:"2016-05-06",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 6\u5BA4"},{date:"2016-05-07",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 7\u5BA4"},{date:"2016-05-08",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 8\u5BA4"},{date:"2016-05-09",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 9\u5BA4"},{date:"2016-05-10",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 10\u5BA4"},{date:"2016-05-11",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 11\u5BA4"},{date:"2016-05-12",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 12\u5BA4"}],d=F([]),c=F(1),o=F(5),s=F(0);function u(){console.log("currentChange"),b()}function p(){console.log("sizeChange"),c.value=1,b()}function b(){s.value=l.length;let m=(c.value-1)*o.value,r=c.value*o.value;d.value=l.slice(m,r)}return H(()=>{b()}),(m,r)=>{const E=t("el-table-column"),A=t("fu-table"),g=t("fu-table-pagination");return C(),f(B,null,[e(A,{data:d.value},{default:a(()=>[e(E,{type:"selection"}),e(E,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(E,{prop:"name",label:"\u59D3\u540D","min-width":"180",fix:""}),e(E,{prop:"address",label:"\u5730\u5740",show:!1})]),_:1},8,["data"]),i("div",ie,[e(g,{"current-page":c.value,"onUpdate:current-page":r[0]||(r[0]=v=>c.value=v),"page-size":o.value,"onUpdate:page-size":r[1]||(r[1]=v=>o.value=v),total:s.value,onSizeChange:p,onCurrentChange:u},null,8,["current-page","page-size","total"])])],64)}}};typeof z=="function"&&z(O);var pe=_(O,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/TablePagination.vue"]]);function P(n){n.__sourceCode=`<template>
    <el-radio-group v-model="showType" style="margin-bottom: 20px">
        <el-radio-button label="always">always</el-radio-button>
        <el-radio-button label="hover">hover</el-radio-button>
        <el-radio-button label="selected">selected</el-radio-button>
    </el-radio-group>
    <fu-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" />
        <fu-table-column-dropdown :menus="menus" :title="\`\u5DF2\u9009\u4E2D\${selectRows.length}\u9879\`" :showType="showType" />
        <el-table-column prop="date" label="\u65E5\u671F" min-width="180" />
        <el-table-column prop="name" label="\u59D3\u540D" min-width="180" />
        <el-table-column prop="address" label="\u5730\u5740" min-width="300" />
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

// *****\u6B64\u5904\u7C7B\u578B\u4E89\u8BAE
const selectRows = ref([])
const showType = ref("always")
const tableData: User[] = [
    {
        id: 1,
        date: "2016-05-01",
        name: "\u5F20\u4E09",
        address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
    },
    {
        id: 2,
        date: "2016-05-02",
        name: "\u5F20\u4E09",
        address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
    },
    {
        id: 3,
        date: "2016-05-01",
        name: "\u5F20\u4E09",
        address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
    },
    {
        id: 4,
        date: "2016-05-03",
        name: "\u5F20\u4E09",
        address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
    },
]
const menus = [
    {
        label: "\u6279\u91CF\u7F16\u8F91",
        icon: "Edit",
        click: (row: User) => {
            console.log("\u7F16\u8F91:" + row.name);
        },
    },
    {
        label: "\u6279\u91CF\u79FB\u52A8",
        icon: "Switch",
        click: (row: User) => {
            console.log("\u79FB\u52A8:" + row.name);
        },
        disabled: (row: User) => {
            if (row.id === 1) {
                return true;
            }
        },
    },
    {
        label: "\u6279\u91CF\u5220\u9664",
        icon: "Delete",
        click: (row: User) => {
            console.log("\u5220\u9664:" + row.name);
        },
        divided: true,
    },
]
function handleSelectionChange(value: any) {
    selectRows.value = value;
}

<\/script>`,n.__sourceCodeTitle="\u5217\u7EC4\u4EF6\u4E0B\u62C9\u83DC\u5355"}const me=D("always"),be=D("hover"),Ee=D("selected"),j=h({__name:"DropdownColumn",setup(n){const l=F([]),d=F("always"),c=[{id:1,date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{id:2,date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{id:3,date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{id:4,date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}],o=[{label:"\u6279\u91CF\u7F16\u8F91",icon:"Edit",click:u=>{console.log("\u7F16\u8F91:"+u.name)}},{label:"\u6279\u91CF\u79FB\u52A8",icon:"Switch",click:u=>{console.log("\u79FB\u52A8:"+u.name)},disabled:u=>{if(u.id===1)return!0}},{label:"\u6279\u91CF\u5220\u9664",icon:"Delete",click:u=>{console.log("\u5220\u9664:"+u.name)},divided:!0}];function s(u){l.value=u}return(u,p)=>{const b=t("el-radio-button"),m=t("el-radio-group"),r=t("el-table-column"),E=t("fu-table-column-dropdown"),A=t("fu-table");return C(),f(B,null,[e(m,{modelValue:d.value,"onUpdate:modelValue":p[0]||(p[0]=g=>d.value=g),style:{"margin-bottom":"20px"}},{default:a(()=>[e(b,{label:"always"},{default:a(()=>[me]),_:1}),e(b,{label:"hover"},{default:a(()=>[be]),_:1}),e(b,{label:"selected"},{default:a(()=>[Ee]),_:1})]),_:1},8,["modelValue"]),e(A,{data:c,onSelectionChange:s},{default:a(()=>[e(r,{type:"selection"}),e(E,{menus:o,title:`\u5DF2\u9009\u4E2D${l.value.length}\u9879`,showType:d.value},null,8,["title","showType"]),e(r,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(r,{prop:"name",label:"\u59D3\u540D","min-width":"180"}),e(r,{prop:"address",label:"\u5730\u5740","min-width":"300"})]),_:1})],64)}}});typeof P=="function"&&P(j);var Fe=_(j,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/DropdownColumn.vue"]]);function U(n){n.__sourceCode=`<template>
  <div>
    <fu-table :data="tableData">
      <el-table-column type="selection" />
      <fu-table-column-dropdown showType="always" width="auto" ref="tableDropRef">
        <!-- \u81EA\u5B9A\u4E49\u89E6\u53D1\u56FE\u6807 -->
        <template #icon>
          <el-icon>
            <setting />
          </el-icon>\u81EA\u5B9A\u4E49
        </template>
        <!-- \u81EA\u5B9A\u4E49\u89E6\u53D1\u56FE\u6807 -->
        <template #title>
          <div class="example-title">\u81EA\u5B9A\u4E49\u6807\u9898</div>
        </template>
        <!-- \u5185\u5BB9 -->
        <template #default="scope">
          <div class="example">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="\u590D\u9009\u6846 A" />
              <el-checkbox label="\u590D\u9009\u6846 B" />
              <el-checkbox label="\u590D\u9009\u6846 C" />
            </el-checkbox-group>
            <div class="example-button">
              <el-button type="primary" size="small">\u786E\u8BA4</el-button>
              <el-button type="primary" plain @click="cancel(scope.$index)" size="small">\u53D6\u6D88</el-button>
            </div>
          </div>
        </template>
      </fu-table-column-dropdown>
      <el-table-column prop="date" label="\u65E5\u671F" min-width="180" />
      <el-table-column prop="name" label="\u59D3\u540D" min-width="180" />
      <el-table-column prop="address" label="\u5730\u5740" min-width="300" />
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
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4",
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4",
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4",
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "\u5F20\u4E09",
    address: "\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4",
  },
]

function cancel(index: number) {
  tableDropRef.value?.hide(index);
}

<\/script>
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
</style>`,n.__sourceCodeTitle="\u901A\u8FC7slot\u81EA\u5B9A\u4E49\u5217\u7EC4\u4EF6\u4E0B\u62C9\u83DC\u5355"}const Ce=n=>(V("data-v-2005f5a6"),n=n(),N(),n),fe=D("\u81EA\u5B9A\u4E49 "),_e=Ce(()=>i("div",{class:"example-title"},"\u81EA\u5B9A\u4E49\u6807\u9898",-1)),De={class:"example"},Be={class:"example-button"},he=D("\u786E\u8BA4"),Ae=D("\u53D6\u6D88"),K=h({__name:"DropdownColumnSlot",setup(n){const l=F([]),d=F(),c=[{id:1,date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{id:2,date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{id:3,date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{id:4,date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}];function o(s){var u;(u=d.value)==null||u.hide(s)}return(s,u)=>{const p=t("el-table-column"),b=t("setting"),m=t("el-icon"),r=t("el-checkbox"),E=t("el-checkbox-group"),A=t("el-button"),g=t("fu-table-column-dropdown"),v=t("fu-table");return C(),f("div",null,[e(v,{data:c},{default:a(()=>[e(p,{type:"selection"}),e(g,{showType:"always",width:"auto",ref_key:"tableDropRef",ref:d},{icon:a(()=>[e(m,null,{default:a(()=>[e(b)]),_:1}),fe]),title:a(()=>[_e]),default:a(q=>[i("div",De,[e(E,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=y=>l.value=y)},{default:a(()=>[e(r,{label:"\u590D\u9009\u6846 A"}),e(r,{label:"\u590D\u9009\u6846 B"}),e(r,{label:"\u590D\u9009\u6846 C"})]),_:1},8,["modelValue"]),i("div",Be,[e(A,{type:"primary",size:"small"},{default:a(()=>[he]),_:1}),e(A,{type:"primary",plain:"",onClick:y=>o(q.$index),size:"small"},{default:a(()=>[Ae]),_:2},1032,["onClick"])])])]),_:1},512),e(p,{prop:"date",label:"\u65E5\u671F","min-width":"180"}),e(p,{prop:"name",label:"\u59D3\u540D","min-width":"180"}),e(p,{prop:"address",label:"\u5730\u5740","min-width":"300"})]),_:1})])}}});typeof U=="function"&&U(K);var ge=_(K,[["__scopeId","data-v-2005f5a6"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/demo/DropdownColumnSlot.vue"]]);const ve=[{name:"Table Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"columns",desc:"\u9009\u5217\u6570\u7EC4\uFF0C\u4F20\u5165\u5219\u5F00\u542F\u9009\u5217\u529F\u80FD\uFF0C\u5982\u679C\u6570\u7EC4\u957F\u5EA6\u4E3A0\u5219\u81EA\u52A8\u6839\u636E\u8868\u683C\u5185\u5BB9\u586B\u5145\u6570\u7EC4",type:"Array",enum:"-",default:"-"},{prop:"local-key",desc:"\u8BBE\u7F6E\u4E00\u4E2A\u552F\u4E00\u7684Key\uFF0C\u5C06\u9009\u5217\u72B6\u6001\u81EA\u52A8\u4FDD\u5B58\u5230localStorage\uFF0C\u5237\u65B0\u9875\u9762\u8868\u683C\u5217\u4ECD\u7136\u662F\u4FDD\u5B58\u65F6\u7684\u72B6\u6001\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u4E0D\u4FDD\u5B58",type:"String",enum:"-",default:"-"},{prop:"refresh",desc:"refresh\u4E3Atrue\u53EF\u4EE5\u907F\u514D\u6296\u52A8\u6216\u95EA\u70C1\uFF0C\u4F46\u662Ftable\u4F1A\u66F4\u65B0\u4E00\u6B21\uFF0C\u5982\u6709\u7279\u6B8A\u9700\u6C42\u53EF\u4EE5\u5173\u95ED",type:"Boolean",enum:"true / false",default:"true"}]},{name:"TableColumn Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"label",desc:"\u8868\u5934\u540D\u79F0\uFF0C\u5982\u9700\u9009\u5217(\u975Efix\uFF0C\u975Eel-table type=selection/index/expand)\uFF0C\u5219\u5FC5\u586B",type:"String",enum:"-",default:"-"},{prop:"show",desc:"\u672A\u8BBE\u7F6Eshow \u6216\u8005 show \u4E0D\u7B49\u4E8E false \u65F6\u5219\u663E\u793A\u8BE5\u5217",type:"Boolean",enum:"true / false",default:"-"},{prop:"fix",desc:"\u8BBE\u7F6E\u4E86fix \u5E76\u4E14 fix \u4E0D\u7B49\u4E8E false \u65F6\u5219\u8BE5\u5217\u4E0D\u53EF\u9690\u85CF",type:"Boolean",enum:"true / false",default:"-"}]},{name:"TableColumnSelect Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"type",desc:"\u9009\u5217\u6309\u94AE\u7C7B\u522B: popover\u65B9\u5F0F\u663E\u793A\uFF0Cdialog\u65B9\u5F0F\u663E\u793A",type:"String",enum:"dialog / popover",default:"popover"},{prop:"columns",desc:'\u9009\u5217\u6570\u7EC4\uFF0C\u5FC5\u987B\u4E0Efu-table\u4F20\u5165\u7684columns\u662F\u540C\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5BF9\u8C61\u683C\u5F0F:{label: "XXX", show: true, fix: false}',type:"Array",enum:"-",default:"-"},{prop:"icon",desc:"\u89E6\u53D1\u6309\u94AE\u56FE\u6807",type:"String",enum:"-",default:"Setting"},{prop:"trigger",desc:"popover\u65B9\u5F0F\u7684\u89E6\u53D1\u65B9\u5F0F",type:"String",enum:"hover / click",default:"click"}]},{name:"TableOperations Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"align",desc:"\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"left / center / right",default:"center"},{prop:"width",desc:"\u5BBD\u5EA6\uFF0C\u4E0D\u8BBE\u503C\u5219\u81EA\u52A8\u6839\u636E\u6309\u94AE\u6570\u91CF\u8BA1\u7B97\u5BBD\u5EA6",type:"String / Number",enum:"\u6570\u503C / auto",default:"-"},{prop:"ellipsis",desc:"\u8D85\u8FC7\u51E0\u4E2A\u6309\u94AE\u65F6\u663E\u793A\u7701\u7565\u53F7",type:"Number",enum:"-",default:"2"},{prop:"buttons",desc:"\u6309\u94AE\u6570\u7EC4: \u6570\u7EC4\u5BF9\u8C61\u7684\u53C2\u6570\u8BF7\u770BTable Button Attributes",type:"Array",enum:"-",default:"-"},{prop:"type",desc:"\u663E\u793A\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u662F\u6587\u5B57",type:"String",enum:"label\uFF08\u6587\u5B57\uFF09 / icon\uFF08\u56FE\u6807\uFF09",default:"label"}]},{name:"Table Button",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"label",desc:"\u6309\u94AE\u540D\u79F0",type:"String",enum:"-",default:"-"},{prop:"icon",desc:"\u56FE\u6807",type:"String",enum:"-",default:"-"},{prop:"type",desc:"\u6309\u94AE\u7C7B\u578B",type:"String",enum:"primary / success / warning / danger / info / text",default:"-"},{prop:"disabled",desc:"\u7981\u7528, Function\u65F6\u53C2\u6570\u4E3A\u884C\u5185\u5BB9",type:"Boolean / Function(row)",enum:"true / false",default:"-"},{prop:"show",desc:"\u662F\u5426\u663E\u793A, Function\u65F6\u53C2\u6570\u4E3A\u884C\u5185\u5BB9",type:"Boolean / Function(row)",enum:"true / false",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"click",desc:"\u70B9\u51FB\u65F6\u89E6\u53D1",value:"-"}]}]},{name:"TablePagination",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"current-page",desc:"\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26",type:"Number",enum:"-",default:"1"},{prop:"page-size",desc:"\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26",type:"Number",enum:"-",default:"5"},{prop:"page-sizes",desc:"\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E",type:"Array of Number",enum:"-",default:"[5, 10, 20, 50, 100]"},{prop:"total",desc:"\u603B\u9875\u6570",type:"Number",enum:"-",default:"0"}]},{name:"@Methods",header:{method:"\u65B9\u6CD5\u540D",desc:"\u8BF4\u660E",value:"\u53C2\u6570"},table:[{method:"change",desc:"currentPage \u6216 pageSize \u53D8\u66F4\u65F6\u89E6\u53D1",value:"-"},{method:"current-change",desc:"currentPage\u53D8\u66F4\u65F6\u89E6\u53D1",value:"-"},{method:"size-change",desc:"pageSize\u53D8\u66F4\u65F6\u89E6\u53D1",value:"-"}]}]},{name:"TableColumnDropdown",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"showType",desc:"\u7EC4\u4EF6\u663E\u793A\u65B9\u5F0F",type:"String",enum:"always / hover / selected",default:"always"},{prop:"menus",desc:"\u4E0B\u62C9\u5217\u8868\u6570\u7EC4: \u6570\u7EC4\u5BF9\u8C61\u7684\u53C2\u6570\u8BF7\u770BTableColumnDropdown @menus",type:"Array",enum:"-",default:"[]"},{prop:"title",desc:"\u4E0B\u62C9\u5217\u8868\u4E2D\u6807\u9898\uFF0C\u4F8B\u5982\uFF1A\u5DF2\u9009\u4E2D1\u9879",type:"String",enum:"-",default:"-"},{prop:"trigger",desc:"\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A",type:"String",enum:"hover / click",default:"click"},{prop:"width",desc:"\u7EC4\u4EF6\u5BBD\u5EA6",type:"String",enum:"-",default:"40"}]},{name:"@menus",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"label",desc:"\u540D\u79F0",type:"String",enum:"-",default:"-"},{prop:"icon",desc:"\u56FE\u6807",type:"String",enum:"-",default:"-"},{prop:"disabled",desc:"\u7981\u7528",type:"Boolean / Function(row)",enum:"true / false",default:"-"},{prop:"divided",desc:"\u4E0E\u4E0A\u4E00\u4E2A\u7684\u5206\u5272\u7EBF",type:"Boolean",enum:"true / false",default:"-"}]},{name:"@Methods",header:{event:"\u65B9\u6CD5\u540D",desc:"\u8BF4\u660E",value:"\u53C2\u6570"},table:[{event:"hide",desc:"\u5173\u95ED\u4E0B\u62C9\u83DC\u5355",value:"index"},{event:"show",desc:"\u663E\u793A\u4E0B\u62C9\u83DC\u5355",value:"index"}]},{name:"@Slots",header:{method:"name",desc:"\u8BF4\u660E"},table:[{method:"icon",desc:"\u81EA\u5B9A\u4E49\u89E6\u53D1\u6309\u94AE"},{method:"title",desc:"\u4E0B\u62C9\u5217\u8868\u4E2D\u6807\u9898"},{method:"-",desc:"\u5217\u8868\u5185\u5BB9"}]}]}];const X=n=>(V("data-v-c772ad64"),n=n(),N(),n),we=X(()=>i("h1",{class:"component-h1"},"Table \u8868\u683C",-1)),ye=X(()=>i("p",null," el-table\u7684\u6269\u5C55\uFF0C\u589E\u52A0\u9009\u5217\u529F\u80FD\uFF0C\u9664\u4E86\u4EE5\u4E0B\u989D\u5916\u589E\u52A0\u7684\u529F\u80FD\u548C\u5C5E\u6027\uFF0C\u5176\u4ED6\u7684\u7528\u6CD5\u4E0Eel-table\u4E00\u81F4 ",-1)),xe=h({__name:"index",setup(n){const l=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u7EE7\u627Fel-table\u7684\u529F\u80FD\uFF0C\u589E\u52A0\u9009\u5217\u529F\u80FD\uFF0C\u9009\u5217\u529F\u80FD\u8BF7\u770B\u4E0B\u4E00\u8282",component:W},{title:"\u8868\u683C\u9009\u5217",titleDesc:"\u7ED9columns\u8D4B\u503C\u5219\u5F00\u542F\u9009\u5217\u529F\u80FD\uFF0C\u9009\u62E9\u663E\u793A\u6216\u9690\u85CF\u67D0\u4E9B\u5217",component:ne,description:'\u5EFA\u8BAE\u4E0ETableColumnSelect\u4E00\u8D77\u4F7F\u7528\u3002\u8BBE\u7F6Efix\u5C5E\u6027\u6216\u8005type\u5C5E\u6027\u4E3Aselection/index/expand\u7684\u5217\u4E0D\u53EF\u9009\u62E9\u663E\u9690\uFF0C\u8BBE\u7F6E:show="false"\u7684\u5217\uFF0C\u9ED8\u8BA4\u9690\u85CF'},{title:"\u9009\u5217\u4FDD\u5B58",titleDesc:"\u7ED9\u8868\u683C\u8BBE\u7F6E\u552F\u4E00\u7684local-key\uFF0C\u5C06\u9009\u5217\u72B6\u6001\u81EA\u52A8\u4FDD\u5B58\u5230localStorage",component:le},{title:"\u64CD\u4F5C\u5217",titleDesc:"TableOperations: \u6309\u94AE\u81EA\u52A8\u6298\u53E0\uFF0C\u63D0\u4F9B\u9009\u5217\u529F\u80FD\uFF0C\u63A7\u5236\u663E\u9690\u6216\u7981\u7528",component:re,description:"\u4F20\u5165columns\u5219\u663E\u793A\u9009\u5217\u6309\u94AE\u3002\u63A7\u5236\u53F0\u67E5\u770B\u6309\u94AE\u7684click\u4E8B\u4EF6"},{title:"\u5206\u9875",titleDesc:"TablePagination: \u8868\u683C\u5206\u9875",component:pe,description:"\u4F20\u5165columns\u5219\u663E\u793A\u9009\u5217\u6309\u94AE\u3002\u63A7\u5236\u53F0\u67E5\u770B\u6309\u94AE\u7684click\u4E8B\u4EF6"},{title:"\u5217\u7EC4\u4EF6\u4E0B\u62C9\u83DC\u5355",titleDesc:"\u53EF\u589E\u52A0\u4E00\u5217\u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6\uFF0C\u6709\u4E09\u79CD\u663E\u793A\u65B9\u5F0F\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u5185\u5BB9",component:Fe,description:"\u901A\u8FC7show\u8BBE\u7F6E\u4E09\u79CD\u663E\u793A\u65B9\u5F0F\uFF0Calways/hover/selected"},{title:"\u901A\u8FC7slot\u81EA\u5B9A\u4E49\u5217\u7EC4\u4EF6\u4E0B\u62C9\u83DC\u5355",titleDesc:"slot\u53EF\u4EE5\u81EA\u5B9A\u4E49\u89E6\u53D1\u6309\u94AE\u3001\u6807\u9898\u3001\u5185\u5BB9",component:ge}];return(d,c)=>{const o=t("document-table"),s=t("code-example");return C(),f(B,null,[w(" \u6587\u6863\u8BF4\u660E "),e(o,{data:J(ve)},null,8,["data"]),w(" \u4E00\u7EA7\u6807\u9898 "),we,w(" \u4E00\u7EA7\u63CF\u8FF0 "),ye,w("\u5185\u5BB9 "),(C(),f(B,null,Q(l,(u,p)=>i("div",{class:"component-block",key:p},[i("h2",null,x(u.title),1),i("p",null,x(u.titleDesc),1),e(s,{description:u.description,component:u.component},null,8,["description","component"])])),64))],64)}}});var Se=_(xe,[["__scopeId","data-v-c772ad64"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/table/index.vue"]]);export{Se as default};
