import{d as E,r as d,_ as F,a as p,o as m,c as f,f as c,b as i,t as r,w as b,p as C,h as D,e as z,i as h,u as V,F as B,j as L}from"./index.6a5b5f1f.js";const R=[{name:"SearchBar",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"quick-key",desc:"\u5FEB\u901F\u641C\u7D22\u5B57\u6BB5\u540D\u79F0\uFF0C\u5982\u4F55\u5FEB\u901F\u641C\u7D22\u7684\u9ED8\u8BA4\u5B57\u6BB5\u540D\u79F0\u4E0E\u5B9E\u9645\u9700\u6C42\u6709\u51B2\u7A81\uFF0C\u53EF\u4EE5\u4FEE\u6539",type:"String",enum:"-",default:"quick"},{prop:"quick-placeholder",desc:"\u5FEB\u901F\u641C\u7D22placeholder",type:"String",enum:"-",default:"\u641C\u7D22"},{prop:"use-clean-button",desc:"\u662F\u5426\u4F7F\u7528\u6E05\u9664\u6309\u94AE",type:"Boolean",enum:"-",default:"true"},{prop:"use-refresh-button",desc:"\u662F\u5426\u4F7F\u7528\u5237\u65B0\u6309\u94AE",type:"Boolean",enum:"-",default:"false"},{prop:"use-quick-search",desc:"\u662F\u5426\u4F7F\u7528\u5FEB\u901F\u641C\u7D22",type:"Boolean",enum:"-",default:"true"},{prop:"components",desc:"\u9AD8\u7EA7\u641C\u7D22\u7EC4\u4EF6\u6570\u7EC4",type:"Array",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"exec",desc:"\u641C\u7D22\u6761\u4EF6\u53D8\u66F4\u65F6\u89E6\u53D1",value:"\u641C\u7D22\u6761\u4EF6Object"},{event:"close",desc:"\u9AD8\u7EA7\u641C\u7D22\u5F39\u51FA\u6846\u5173\u95ED\u65F6\u89E6\u53D1",value:"-"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"complex",desc:"\u9AD8\u7EA7\u641C\u7D22\u5185\u5BB9"},{name:"-",desc:"\u6309\u94AE\u5185\u5BB9"}]}]},{name:"SearchBarButton",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"tooltip",desc:"\u63D0\u793A",type:"String",enum:"-",default:"-"},{prop:"...ElButton",desc:"\u7EE7\u627FElButton\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"-",desc:"\u6309\u94AE\u5185\u5BB9"}]}]},{name:"QuickSearch",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"placeholder",desc:"placeholder",type:"String",enum:"-",default:"-"},{prop:"use-icon",desc:"\u662F\u5426\u663E\u793A\u641C\u7D22\u56FE\u6807(\u653E\u5927\u955C\u56FE\u6807)",type:"Boolean",enum:"-",default:"true"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"input",desc:"\u5728\u503C\u6539\u53D8\u65F6\u89E6\u53D1",value:"\u8F93\u5165\u503C"},{event:"change",desc:"\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1",value:"\u8F93\u5165\u503C"}]}]},{name:"Complex Components",children:[{name:"@ComplexInput Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElInput",desc:"\u7EE7\u627FElInput\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexSelect Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"options",desc:"\u5019\u9009\u9879",type:"Array",enum:"-",default:"-"},{prop:"...ElSelect",desc:"\u7EE7\u627FElSelect\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDate Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDatePicker",desc:"\u7EE7\u627FElDatePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@ComplexDateTime Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"medium / small / mini",default:"-"},{prop:"field",desc:"\u5B57\u6BB5\u540D",type:"String",enum:"-",default:"-"},{prop:"label",desc:"\u5B57\u6BB5Label",type:"String",enum:"-",default:"-"},{prop:"...ElDateTimePicker",desc:"\u7EE7\u627FElDateTimePicker\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]}]}];function g(e){e.__sourceCode=`<template>
  <div>
    <div>
      <fu-search-bar quick-placeholder="\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22" :components="components" @exec="search"
                     @close="close"/>
    </div>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "BaseSearchbar",
  setup() {
    const components = [
      {field: "name", label: "\u59D3\u540D", component: "FuComplexInput"},
      {
        field: "status",
        label: "\u72B6\u6001",
        component: "FuComplexSelect",
        options: [{label: "\u542F\u7528", value: "Enable"}, {label: "\u7981\u7528", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        }
      },
      {
        field: "groups",
        label: "\u533A\u57DF",
        component: "FuComplexSelect",
        options: [{label: "\u5317\u533A", value: "1"}, {label: "\u5357\u533A", value: "2"}, {label: "\u4E1C\u533A", value: "3"}],
      },
      {
        field: "date",
        label: "\u65E5\u671F",
        component: "FuComplexDate",
      },
      {
        field: "datetime",
        label: "\u65E5\u671F\u65F6\u95F4",
        component: "FuComplexDateTime",
      }
    ]
    const condition = ref({})

    function close() {
      console.log('\u5173\u95ED\u9AD8\u7EA7\u641C\u7D22\u5F39\u51FA\u6846')
    }

    function search(obj: any) {
      condition.value = obj
    }

    return {
      components,
      condition,
      close,
      search
    }
  }
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  background-color: #f5f9ff;
}
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const S=E({name:"BaseSearchbar",setup(){const e=[{field:"name",label:"\u59D3\u540D",component:"FuComplexInput"},{field:"status",label:"\u72B6\u6001",component:"FuComplexSelect",options:[{label:"\u542F\u7528",value:"Enable"},{label:"\u7981\u7528",value:"Disable"}],change:o=>{console.log(o)}},{field:"groups",label:"\u533A\u57DF",component:"FuComplexSelect",options:[{label:"\u5317\u533A",value:"1"},{label:"\u5357\u533A",value:"2"},{label:"\u4E1C\u533A",value:"3"}]},{field:"date",label:"\u65E5\u671F",component:"FuComplexDate"},{field:"datetime",label:"\u65E5\u671F\u65F6\u95F4",component:"FuComplexDateTime"}],u=d({});function a(){console.log("\u5173\u95ED\u9AD8\u7EA7\u641C\u7D22\u5F39\u51FA\u6846")}function s(o){u.value=o}return{components:e,condition:u,close:a,search:s}}}),N={class:"condition_display"};function P(e,u,a,s,o,n){const t=p("fu-search-bar");return m(),f("div",null,[c("div",null,[i(t,{"quick-placeholder":"\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22",components:e.components,onExec:e.search,onClose:e.close},null,8,["components","onExec","onClose"])]),c("pre",N,r(e.condition),1)])}typeof g=="function"&&g(S);var U=F(S,[["render",P],["__scopeId","data-v-1cd3334c"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/demo/BaseSearchbar.vue"]]);function y(e){e.__sourceCode=`<template>
  <div>
    <fu-search-bar quick-placeholder="\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22" :components="components" @exec="search">
      <fu-search-bar-button tooltip="\u4E0B\u8F7D" icon="Download" @click="download"/>
      <fu-search-bar-button tooltip="\u4E0A\u4F20" icon="Upload" @click="upload"/>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "SearchBarButtonDemo",
  setup() {
    const components = [
      {field: "name", label: "\u59D3\u540D", component: "FuComplexInput"},
      {
        field: "status",
        label: "\u72B6\u6001",
        component: "FuComplexSelect",
        options: [{label: "\u542F\u7528", value: "Enable"}, {label: "\u7981\u7528", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        }
      },
      {
        field: "groups",
        label: "\u533A\u57DF",
        component: "FuComplexSelect",
        options: [{label: "\u5317\u533A", value: "1"}, {label: "\u5357\u533A", value: "2"}, {label: "\u4E1C\u533A", value: "3"}],
      },
      {
        field: "date",
        label: "\u65E5\u671F",
        component: "FuComplexDate",
      },
      {
        field: "datetime",
        label: "\u65E5\u671F\u65F6\u95F4",
        component: "FuComplexDateTime",
      }
    ]
    const condition = ref({})

    function download(e: Event) {
      console.log("\u4E0B\u8F7D click", e)
    }

    function upload(e: Event) {
      console.log("\u4E0A\u4F20 click", e)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      components,
      condition,
      download,
      upload,
      search
    }
  }
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u6309\u94AE"}const $=E({name:"SearchBarButtonDemo",setup(){const e=[{field:"name",label:"\u59D3\u540D",component:"FuComplexInput"},{field:"status",label:"\u72B6\u6001",component:"FuComplexSelect",options:[{label:"\u542F\u7528",value:"Enable"},{label:"\u7981\u7528",value:"Disable"}],change:n=>{console.log(n)}},{field:"groups",label:"\u533A\u57DF",component:"FuComplexSelect",options:[{label:"\u5317\u533A",value:"1"},{label:"\u5357\u533A",value:"2"},{label:"\u4E1C\u533A",value:"3"}]},{field:"date",label:"\u65E5\u671F",component:"FuComplexDate"},{field:"datetime",label:"\u65E5\u671F\u65F6\u95F4",component:"FuComplexDateTime"}],u=d({});function a(n){console.log("\u4E0B\u8F7D click",n)}function s(n){console.log("\u4E0A\u4F20 click",n)}function o(n){console.log(n),u.value=n}return{components:e,condition:u,download:a,upload:s,search:o}}}),O={class:"condition_display"};function G(e,u,a,s,o,n){const t=p("fu-search-bar-button"),l=p("fu-search-bar");return m(),f("div",null,[i(l,{"quick-placeholder":"\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22",components:e.components,onExec:e.search},{default:b(()=>[i(t,{tooltip:"\u4E0B\u8F7D",icon:"Download",onClick:e.download},null,8,["onClick"]),i(t,{tooltip:"\u4E0A\u4F20",icon:"Upload",onClick:e.upload},null,8,["onClick"])]),_:1},8,["components","onExec"]),c("pre",O,r(e.condition),1)])}typeof y=="function"&&y($);var H=F($,[["render",G],["__scopeId","data-v-44eaa312"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/demo/SearchBarButtonDemo.vue"]]);function x(e){e.__sourceCode=`<template>
  <div>
    <h4>
      1\u3001\u5FEB\u901F\u641C\u7D22\u7EC4\u4EF6 FuQuickSearch
    </h4>
    <fu-quick-search placeholder="\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22" v-model="quick" @change="change" style="width: 200px"/>
    <pre class="condition_display">{{ quick }}</pre>

    <h4>
      2\u3001\u7981\u7528\u9AD8\u7EA7\u641C\u7D22
    </h4>
    <fu-search-bar quick-placeholder="\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22" @exec="search" style="width: 200px"/>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "QuickSearchDemo",
  components: {},

  setup() {
    const quick = ref("")
    const condition = ref({})

    function change(value: string) {
      console.log(value)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      condition,
      quick,
      change,
      search
    }
  }
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>`,e.__sourceCodeTitle="\u5FEB\u901F\u641C\u7D22"}const w=E({name:"QuickSearchDemo",components:{},setup(){const e=d(""),u=d({});function a(o){console.log(o)}function s(o){console.log(o),u.value=o}return{condition:u,quick:e,change:a,search:s}}}),q=e=>(C("data-v-4bf424ac"),e=e(),D(),e),J=q(()=>c("h4",null," 1\u3001\u5FEB\u901F\u641C\u7D22\u7EC4\u4EF6 FuQuickSearch ",-1)),K={class:"condition_display"},M=q(()=>c("h4",null," 2\u3001\u7981\u7528\u9AD8\u7EA7\u641C\u7D22 ",-1)),W={class:"condition_display"};function X(e,u,a,s,o,n){const t=p("fu-quick-search"),l=p("fu-search-bar");return m(),f("div",null,[J,i(t,{placeholder:"\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22",modelValue:e.quick,"onUpdate:modelValue":u[0]||(u[0]=_=>e.quick=_),onChange:e.change,style:{width:"200px"}},null,8,["modelValue","onChange"]),c("pre",K,r(e.quick),1),M,i(l,{"quick-placeholder":"\u6309 \u59D3\u540D/\u90AE\u7BB1 \u641C\u7D22",onExec:e.search,style:{width:"200px"}},null,8,["onExec"]),c("pre",W,r(e.condition),1)])}typeof x=="function"&&x(w);var Y=F(w,[["render",X],["__scopeId","data-v-4bf424ac"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/demo/QuickSearchDemo.vue"]]);function A(e){e.__sourceCode=`<template>
  <div>
    <h4>
      1\u3001\u4F7F\u7528v-slot:complex
    </h4>
    <fu-search-bar :use-quick-search="false" @exec="search">
      <template #complex>
        <fu-complex-input field="name" label="\u59D3\u540D"/>
        <fu-complex-select field="status" label="\u72B6\u6001" :options="options" @change="change"/>
        <fu-complex-date-time field="create_time" label="\u521B\u5EFA\u65F6\u95F4"/>
      </template>
    </fu-search-bar>
    <pre class="condition_display">{{ condition }}</pre>

    <h4>
      2\u3001\u4F7F\u7528components\u6570\u7EC4
    </h4>
    <fu-search-bar :use-quick-search="false" :components="components" @exec="search2"/>
    <pre class="condition_display">{{ condition2 }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ComplexSearchDemo",
  components: {},

  setup() {
    const options = [
      {label: "\u542F\u7528", value: "Enable"},
      {label: "\u7981\u7528", value: "Disable"},
    ]
    const components = [
      {field: "name", label: "\u59D3\u540D", component: "FuComplexInput", clearable: true},
      {
        field: "status",
        label: "\u72B6\u6001",
        component: "FuComplexSelect",
        options: [{label: "\u542F\u7528", value: "Enable"}, {label: "\u7981\u7528", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        },
        filterable: true
      },
      {
        field: "date",
        label: "\u65E5\u671F",
        component: "FuComplexDate",
      },
    ]
    const condition = ref({})
    const condition2 = ref({})

    function change(value: string) {
      console.log(value)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    function search2(obj: any) {
      console.log(obj)
      condition2.value = obj
    }

    return {
      options,
      components,
      condition,
      condition2,
      change,
      search,
      search2
    }
  }
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #f5f9ff;
}
</style>`,e.__sourceCodeTitle="\u9AD8\u7EA7\u641C\u7D22"}const I=E({name:"ComplexSearchDemo",components:{},setup(){const e=[{label:"\u542F\u7528",value:"Enable"},{label:"\u7981\u7528",value:"Disable"}],u=[{field:"name",label:"\u59D3\u540D",component:"FuComplexInput",clearable:!0},{field:"status",label:"\u72B6\u6001",component:"FuComplexSelect",options:[{label:"\u542F\u7528",value:"Enable"},{label:"\u7981\u7528",value:"Disable"}],change:l=>{console.log(l)},filterable:!0},{field:"date",label:"\u65E5\u671F",component:"FuComplexDate"}],a=d({}),s=d({});function o(l){console.log(l)}function n(l){console.log(l),a.value=l}function t(l){console.log(l),s.value=l}return{options:e,components:u,condition:a,condition2:s,change:o,search:n,search2:t}}}),T=e=>(C("data-v-a076c6a6"),e=e(),D(),e),Z=T(()=>c("h4",null," 1\u3001\u4F7F\u7528v-slot:complex ",-1)),ee={class:"condition_display"},ne=T(()=>c("h4",null," 2\u3001\u4F7F\u7528components\u6570\u7EC4 ",-1)),ue={class:"condition_display"};function oe(e,u,a,s,o,n){const t=p("fu-complex-input"),l=p("fu-complex-select"),_=p("fu-complex-date-time"),v=p("fu-search-bar");return m(),f("div",null,[Z,i(v,{"use-quick-search":!1,onExec:e.search},{complex:b(()=>[i(t,{field:"name",label:"\u59D3\u540D"}),i(l,{field:"status",label:"\u72B6\u6001",options:e.options,onChange:e.change},null,8,["options","onChange"]),i(_,{field:"create_time",label:"\u521B\u5EFA\u65F6\u95F4"})]),_:1},8,["onExec"]),c("pre",ee,r(e.condition),1),ne,i(v,{"use-quick-search":!1,components:e.components,onExec:e.search2},null,8,["components","onExec"]),c("pre",ue,r(e.condition2),1)])}typeof A=="function"&&A(I);var te=F(I,[["render",oe],["__scopeId","data-v-a076c6a6"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/demo/ComplexSearchDemo.vue"]]);function k(e){e.__sourceCode=`<template>
  <div>
    <el-button @click="init">\u8BBE\u7F6E\u6761\u4EF6</el-button>
    <fu-search-bar :components="components" @exec="search" ref="searchRef"/>
    <pre class="condition_display">{{ condition }}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "EchoConditionsDemo",
  setup() {
    const components = [
      {field: "name", label: "\u59D3\u540D", component: "FuComplexInput"},
      {
        field: "status",
        label: "\u72B6\u6001",
        component: "FuComplexSelect",
        options: [{label: "\u542F\u7528", value: "Enable"}, {label: "\u7981\u7528", value: "Disable"}],
        change: (val: any) => {
          console.log(val)
        }
      },
      {
        field: "groups",
        label: "\u533A\u57DF",
        component: "FuComplexSelect",
        options: [{label: "\u5317\u533A", value: "1"}, {label: "\u5357\u533A", value: "2"}, {label: "\u4E1C\u533A", value: "3"}],
      },
      {
        field: "date",
        label: "\u65E5\u671F",
        component: "FuComplexDate",
      },
      {
        field: "datetime",
        label: "\u65E5\u671F\u65F6\u95F4",
        component: "FuComplexDateTime",
      }
    ]

    const condition = ref({})

    const searchRef: any = ref(null)

    function init() {
      let conditions = {
        quick: {
          value: "\u5FEB\u901F\u67E5\u8BE2\u503C"
        },
        name: {
          operator: "eq",
          value: "\u5F20\u4E09"
        },
        status: {
          operator: "ne",
          value: "Enable"
        }
      }
      searchRef.value?.setConditions(conditions)
    }

    function search(obj: any) {
      console.log(obj)
      condition.value = obj
    }

    return {
      components,
      condition,
      searchRef,
      init,
      search
    }
  }
})
<\/script>

<style lang="scss" scoped>
.condition_display {
  width: 100%;
  overflow-y: auto;
  min-height: 16px;
  background-color: #F5F9FF;
}
</style>`,e.__sourceCodeTitle="\u56DE\u663E\u6761\u4EF6"}const j=E({name:"EchoConditionsDemo",setup(){const e=[{field:"name",label:"\u59D3\u540D",component:"FuComplexInput"},{field:"status",label:"\u72B6\u6001",component:"FuComplexSelect",options:[{label:"\u542F\u7528",value:"Enable"},{label:"\u7981\u7528",value:"Disable"}],change:n=>{console.log(n)}},{field:"groups",label:"\u533A\u57DF",component:"FuComplexSelect",options:[{label:"\u5317\u533A",value:"1"},{label:"\u5357\u533A",value:"2"},{label:"\u4E1C\u533A",value:"3"}]},{field:"date",label:"\u65E5\u671F",component:"FuComplexDate"},{field:"datetime",label:"\u65E5\u671F\u65F6\u95F4",component:"FuComplexDateTime"}],u=d({}),a=d(null);function s(){var t;let n={quick:{value:"\u5FEB\u901F\u67E5\u8BE2\u503C"},name:{operator:"eq",value:"\u5F20\u4E09"},status:{operator:"ne",value:"Enable"}};(t=a.value)==null||t.setConditions(n)}function o(n){console.log(n),u.value=n}return{components:e,condition:u,searchRef:a,init:s,search:o}}}),le=z("\u8BBE\u7F6E\u6761\u4EF6"),ae={class:"condition_display"};function ce(e,u,a,s,o,n){const t=p("el-button"),l=p("fu-search-bar");return m(),f("div",null,[i(t,{onClick:e.init},{default:b(()=>[le]),_:1},8,["onClick"]),i(l,{components:e.components,onExec:e.search,ref:"searchRef"},null,8,["components","onExec"]),c("pre",ae,r(e.condition),1)])}typeof k=="function"&&k(j);var se=F(j,[["render",ce],["__scopeId","data-v-15c45cfe"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/demo/EchoConditionsDemo.vue"]]);const Q=e=>(C("data-v-534fa178"),e=e(),D(),e),ie=Q(()=>c("h1",{class:"component-h1"},"SearchBar \u641C\u7D22\u6761",-1)),pe=Q(()=>c("p",null,"\u641C\u7D22\u6761\uFF0C\u63D0\u4F9B\u5FEB\u901F\u641C\u7D22\uFF0C\u9AD8\u7EA7\u641C\u7D22\uFF0C\u81EA\u5B9A\u4E49\u6309\u94AE",-1)),re=E({__name:"index",setup(e){const u=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"Searchbar \u57FA\u7840\u7528\u6CD5",component:U},{title:"\u81EA\u5B9A\u4E49\u6309\u94AE",titleDesc:"\u53EF\u4EE5\u7981\u7528\u6E05\u9664\u548C\u5237\u65B0\u6309\u94AE\uFF0C\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6309\u94AE",component:H,description:""},{title:"\u5FEB\u901F\u641C\u7D22",titleDesc:"\u4E24\u79CD\u65B9\u5F0F: 1\u3001\u76F4\u63A5\u4F7F\u7528\u5FEB\u901F\u641C\u7D22\u7EC4\u4EF6\u30022\u3001\u7981\u7528\u9AD8\u7EA7\u641C\u7D22(\u4E0D\u8BBE\u7F6E\u9AD8\u7EA7\u641C\u7D22\u7EC4\u4EF6)",component:Y,description:"\u63A7\u5236\u53F0\u663E\u793Achange\u4E8B\u4EF6\u8F93\u51FA"},{title:"\u9AD8\u7EA7\u641C\u7D22",titleDesc:"\u4E24\u79CD\u65B9\u5F0F\u8BBE\u7F6E\u9AD8\u7EA7\u641C\u7D22\u7EC4\u4EF6: 1\u3001\u4F7F\u7528v-slot:complex\u30022\u3001\u8BBE\u7F6Ecomponents\u7EC4\u4EF6\u6570\u7EC4",component:te,description:"\u63A7\u5236\u53F0\u663E\u793A\u4E8B\u4EF6\u8F93\u51FA"},{title:"\u56DE\u663E\u6761\u4EF6",titleDesc:"\u8BBE\u7F6E\u521D\u59CB\u6761\u4EF6\uFF0C\u641C\u7D22\u6846\u81EA\u52A8\u56DE\u663E",component:se,description:"\u641C\u7D22\u7EC4\u4EF6\u9700\u8981\u63D0\u4F9Binit\u548CgetCondition\u65B9\u6CD5"}];return(a,s)=>{const o=p("document-table"),n=p("code-example");return m(),f(B,null,[h(" \u6587\u6863\u8BF4\u660E "),i(o,{data:V(R)},null,8,["data"]),h(" \u4E00\u7EA7\u6807\u9898 "),ie,h(" \u4E00\u7EA7\u63CF\u8FF0 "),pe,h(" BaseTable\u5185\u5BB9 "),(m(),f(B,null,L(u,(t,l)=>c("div",{class:"component-block",key:l},[c("h2",null,r(t.title),1),c("p",null,r(t.titleDesc),1),i(n,{description:t.description,component:t.component},null,8,["description","component"])])),64))],64)}}});var me=F(re,[["__scopeId","data-v-534fa178"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/search-bar/index.vue"]]);export{me as default};
