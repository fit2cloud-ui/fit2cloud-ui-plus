import{d as h,r as f,a as o,o as B,c as C,b as t,w as i,_ as F,f as w,t as y,e as b,k as E,l as k,F as D,i as g,u as O,j as q,p as G,h as H}from"./index.5f9f7e8f.js";function A(u){u.__sourceCode=`<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" v-model="write" @change="change">
      <el-input v-model="input" @blur="blur" @keydown="keydown" />
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const input = ref("\u5355\u51FB\u586B\u5199")

function change(obj: any) {
  console.log(obj)
}
function read() {
  write.value = false
}
function blur() {
  read()
}
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    read()
  }
}
<\/script>`,u.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const J={style:{"line-height":"40px"}},z=h({__name:"BaseDemo",setup(u){const n=f(!1),s=f("\u5355\u51FB\u586B\u5199");function a(p){console.log(p)}function l(){n.value=!1}function d(){l()}function r(p){p.key==="Enter"&&l()}return(p,e)=>{const v=o("el-input"),m=o("fu-read-write-switch");return B(),C("div",J,[t(m,{data:s.value,modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=_=>n.value=_),onChange:a},{default:i(()=>[t(v,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=_=>s.value=_),onBlur:d,onKeydown:r},null,8,["modelValue"])]),_:1},8,["data","modelValue"])])}}});typeof A=="function"&&A(z);var M=F(z,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/BaseDemo.vue"]]);function V(u){u.__sourceCode=`<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch>
      <!-- \u81EA\u5B9A\u4E49\u8BFB\u5185\u5BB9 v-slot:read -->
      <template #read>
        <div>\u81EA\u5B9A\u4E49\u8BFB\u5185\u5BB9: {{ input }}</div>
      </template>

      <!-- \u81EA\u5B9A\u4E49\u5199\u5185\u5BB9 v-slot:default -->
      <template #default="{read}">
        \u81EA\u5B9A\u4E49\u5199\u5185\u5BB9:
        <el-input v-model="input" @blur="read" style="width: 200px"/>
      </template>
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const input = ref("\u5355\u51FB\u586B\u5199")
<\/script>`,u.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u8BFB\u5199\u5185\u5BB9"}const P={style:{"line-height":"40px"}},Q=b(" \u81EA\u5B9A\u4E49\u5199\u5185\u5BB9: "),R=h({__name:"CustomContentDemo",setup(u){const n=f("\u5355\u51FB\u586B\u5199");return(s,a)=>{const l=o("el-input"),d=o("fu-read-write-switch");return B(),C("div",P,[t(d,null,{read:i(()=>[w("div",null,"\u81EA\u5B9A\u4E49\u8BFB\u5185\u5BB9: "+y(n.value),1)]),default:i(({read:r})=>[Q,t(l,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),onBlur:r,style:{width:"200px"}},null,8,["modelValue","onBlur"])]),_:1})])}}});typeof V=="function"&&V(R);var X=F(R,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/CustomContentDemo.vue"]]);function S(u){u.__sourceCode=`<template>
  <fu-input-rw-switch v-model="input" placeholder="\u5355\u51FB\u586B\u5199" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const input = ref("\u5355\u51FB\u586B\u5199")
<\/script>`,u.__sourceCodeTitle="InputRwSwitch"}const I=h({__name:"InputRwSwitchDemo",setup(u){const n=f("\u5355\u51FB\u586B\u5199");return(s,a)=>{const l=o("fu-input-rw-switch");return B(),E(l,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=d=>n.value=d),placeholder:"\u5355\u51FB\u586B\u5199"},null,8,["modelValue"])}}});typeof S=="function"&&S(I);var Y=F(I,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/InputRwSwitchDemo.vue"]]);function x(u){u.__sourceCode=`<template>
  <h3>
    v-model + \u4E8B\u4EF6 \u63A7\u5236\u72B6\u6001
  </h3>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" v-model="write">
      <el-input v-model="input" @blur="blur" @keydown.native="keydown" />
    </fu-read-write-switch>
  </div>

  <h3>
    slot\u53C2\u6570 + \u4E8B\u4EF6 \u63A7\u5236\u72B6\u6001
  </h3>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="input" #default="{ r }">
      <el-input v-model="input" @blur="r" @keydown.native="keydown2($event, read)" />
    </fu-read-write-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const input = ref("\u5355\u51FB\u586B\u5199")

function read() {
  write.value = false
}
function blur() {
  read()
}

function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    read()
  }
}

function keydown2(e: Event, r: Function) {
  const event = e as KeyboardEvent
  if (event.key === "Enter") {
    r()
  }
}
<\/script>`,u.__sourceCodeTitle="\u8BFB\u72B6\u6001\u63A7\u5236"}const Z=w("h3",null," v-model + \u4E8B\u4EF6 \u63A7\u5236\u72B6\u6001 ",-1),ee={style:{"line-height":"40px"}},ue=w("h3",null," slot\u53C2\u6570 + \u4E8B\u4EF6 \u63A7\u5236\u72B6\u6001 ",-1),te={style:{"line-height":"40px"}},T=h({__name:"ReadSwitchDemo",setup(u){const n=f(!1),s=f("\u5355\u51FB\u586B\u5199");function a(){n.value=!1}function l(){a()}function d(p){p.key==="Enter"&&a()}function r(p,e){p.key==="Enter"&&e()}return(p,e)=>{const v=o("el-input"),m=o("fu-read-write-switch");return B(),C(D,null,[Z,w("div",ee,[t(m,{data:s.value,modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=_=>n.value=_)},{default:i(()=>[t(v,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=_=>s.value=_),onBlur:l,onKeydown:k(d,["native"])},null,8,["modelValue","onKeydown"])]),_:1},8,["data","modelValue"])]),ue,w("div",te,[t(m,{data:s.value},{default:i(({r:_})=>[t(v,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=c=>s.value=c),onBlur:_,onKeydown:e[3]||(e[3]=k(c=>r(c,a),["native"]))},null,8,["modelValue","onBlur"])]),_:1},8,["data"])])],64)}}});typeof x=="function"&&x(T);var ne=F(T,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/ReadSwitchDemo.vue"]]);function $(u){u.__sourceCode=`<template>
  <fu-select-rw-switch v-model="select">
    <template #read>
      <el-tag disable-transitions v-if="select === 'zh-CN'" type="danger">\u4E2D\u6587</el-tag>
      <el-tag disable-transitions v-else>English</el-tag>
    </template>
    <el-option key="zh-CN" label="\u4E2D\u6587" value="zh-CN" />
    <el-option key="en-US" label="English" value="en-US" />
  </fu-select-rw-switch>
</template>

<script setup lang="ts">
import { ref } from "vue"
const select = ref("zh-CN")

<\/script>`,u.__sourceCodeTitle="SelectRwSwitch"}const le=b("\u4E2D\u6587"),ae=b("English"),K=h({__name:"SelectRwSwitchDemo",setup(u){const n=f("zh-CN");return(s,a)=>{const l=o("el-tag"),d=o("el-option"),r=o("fu-select-rw-switch");return B(),E(r,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p)},{read:i(()=>[n.value==="zh-CN"?(B(),E(l,{key:0,"disable-transitions":"",type:"danger"},{default:i(()=>[le]),_:1})):(B(),E(l,{key:1,"disable-transitions":""},{default:i(()=>[ae]),_:1}))]),default:i(()=>[t(d,{key:"zh-CN",label:"\u4E2D\u6587",value:"zh-CN"}),t(d,{key:"en-US",label:"English",value:"en-US"})]),_:1},8,["modelValue"])}}});typeof $=="function"&&$(K);var oe=F(K,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/SelectRwSwitchDemo.vue"]]);function U(u){u.__sourceCode=`<template>
  <fu-table :data="tableData">
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="name" label="\u59D3\u540D" min-width="180" fix></el-table-column>

    <el-table-column prop="enable" label="\u8BED\u8A00(\u53EF\u884C\u5185\u7F16\u8F91)">
      <template #default="{ row }">
        <fu-select-rw-switch v-model="row.language">
          <template #read>
            <el-tag disable-transitions v-if="row.language === 'zh-CN'" type="danger">\u4E2D\u6587</el-tag>
            <el-tag disable-transitions v-else>English</el-tag>
          </template>
          <el-option key="zh-CN" label="\u4E2D\u6587" value="zh-CN" />
          <el-option key="en-US" label="English" value="en-US" />
        </fu-select-rw-switch>
      </template>
    </el-table-column>

    <el-table-column prop="address" label="\u5730\u5740(\u53EF\u884C\u5185\u7F16\u8F91)">
      <template #default="{ row }">
        <fu-input-rw-switch v-model="row.address"></fu-input-rw-switch>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="\u65E5\u671F" min-width="180"></el-table-column>
  </fu-table>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-01',
    name: '\u5F20\u4E09',
    language: "zh-CN",
    address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4'
  }, {
    date: '2016-05-02',
    name: '\u5F20\u4E09',
    language: "en-US",
    address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4'
  }, {
    date: '2016-05-03',
    name: '\u5F20\u4E09',
    language: "zh-CN",
    address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4'
  }, {
    date: '2016-05-04',
    name: '\u5F20\u4E09',
    language: "en-US",
    address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 4\u5BA4'
  }, {
    date: '2016-05-05',
    name: '\u5F20\u4E09',
    language: "zh-CN",
    address: '\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 5\u5BA4'
  }
]

<\/script>`,u.__sourceCodeTitle="\u8868\u683C\u884C\u5185\u7F16\u8F91"}const ie=b("\u4E2D\u6587"),se=b("English"),j=h({__name:"TableInnerEditDemo",setup(u){const n=[{date:"2016-05-01",name:"\u5F20\u4E09",language:"zh-CN",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 1\u5BA4"},{date:"2016-05-02",name:"\u5F20\u4E09",language:"en-US",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 2\u5BA4"},{date:"2016-05-03",name:"\u5F20\u4E09",language:"zh-CN",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 3\u5BA4"},{date:"2016-05-04",name:"\u5F20\u4E09",language:"en-US",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 4\u5BA4"},{date:"2016-05-05",name:"\u5F20\u4E09",language:"zh-CN",address:"\u5317\u4EAC\u671D\u9633\u533A\u8D22\u5BCC\u4E2D\u5FC3 5\u5BA4"}];return(s,a)=>{const l=o("el-table-column"),d=o("el-tag"),r=o("el-option"),p=o("fu-select-rw-switch"),e=o("fu-input-rw-switch"),v=o("fu-table");return B(),E(v,{data:n},{default:i(()=>[t(l,{type:"selection"}),t(l,{prop:"name",label:"\u59D3\u540D","min-width":"180",fix:""}),t(l,{prop:"enable",label:"\u8BED\u8A00(\u53EF\u884C\u5185\u7F16\u8F91)"},{default:i(({row:m})=>[t(p,{modelValue:m.language,"onUpdate:modelValue":_=>m.language=_},{read:i(()=>[m.language==="zh-CN"?(B(),E(d,{key:0,"disable-transitions":"",type:"danger"},{default:i(()=>[ie]),_:1})):(B(),E(d,{key:1,"disable-transitions":""},{default:i(()=>[se]),_:1}))]),default:i(()=>[t(r,{key:"zh-CN",label:"\u4E2D\u6587",value:"zh-CN"}),t(r,{key:"en-US",label:"English",value:"en-US"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),t(l,{prop:"address",label:"\u5730\u5740(\u53EF\u884C\u5185\u7F16\u8F91)"},{default:i(({row:m})=>[t(e,{modelValue:m.address,"onUpdate:modelValue":_=>m.address=_},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(l,{prop:"date",label:"\u65E5\u671F","min-width":"180"})]),_:1})}}});typeof U=="function"&&U(j);var de=F(j,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/TableInnerEditDemo.vue"]]);function N(u){u.__sourceCode=`<template>
  <div style="line-height: 40px;">
    <fu-read-write-switch :data="click" v-model="write">
      <el-input v-model="click" @blur="write = false" />
    </fu-read-write-switch>
  </div>

  <div style="line-height: 40px;">
    <fu-read-write-switch :data="dblclick" v-model="write2" write-trigger="onDblclick">
      <el-input v-model="dblclick" @blur="write2 = false" />
    </fu-read-write-switch>
  </div>

  <div style="line-height: 40px;">
    <fu-read-write-switch :data="manual" v-model="write3" write-trigger="manual">
      <el-input v-model="manual" @blur="write3 = false" />
    </fu-read-write-switch>
    <el-button @click="write3 = true">\u70B9\u51FB\u6309\u94AE\u586B\u5199</el-button>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"
const write = ref(false)
const write2 = ref(false)
const write3 = ref(false)
const click = ref("\u5355\u51FB\u586B\u5199")
const dblclick = ref("\u53CC\u51FB\u586B\u5199")
const manual = ref("\u70B9\u51FB\u65E0\u6CD5\u586B\u5199")
<\/script>`,u.__sourceCodeTitle="\u5199\u72B6\u6001\u63A7\u5236"}const re={style:{"line-height":"40px"}},ce={style:{"line-height":"40px"}},pe={style:{"line-height":"40px"}},me=b("\u70B9\u51FB\u6309\u94AE\u586B\u5199"),W=h({__name:"WriteSwitchDemo",setup(u){const n=f(!1),s=f(!1),a=f(!1),l=f("\u5355\u51FB\u586B\u5199"),d=f("\u53CC\u51FB\u586B\u5199"),r=f("\u70B9\u51FB\u65E0\u6CD5\u586B\u5199");return(p,e)=>{const v=o("el-input"),m=o("fu-read-write-switch"),_=o("el-button");return B(),C(D,null,[w("div",re,[t(m,{data:l.value,modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=c=>n.value=c)},{default:i(()=>[t(v,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=c=>l.value=c),onBlur:e[1]||(e[1]=c=>n.value=!1)},null,8,["modelValue"])]),_:1},8,["data","modelValue"])]),w("div",ce,[t(m,{data:d.value,modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=c=>s.value=c),"write-trigger":"onDblclick"},{default:i(()=>[t(v,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=c=>d.value=c),onBlur:e[4]||(e[4]=c=>s.value=!1)},null,8,["modelValue"])]),_:1},8,["data","modelValue"])]),w("div",pe,[t(m,{data:r.value,modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=c=>a.value=c),"write-trigger":"manual"},{default:i(()=>[t(v,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=c=>r.value=c),onBlur:e[7]||(e[7]=c=>a.value=!1)},null,8,["modelValue"])]),_:1},8,["data","modelValue"]),t(_,{onClick:e[9]||(e[9]=c=>a.value=!0)},{default:i(()=>[me]),_:1})])],64)}}});typeof N=="function"&&N(W);var _e=F(W,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/demo/WriteSwitchDemo.vue"]]);const fe=[{name:"ReadWriteSwitch",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"value / v-model",desc:"\u8BFB\u72B6\u6001\u7ED1\u5B9A\u503C",type:"Boolean",enum:"-",default:"-"},{prop:"data",desc:"\u6570\u636E\u503C\uFF0C\u8BFB\u72B6\u6001\u663E\u793A\u7684\u6570\u636E",type:"String, Number, Boolean, Array, Object",enum:"-",default:"-"},{prop:"write-trigger",desc:"\u89E6\u53D1\u5199\u72B6\u6001\u7684\u65B9\u5F0F, \u4E3Amanual\u65F6\uFF0C\u624B\u52A8\u89E6\u53D1",type:"String",enum:"manual / onClick / onDblclick",default:"onClick"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"change",desc:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",value:"Object: {data, write}\uFF0Cdata\u4E3A\u7ED1\u5B9A\u6570\u636E\uFF0Cwrite\u4E3A\u5199\u72B6\u6001\uFF0Ctrue: \u8F91\u7F16\u5199\u72B6\u6001\uFF0Cfalse: \u8BFB\u72B6\u6001"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"read",desc:"\u8BFB\u72B6\u6001\u5185\u5BB9, \u53C2\u6570\u4E3A { write }, write: \u5207\u6362\u5230\u5199\u72B6\u6001\u7684Function"},{name:"-",desc:"\u5199\u5199\u72B6\u6001\u5185\u5BB9, \u53C2\u6570\u4E3A { read }, read: \u5207\u6362\u5230\u8BFB\u72B6\u6001\u7684Function"}]}]},{name:"InputRwSwitch",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"write-trigger",desc:"\u89E6\u53D1\u5199\u72B6\u6001\u7684\u65B9\u5F0F, \u6CA1\u6709manual",type:"String",enum:"onClick / onDblclick",default:"onClick"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"blur",desc:"\u5199\u72B6\u6001\u4E0B\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",value:"\u8F93\u5165\u503C"}]}]},{name:"SelectRwSwitch",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"write-trigger",desc:"\u89E6\u53D1\u5199\u72B6\u6001\u7684\u65B9\u5F0F, \u6CA1\u6709manual",type:"String",enum:"onClick / onDblclick",default:"-"},{prop:"options",desc:"\u4E0B\u62C9\u6846\u9009\u9879\u6570\u7EC4\uFF0C\u5BF9\u8C61\u683C\u5F0F:{label, value}",type:"Array",enum:"-",default:"-"},{prop:"blurTime",desc:"\u89E6\u53D1blur\u65F6\u95F4(\u5355\u4F4D:ms)\uFF0C\u8D1F\u503C\u4E0D\u89E6\u53D1blur\u4E8B\u4EF6",type:"Number",enum:"-",default:"150"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"blur",desc:"\u5199\u72B6\u6001\u4E0B\uFF0C\u4E0B\u62C9\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",value:"Event"},{event:"change",desc:"\u5199\u72B6\u6001\u4E0B\uFF0C\u4E0B\u62C9\u6846\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1",value:"\u9009\u9879\u503C"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"read",desc:"\u8BFB\u72B6\u6001\u5185\u5BB9"},{name:"-",desc:"\u4E0B\u62C9\u6846\u9009\u9879\u5185\u5BB9"}]}]}];const L=u=>(G("data-v-2738a3f9"),u=u(),H(),u),Be=L(()=>w("h1",{class:"component-h1"},"ReadWriteSwitch \u8BFB\u5199\u5207\u6362",-1)),we=L(()=>w("p",null,"\u8BFB\u72B6\u6001\u4E0E\u5199\u72B6\u6001\u5207\u6362\uFF0C\u8BFB\u72B6\u6001\u9ED8\u8BA4\u663E\u793A\u53EA\u8BFB\u6587\u672C\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8BFB/\u5199\u72B6\u6001\u7684\u5185\u5BB9",-1)),ve=h({__name:"index",setup(u){const n=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u8BFB\u5199\u72B6\u6001\u5207\u6362\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u8BFB\u5199\u5185\u5BB9\u3001\u81EA\u5B9A\u4E49\u8BFB\u5199\u72B6\u6001\u63A7\u5236\uFF0C\u53EF\u7528\u4E8ETable \u8868\u5185\u7F16\u8F91\u7B49",component:M},{title:"\u5199\u72B6\u6001\u63A7\u5236",titleDesc:"\u5355\u51FB\uFF0C\u53CC\u51FB\uFF0C\u624B\u52A8\u89E6\u53D1",component:_e},{title:"\u8BFB\u72B6\u6001\u63A7\u5236",titleDesc:"\u4F7F\u7528v-model\u6216\u8005\u4F7F\u7528slot\u7684\u53C2\u6570\u5207\u6362\u8BFB\u72B6\u6001",component:ne},{title:"\u81EA\u5B9A\u4E49\u8BFB\u5199\u5185\u5BB9",titleDesc:"v-slot:read \u548C v-slot:default \u5206\u522B\u4E3A\u8BFB\u5185\u5BB9\u548C\u5199\u5185\u5BB9",component:X},{title:"InputRwSwitch",titleDesc:"Input\u72B6\u6001\u5207\u6362\u7EC4\u4EF6",component:Y,description:"\u7EE7\u627Fel-input\u7684\u529F\u80FD"},{title:"SelectRwSwitch",titleDesc:"Select\u72B6\u6001\u5207\u6362\u7EC4\u4EF6",component:oe,description:"\u7EE7\u627Fel-select\u7684\u529F\u80FD"},{title:"\u8868\u683C\u884C\u5185\u7F16\u8F91",titleDesc:"\u4F7F\u7528 InputRwSwitch \u548C SelectRwSwitch \u5B9E\u73B0\u884C\u5185\u7F16\u8F91\u529F\u80FD",component:de}];return(s,a)=>{const l=o("document-table"),d=o("code-example");return B(),C(D,null,[g(" \u6587\u6863\u8BF4\u660E "),t(l,{data:O(fe)},null,8,["data"]),g(" \u4E00\u7EA7\u6807\u9898 "),Be,g(" \u4E00\u7EA7\u63CF\u8FF0 "),we,g("\u5185\u5BB9 "),(B(),C(D,null,q(n,(r,p)=>w("div",{class:"component-block",key:p},[w("h2",null,y(r.title),1),w("p",null,y(r.titleDesc),1),t(d,{description:r.description,component:r.component},null,8,["description","component"])])),64))],64)}}});var Fe=F(ve,[["__scopeId","data-v-2738a3f9"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/read-write-switch/index.vue"]]);export{Fe as default};
