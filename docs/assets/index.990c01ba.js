import{d as g,b as d,r as u,o as F,e as B,f as n,a as e,w as r,t as E,F as C,_ as x,p as w,i as T,h as H,n as J,g as K,j as h,u as Q,k as W}from"./index.08a9fafa.js";function k(l){l.__sourceCode=`<template>
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
</style>`,l.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const $=l=>(w("data-v-66d6b38c"),l=l(),T(),l),X=$(()=>n("h4",null," 1\u3001\u4F7F\u7528slot ",-1)),Y=$(()=>n("h4",null," 1\u3001\u4F7F\u7528components\u4F20\u53C2 ",-1)),Z={class:"condition_display"},I=g({__name:"BaseFilterBar",setup(l){const b=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],m=[{field:"groups",label:"\u533A\u57DF",component:"FuFilterSelect",options:[{label:"\u5317\u533A",value:"1"},{label:"\u5357\u533A",value:"2"},{label:"\u4E1C\u533A",value:"3"}],multiple:!0,clearable:!0,filterable:!0},{field:"date",label:"\u64CD\u4F5C\u65E5\u671F",component:"FuFilterDate"}],i=d(0),a=d({});function o(t){a.value=t,i.value=Object.keys(a).length*10}return(t,c)=>{const s=u("FuFilterSelect"),_=u("FuFilterDate"),f=u("FuFilterDateTime"),p=u("FuFilterBar"),v=u("fu-filter-bar");return F(),B(C,null,[n("div",null,[X,e(p,{ref:"filterRef",onExec:o,"result-count":i.value,size:"default"},{default:r(()=>[e(s,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"type",options:b,multiple:"",clearable:"",filterable:"","use-select-all":""}),e(_,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(f,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),_:1},8,["result-count"]),Y,e(v,{ref:"filterRef",onExec:o,"result-count":i.value,size:"default",components:m},null,8,["result-count"])]),n("pre",Z,E(a.value),1)],64)}}});typeof k=="function"&&k(I);var ee=x(I,[["__scopeId","data-v-66d6b38c"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/filter-bar/demo/BaseFilterBar.vue"]]);function S(l){l.__sourceCode=`<template>
  <div>
    <fu-filter-bar ref="filterRef" @exec="exec" :result-count="count" size="default">
      <template #default>
        <fu-filter-select size="default" label="\u4E8B\u4EF6\u7C7B\u578B" field="event_type" :options="options" clearable />
        <fu-filter-select size="default" label="\u64CD\u4F5C\u7528\u6237" field="user" :options="users" multiple clearable />
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
</style>`,l.__sourceCodeTitle="\u56DE\u663E\u6761\u4EF6"}const ue={class:"condition_display"},V=g({__name:"SetConditionsDemo",setup(l){const b=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],m=[{label:"\u7528\u62371",value:1},{label:"\u7528\u62372",value:2},{label:"\u7528\u62373",value:3},{label:"\u7528\u62374",value:4},{label:"\u7528\u62375",value:5},{label:"\u7528\u62376",value:6},{label:"\u7528\u62377",value:7},{label:"\u7528\u62378",value:8},{label:"\u7528\u62379",value:9},{label:"\u7528\u623710",value:10}],i=d(0),a=d({}),o=d();function t(){var s;(s=o.value)==null||s.setConditions({user:{value:[2,3,4]}})}function c(s){a.value=s,i.value=Object.keys(s).length*10}return H(()=>{J(()=>{t()})}),(s,_)=>{const f=u("fu-filter-select"),p=u("fu-filter-date"),v=u("fu-filter-date-time"),D=u("fu-filter-bar");return F(),B(C,null,[n("div",null,[e(D,{ref_key:"filterRef",ref:o,onExec:c,"result-count":i.value,size:"default"},{default:r(()=>[e(f,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"event_type",options:b,clearable:""}),e(f,{size:"default",label:"\u64CD\u4F5C\u7528\u6237",field:"user",options:m,multiple:"",clearable:""}),e(p,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(v,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),_:1},8,["result-count"])]),n("pre",ue,E(a.value),1)],64)}}});typeof S=="function"&&S(V);var le=x(V,[["__scopeId","data-v-1e4ce51f"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/filter-bar/demo/SetConditionsDemo.vue"]]);function z(l){l.__sourceCode=`<template>
  <div>
    <fu-filter-bar ref="filter" @exec="exec" :result-count="count" size="default">
      <template #tl>
        <el-button>\u5BFC\u51FA\u6570\u636E</el-button>
      </template>
      <template #tr="condition">
        <el-select v-model="selection" placeholder="Select" style="width: 115px">
          <el-option label="ID" value="id"/>
          <el-option label="\u59D3\u540D" value="name"/>
        </el-select>
        <fu-filter-input v-model="quick" placeholder="Please input" @change="change"/>
      </template>
      <template #default>
        <fu-filter-select size="default" label="\u4E8B\u4EF6\u7C7B\u578B" field="type" :options="options" multiple clearable/>
        <fu-filter-date size="default" label="\u64CD\u4F5C\u65E5\u671F" field="date"/>
        <fu-filter-date-time size="default" label="\u64CD\u4F5C\u65F6\u95F4" field="datetime"/>
      </template>
      <template #buttons>
        <fu-table-column-select type="button" :columns="columns" size="default"/>
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
import {ref} from "vue"
import {Search} from '@element-plus/icons-vue'

const options = [{label: "\u9009\u98791", value: 1},
  {label: "\u9009\u98792", value: 2},
  {label: "\u9009\u98793", value: 3},
  {label: "\u9009\u98794", value: 4},
  {label: "\u9009\u98795", value: 5},
  {label: "\u9009\u98796", value: 6},
  {label: "\u9009\u98797", value: 7},
  {label: "\u9009\u98798", value: 8},
  {label: "\u9009\u98799", value: 9},
  {label: "\u9009\u987910", value: 10},
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
const columns = ref([])
const selection = ref("")
const quick = ref("")
const condition = ref({})

function change() {
  exec(condition.value)
}

function exec(c: any) {
  if (quick.value) {
    c.quick = {
      field: selection.value,
      value: quick.value
    }
  }
  condition.value = c
  count.value = Object.keys(condition.value).length * 10
  console.log("\u7B5B\u9009\u6761\u4EF6\uFF1A", condition.value)
}

<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>`,l.__sourceCodeTitle="\u63D2\u69FD\u793A\u4F8B"}const te=K("\u5BFC\u51FA\u6570\u636E"),ne={class:"condition_display"},R=g({__name:"SlotDemo",setup(l){const b=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3},{label:"\u9009\u98794",value:4},{label:"\u9009\u98795",value:5},{label:"\u9009\u98796",value:6},{label:"\u9009\u98797",value:7},{label:"\u9009\u98798",value:8},{label:"\u9009\u98799",value:9},{label:"\u9009\u987910",value:10}],m=[{date:"2016-05-02",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 0\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-01",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"}],i=d(0),a=d([]),o=d(""),t=d(""),c=d({});function s(){_(c.value)}function _(f){t.value&&(f.quick={field:o.value,value:t.value}),c.value=f,i.value=Object.keys(c.value).length*10,console.log("\u7B5B\u9009\u6761\u4EF6\uFF1A",c.value)}return(f,p)=>{const v=u("el-button"),D=u("el-option"),q=u("el-select"),O=u("fu-filter-input"),P=u("fu-filter-select"),L=u("fu-filter-date"),N=u("fu-filter-date-time"),M=u("fu-table-column-select"),U=u("fu-filter-bar"),y=u("el-table-column"),G=u("fu-table");return F(),B(C,null,[n("div",null,[e(U,{ref:"filter",onExec:_,"result-count":i.value,size:"default"},{tl:r(()=>[e(v,null,{default:r(()=>[te]),_:1})]),tr:r(de=>[e(q,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=A=>o.value=A),placeholder:"Select",style:{width:"115px"}},{default:r(()=>[e(D,{label:"ID",value:"id"}),e(D,{label:"\u59D3\u540D",value:"name"})]),_:1},8,["modelValue"]),e(O,{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=A=>t.value=A),placeholder:"Please input",onChange:s},null,8,["modelValue"])]),default:r(()=>[e(P,{size:"default",label:"\u4E8B\u4EF6\u7C7B\u578B",field:"type",options:b,multiple:"",clearable:""}),e(L,{size:"default",label:"\u64CD\u4F5C\u65E5\u671F",field:"date"}),e(N,{size:"default",label:"\u64CD\u4F5C\u65F6\u95F4",field:"datetime"})]),buttons:r(()=>[e(M,{type:"button",columns:a.value,size:"default"},null,8,["columns"])]),_:1},8,["result-count"])]),n("pre",ne,E(c.value),1),e(G,{data:m,columns:a.value},{default:r(()=>[e(y,{type:"selection"}),e(y,{prop:"date",label:"\u65E5\u671F","min-width":"120"}),e(y,{prop:"name",label:"\u59D3\u540D","min-width":"120"}),e(y,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["columns"])],64)}}});typeof z=="function"&&z(R);var ae=x(R,[["__scopeId","data-v-f4acb6e2"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/filter-bar/demo/SlotDemo.vue"]]);const oe=[{name:"FilterBar",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:" - / default / small / large",default:"-"},{prop:"result-count",desc:"\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF",type:"String",enum:"-",default:"0"},{prop:"quick-placeholder",desc:"\u5FEB\u901F\u641C\u7D22\u7684placeholder",type:"String",enum:"-",default:"\u641C\u7D22"},{prop:"components",desc:"\u7B5B\u9009\u7EC4\u4EF6\u6570\u7EC4",type:"Array",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"exec",desc:"\u641C\u7D22\u6761\u4EF6\u53D8\u66F4\u65F6\u89E6\u53D1",value:"\u641C\u7D22\u6761\u4EF6Object"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"tl",desc:"\u4E0A\u90E8\u5DE6\u4FA7\u533A\u57DF\u5185\u5BB9"},{name:"tr",desc:"\u4E0A\u90E8\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9"},{name:"-",desc:"\u7B5B\u9009\u6761\u4EF6\u663E\u793A\u533A\u57DF\u5185\u5BB9"}]}]},{name:"Filter Components",children:[{name:"@FilterSelect Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElSelect",desc:"\u7EE7\u627FElSelect\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDate Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"align",desc:"\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"left / center / right",default:"right"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDatePicker",desc:"\u7EE7\u627FElDatePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDateTime Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"align",desc:"\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"left / center / right",default:"right"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDateTimePicker",desc:"\u7EE7\u627FElDateTimePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]}]}];const j=l=>(w("data-v-b9cfadd8"),l=l(),T(),l),ie=j(()=>n("h1",{class:"component-h1"},"FilterBar \u7B5B\u9009\u6761",-1)),ce=j(()=>n("p",null,"\u641C\u7D22\u6761\uFF0C\u63D0\u4F9B\u5FEB\u901F\u641C\u7D22\uFF0C\u9AD8\u7EA7\u641C\u7D22\uFF0C\u81EA\u5B9A\u4E49\u6309\u94AE",-1)),se=g({__name:"index",setup(l){const b=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u4F7F\u7528FilterBar",component:ee},{title:"\u56DE\u663E\u6761\u4EF6",titleDesc:"\u8BBE\u7F6E\u521D\u59CB\u6761\u4EF6\uFF0C\u641C\u7D22\u6846\u81EA\u52A8\u56DE\u663E",component:le,description:"\u7B5B\u9009\u7EC4\u4EF6\u9700\u8981\u63D0\u4F9Binit\u548CgetCondition\u65B9\u6CD5\uFF0C\u5982\u679C\u5728mounted\u4E2D\u521D\u59CB\u5316\u5FC5\u987B\u4F7F\u7528this.$nextTick"},{title:"\u63D2\u69FD\u793A\u4F8B",titleDesc:"\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u8BBE\u7F6E\u4E0A\u90E8\u5DE6\u4FA7\u5185\u5BB9\u3001\u4E0A\u90E8\u53F3\u4FA7\u5185\u5BB9",component:ae}];return(m,i)=>{const a=u("document-table"),o=u("code-example");return F(),B(C,null,[h(" \u6587\u6863\u8BF4\u660E "),e(a,{data:Q(oe)},null,8,["data"]),h(" \u4E00\u7EA7\u6807\u9898 "),ie,h(" \u4E00\u7EA7\u63CF\u8FF0 "),ce,h(" BaseTable\u5185\u5BB9 "),(F(),B(C,null,W(b,(t,c)=>n("div",{class:"component-block",key:c},[n("h2",null,E(t.title),1),n("p",null,E(t.titleDesc),1),e(o,{description:t.description,component:t.component},null,8,["description","component"])])),64))],64)}}});var fe=x(se,[["__scopeId","data-v-b9cfadd8"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/filter-bar/index.vue"]]);export{fe as default};
