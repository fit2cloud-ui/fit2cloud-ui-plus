import{d as g,b as r,r as l,o as F,e as v,f as t,a as e,w as f,t as E,F as B,_ as h,p as k,i as w,h as N,n as P,g as U,j as y,u as V,k as M}from"./index.c8cdffa1.js";function x(u){u.__sourceCode=`<template>
  <div>
    <h4>
      1\u3001\u4F7F\u7528slot
    </h4>
    <FuFilterBar ref="filterRef" @exec="exec" :result-count="count" size="default">
      <template #default>
        <FuFilterSelect size="default" label="\u4E8B\u4EF6\u7C7B\u578B" field="type" :options="options" multiple clearable filterable
          use-select-all />
        <FuFilterDate size="default" label="\u64CD\u4F5C\u65E5\u671F" field="date" />
        <FuFilterDateTime size="default" label="\u64CD\u4F5C\u65F6\u95F4" field="datetime" />
      </template>
    </FuFilterBar>
    <h4>
      1\u3001\u4F7F\u7528components\u4F20\u53C2
    </h4>
    <fu-filter-bar ref="filterRef" @exec="exec" :result-count="count" size="default" :components="components" />
  </div>
  <pre class="condition_display">{{ condition }}</pre>
</template>

<script setup lang="ts">
import { ref } from "vue"

const options = [{ label: "\u9009\u98791", value: 1 },
{ label: "\u9009\u98792", value: 2 },
{ label: "\u9009\u98793", value: 3 },
{ label: "\u9009\u98794", value: 4 },
{ label: "\u9009\u98795", value: 5 },
{ label: "\u9009\u98796", value: 6 },
{ label: "\u9009\u98797", value: 7 },
{ label: "\u9009\u98798", value: 8 },
{ label: "\u9009\u98799", value: 9 },
{ label: "\u9009\u987910", value: 10 },
]
const components = [
  {
    field: "groups",
    label: "\u533A\u57DF",
    component: "FuFilterSelect",
    options: [{ label: "\u5317\u533A", value: "1" }, { label: "\u5357\u533A", value: "2" }, { label: "\u4E1C\u533A", value: "3" }],
    multiple: true,
    clearable: true,
    filterable: true
  },
  {
    field: "date",
    label: "\u64CD\u4F5C\u65E5\u671F",
    component: "FuFilterDate"
  }
]

const count = ref(0)
const condition = ref({})

function exec(c: any) {
  condition.value = c
  count.value = Object.keys(condition).length * 10
}
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>`,u.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const T=u=>(k("data-v-66d6b38c"),u=u(),w(),u),q=T(()=>t("h4",null," 1\u3001\u4F7F\u7528slot ",-1)),G=T(()=>t("h4",null," 1\u3001\u4F7F\u7528components\u4F20\u53C2 ",-1)),H={class:"condition_display"},$=g({__name:"BaseFilterBar",setup(u){const d=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],p=[{field:"groups",label:"\u533A\u57DF",component:"FuFilterSelect",options:[{label:"\u5317\u533A",value:"1"},{label:"\u5357\u533A",value:"2"},{label:"\u4E1C\u533A",value:"3"}],multiple:!0,clearable:!0,filterable:!0},{field:"date",label:"\u64CD\u4F5C\u65E5\u671F",component:"FuFilterDate"}],a=r(0),o=r({});function i(n){o.value=n,a.value=Object.keys(o).length*10}return(n,s)=>{const c=l("FuFilterSelect"),C=l("FuFilterDate"),b=l("FuFilterDateTime"),_=l("FuFilterBar"),m=l("fu-filter-bar");return F(),v(B,null,[t("div",null,[q,e(_,{ref:"filterRef",onExec:i,"result-count":a.value,size:"default"},{default:f(()=>[e(c,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"type",options:d,multiple:"",clearable:"",filterable:"","use-select-all":""}),e(C,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(b,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),_:1},8,["result-count"]),G,e(m,{ref:"filterRef",onExec:i,"result-count":a.value,size:"default",components:p},null,8,["result-count"])]),t("pre",H,E(o.value),1)],64)}}});typeof x=="function"&&x($);var J=h($,[["__scopeId","data-v-66d6b38c"],["__file","/Users/wangdan/\u5DE5\u4F5C/fit2cloud-ui-plus/examples/pages/filter-bar/demo/BaseFilterBar.vue"]]);function S(u){u.__sourceCode=`<template>
  <div>
    <fu-filter-bar ref="filterRef" @exec="exec" :result-count="count" size="default">
      <template #default>
        <fu-filter-select size="default" label="\u4E8B\u4EF6\u7C7B\u578B" field="event_type" :options="options" clearable filterable />
        <fu-filter-select size="default" label="\u64CD\u4F5C\u7528\u6237" field="user" :options="users" multiple clearable filterable />
        <fu-filter-date size="default" label="\u64CD\u4F5C\u65E5\u671F" field="date" />
        <fu-filter-date-time size="default" label="\u64CD\u4F5C\u65F6\u95F4" field="datetime" />
      </template>
    </fu-filter-bar>
  </div>
  <pre class="condition_display">{{ condition }}</pre>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue"
const options = [{ label: "\u9009\u98791", value: 1 },
{ label: "\u9009\u98792", value: 2 },
{ label: "\u9009\u98793", value: 3 },
{ label: "\u9009\u98794", value: 4 },
{ label: "\u9009\u98795", value: 5 },
{ label: "\u9009\u98796", value: 6 },
{ label: "\u9009\u98797", value: 7 },
{ label: "\u9009\u98798", value: 8 },
{ label: "\u9009\u98799", value: 9 },
{ label: "\u9009\u987910", value: 10 },
]
const users = [{ label: "\u7528\u62371", value: 1 },
{ label: "\u7528\u62372", value: 2 },
{ label: "\u7528\u62373", value: 3 },
{ label: "\u7528\u62374", value: 4 },
{ label: "\u7528\u62375", value: 5 },
{ label: "\u7528\u62376", value: 6 },
{ label: "\u7528\u62377", value: 7 },
{ label: "\u7528\u62378", value: 8 },
{ label: "\u7528\u62379", value: 9 },
{ label: "\u7528\u623710", value: 10 },
]
const count = ref(0)
const condition = ref({})
const filterRef = ref()

function init() {
  filterRef.value?.setConditions({ user: { value: [2, 3, 4] } })
}
function exec(c: any) {
  condition.value = c
  count.value = Object.keys(c).length * 10
}
onMounted(() => {
  nextTick(() => {
    init()
  });
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>`,u.__sourceCodeTitle="\u56DE\u663E\u6761\u4EF6"}const K={class:"condition_display"},R=g({__name:"SetConditionsDemo",setup(u){const d=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],p=[{label:"\u7528\u62371",value:1},{label:"\u7528\u62372",value:2},{label:"\u7528\u62373",value:3},{label:"\u7528\u62374",value:4},{label:"\u7528\u62375",value:5},{label:"\u7528\u62376",value:6},{label:"\u7528\u62377",value:7},{label:"\u7528\u62378",value:8},{label:"\u7528\u62379",value:9},{label:"\u7528\u623710",value:10}],a=r(0),o=r({}),i=r();function n(){var c;(c=i.value)==null||c.setConditions({user:{value:[2,3,4]}})}function s(c){o.value=c,a.value=Object.keys(c).length*10}return N(()=>{P(()=>{n()})}),(c,C)=>{const b=l("fu-filter-select"),_=l("fu-filter-date"),m=l("fu-filter-date-time"),A=l("fu-filter-bar");return F(),v(B,null,[t("div",null,[e(A,{ref_key:"filterRef",ref:i,onExec:s,"result-count":a.value,size:"default"},{default:f(()=>[e(b,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"event_type",options:d,clearable:"",filterable:""}),e(b,{size:"default",label:"\u64CD\u4F5C\u7528\u6237",field:"user",options:p,multiple:"",clearable:"",filterable:""}),e(_,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(m,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),_:1},8,["result-count"])]),t("pre",K,E(o.value),1)],64)}}});typeof S=="function"&&S(R);var Q=h(R,[["__scopeId","data-v-1e4ce51f"],["__file","/Users/wangdan/\u5DE5\u4F5C/fit2cloud-ui-plus/examples/pages/filter-bar/demo/SetConditionsDemo.vue"]]);function z(u){u.__sourceCode=`<template>
  <div>
    <fu-filter-bar ref="filter" @exec="exec" :result-count="count" size="default">
      <template #tl>
        <el-button>\u5BFC\u51FA\u6570\u636E</el-button>
      </template>
      <template #default>
        <fu-filter-select size="default" label="\u4E8B\u4EF6\u7C7B\u578B" field="type" :options="options" multiple clearable filterable />
        <fu-filter-date size="default" label="\u64CD\u4F5C\u65E5\u671F" field="date" />
        <fu-filter-date-time size="default" label="\u64CD\u4F5C\u65F6\u95F4" field="datetime" />
      </template>
      <template #buttons>
        <fu-table-column-select type="button" :columns="columns" size="default" />
      </template>
    </fu-filter-bar>
  </div>
  <pre class="condition_display">{{ condition }}</pre>
  <fu-table :data="tableData" :columns="columns">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="120"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="120"></el-table-column>
    <el-table-column prop="address" label="\u5730\u5740"></el-table-column>
  </fu-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
const options = [{ label: "\u9009\u98791", value: 1 },
{ label: "\u9009\u98792", value: 2 },
{ label: "\u9009\u98793", value: 3 },
{ label: "\u9009\u98794", value: 4 },
{ label: "\u9009\u98795", value: 5 },
{ label: "\u9009\u98796", value: 6 },
{ label: "\u9009\u98797", value: 7 },
{ label: "\u9009\u98798", value: 8 },
{ label: "\u9009\u98799", value: 9 },
{ label: "\u9009\u987910", value: 10 },
]

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
const count = ref(0)
const condition = ref({})
const columns = ref([])

function exec(condition: any) {
  condition.value = condition
  count.value = Object.keys(condition).length * 10
}

<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>`,u.__sourceCodeTitle="\u63D2\u69FD\u793A\u4F8B"}const W=U("\u5BFC\u51FA\u6570\u636E"),X={class:"condition_display"},j=g({__name:"SlotDemo",setup(u){const d=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],p=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}],a=r(0),o=r({}),i=r([]);function n(s){s.value=s,a.value=Object.keys(s).length*10}return(s,c)=>{const C=l("el-button"),b=l("fu-filter-select"),_=l("fu-filter-date"),m=l("fu-filter-date-time"),A=l("fu-table-column-select"),O=l("fu-filter-bar"),D=l("el-table-column"),L=l("fu-table");return F(),v(B,null,[t("div",null,[e(O,{ref:"filter",onExec:n,"result-count":a.value,size:"default"},{tl:f(()=>[e(C,null,{default:f(()=>[W]),_:1})]),default:f(()=>[e(b,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"type",options:d,multiple:"",clearable:"",filterable:""}),e(_,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(m,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),buttons:f(()=>[e(A,{type:"button",columns:i.value,size:"default"},null,8,["columns"])]),_:1},8,["result-count"])]),t("pre",X,E(o.value),1),e(L,{data:p,columns:i.value},{default:f(()=>[e(D,{type:"selection"}),e(D,{prop:"date",label:"\u65E5\u671F","min-width":"120"}),e(D,{prop:"name",label:"\u59D3\u540D","min-width":"120"}),e(D,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["columns"])],64)}}});typeof z=="function"&&z(j);var Y=h(j,[["__scopeId","data-v-f4acb6e2"],["__file","/Users/wangdan/\u5DE5\u4F5C/fit2cloud-ui-plus/examples/pages/filter-bar/demo/SlotDemo.vue"]]);const Z=[{name:"FilterBar",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:" - / default / small / large",default:"-"},{prop:"result-count",desc:"\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF",type:"String",enum:"-",default:"0"},{prop:"quick-placeholder",desc:"\u5FEB\u901F\u641C\u7D22\u7684placeholder",type:"String",enum:"-",default:"\u641C\u7D22"},{prop:"components",desc:"\u7B5B\u9009\u7EC4\u4EF6\u6570\u7EC4",type:"Array",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"exec",desc:"\u641C\u7D22\u6761\u4EF6\u53D8\u66F4\u65F6\u89E6\u53D1",value:"\u641C\u7D22\u6761\u4EF6Object"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"tl",desc:"\u4E0A\u90E8\u5DE6\u4FA7\u533A\u57DF\u5185\u5BB9"},{name:"tr",desc:"\u4E0A\u90E8\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9"},{name:"-",desc:"\u7B5B\u9009\u6761\u4EF6\u663E\u793A\u533A\u57DF\u5185\u5BB9"}]}]},{name:"Filter Components",children:[{name:"@FilterSelect Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElSelect",desc:"\u7EE7\u627FElSelect\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDate Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"align",desc:"\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"left / center / right",default:"right"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDatePicker",desc:"\u7EE7\u627FElDatePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDateTime Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"align",desc:"\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"left / center / right",default:"right"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDateTimePicker",desc:"\u7EE7\u627FElDateTimePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]}]}];const I=u=>(k("data-v-b9cfadd8"),u=u(),w(),u),ee=I(()=>t("h1",{class:"component-h1"},"FilterBar \u7B5B\u9009\u6761",-1)),ue=I(()=>t("p",null,"\u641C\u7D22\u6761\uFF0C\u63D0\u4F9B\u5FEB\u901F\u641C\u7D22\uFF0C\u9AD8\u7EA7\u641C\u7D22\uFF0C\u81EA\u5B9A\u4E49\u6309\u94AE",-1)),le=g({__name:"index",setup(u){const d=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u4F7F\u7528FilterBar",component:J},{title:"\u56DE\u663E\u6761\u4EF6",titleDesc:"\u8BBE\u7F6E\u521D\u59CB\u6761\u4EF6\uFF0C\u641C\u7D22\u6846\u81EA\u52A8\u56DE\u663E",component:Q,description:"\u7B5B\u9009\u7EC4\u4EF6\u9700\u8981\u63D0\u4F9Binit\u548CgetCondition\u65B9\u6CD5\uFF0C\u5982\u679C\u5728mounted\u4E2D\u521D\u59CB\u5316\u5FC5\u987B\u4F7F\u7528this.$nextTick"},{title:"\u63D2\u69FD\u793A\u4F8B",titleDesc:"\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u8BBE\u7F6E\u4E0A\u90E8\u5DE6\u4FA7\u5185\u5BB9\u3001\u4E0A\u90E8\u53F3\u4FA7\u5185\u5BB9",component:Y}];return(p,a)=>{const o=l("document-table"),i=l("code-example");return F(),v(B,null,[y(" \u6587\u6863\u8BF4\u660E "),e(o,{data:V(Z)},null,8,["data"]),y(" \u4E00\u7EA7\u6807\u9898 "),ee,y(" \u4E00\u7EA7\u63CF\u8FF0 "),ue,y(" BaseTable\u5185\u5BB9 "),(F(),v(B,null,M(d,(n,s)=>t("div",{class:"component-block",key:s},[t("h2",null,E(n.title),1),t("p",null,E(n.titleDesc),1),e(i,{description:n.description,component:n.component},null,8,["description","component"])])),64))],64)}}});var ne=h(le,[["__scopeId","data-v-b9cfadd8"],["__file","/Users/wangdan/\u5DE5\u4F5C/fit2cloud-ui-plus/examples/pages/filter-bar/index.vue"]]);export{ne as default};
