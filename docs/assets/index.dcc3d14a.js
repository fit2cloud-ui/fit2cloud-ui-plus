import{d as r,a as s,o as d,c as p,f as o,b as n,F as _,_ as m,w as i,p as y,h as v,m as x,i as a,u as P,j as D,t as b}from"./index.61be0b2a.js";function F(t){t.__sourceCode=`<template>
  <div class="icon-buttons">
    <fu-icon-button name="EditPen" @click="click"/>
    <fu-icon-button name="EditPen" type="primary"/>
    <fu-icon-button name="EditPen" type="success"/>
    <fu-icon-button name="EditPen" type="warning"/>
    <fu-icon-button name="EditPen" type="danger"/>
    <fu-icon-button name="EditPen" type="info"/>
    <fu-icon-button name="EditPen" color="#5005b9"/>
  </div>
  <div class="icon-buttons">
    <fu-icon-button name="EditPen" disabled @click="click"/>
    <fu-icon-button name="EditPen" disabled @click="click" :size="24"/>
  </div>
  <div class="icon-buttons">
    <fu-icon-button name="Loading" loading disabled/>
  </div>
</template>

<script setup lang="ts">
function click() {
  console.log("click")
}
<\/script>


<style lang="scss" scoped>
.icon-buttons {
  display: flex;

  & + & {
    margin-top: 10px;
  }
}
</style>`,t.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const A={class:"icon-buttons"},I={class:"icon-buttons"},S={class:"icon-buttons"},C=r({__name:"BaseIconButton",setup(t){function u(){console.log("click")}return(f,E)=>{const e=s("fu-icon-button");return d(),p(_,null,[o("div",A,[n(e,{name:"EditPen",onClick:u}),n(e,{name:"EditPen",type:"primary"}),n(e,{name:"EditPen",type:"success"}),n(e,{name:"EditPen",type:"warning"}),n(e,{name:"EditPen",type:"danger"}),n(e,{name:"EditPen",type:"info"}),n(e,{name:"EditPen",color:"#5005b9"})]),o("div",I,[n(e,{name:"EditPen",disabled:"",onClick:u}),n(e,{name:"EditPen",disabled:"",onClick:u,size:24})]),o("div",S,[n(e,{name:"Loading",loading:"",disabled:""})])],64)}}});typeof F=="function"&&F(C);var w=m(C,[["__scopeId","data-v-2cccde7c"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/icon-button/demo/BaseIconButton.vue"]]);function k(t){t.__sourceCode=`<template>
  <div class="icon-buttons">
    <fu-icon-button @click="click">
      <img src="../../../assets/github.png" alt="" style="width: 20px"/>
    </fu-icon-button>
    <fu-icon-button @click="click">
      <el-icon color="#5005b9">
        <EditPen/>
      </el-icon>
    </fu-icon-button>
    <fu-icon-button @click="click" type="primary">
      <el-icon color="#5005b9" :size="20">
        <EditPen/>
      </el-icon>
    </fu-icon-button>
    <fu-icon-button @click="click" type="danger" disabled>
      <el-icon color="#5005b9" :size="24" @click="click">
        <EditPen/>
      </el-icon>
    </fu-icon-button>
  </div>
</template>

<script setup lang="ts">

function click() {
  console.log("click")
}
<\/script>


<style lang="scss" scoped>
.icon-buttons {
  display: flex;

  & + & {
    margin-top: 10px;
  }
}
</style>`,t.__sourceCodeTitle="\u63D2\u69FD\u7528\u6CD5"}const z=t=>(y("data-v-66d7877e"),t=t(),v(),t),$={class:"icon-buttons"},L=z(()=>o("img",{src:x,alt:"",style:{width:"20px"}},null,-1)),g=r({__name:"SlotDemo",setup(t){function u(){console.log("click")}return(f,E)=>{const e=s("fu-icon-button"),l=s("EditPen"),c=s("el-icon");return d(),p("div",$,[n(e,{onClick:u},{default:i(()=>[L]),_:1}),n(e,{onClick:u},{default:i(()=>[n(c,{color:"#5005b9"},{default:i(()=>[n(l)]),_:1})]),_:1}),n(e,{onClick:u,type:"primary"},{default:i(()=>[n(c,{color:"#5005b9",size:20},{default:i(()=>[n(l)]),_:1})]),_:1}),n(e,{onClick:u,type:"danger",disabled:""},{default:i(()=>[n(c,{color:"#5005b9",size:24,onClick:u},{default:i(()=>[n(l)]),_:1})]),_:1})])}}});typeof k=="function"&&k(g);var N=m(g,[["__scopeId","data-v-66d7877e"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/icon-button/demo/SlotDemo.vue"]]);const T=[{name:"IconButton",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"name",desc:"el-icon \u540D\u79F0\uFF0C\u4F8B\u5982\uFF1ASearch",type:"String",enum:"-",default:"-"},{prop:"size",desc:"\u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size\uFF0C\u4F8B\u5982:20\u621620px",type:"Number, String",enum:"-",default:"20"},{prop:"color",desc:"\u56FE\u6807\u989C\u8272",type:"String",enum:"-",default:"inherit"},{prop:"loading",desc:"\u503C\u4E3Atrue\uFF0C\u56FE\u6807\u5C31\u53EF\u4EE5\u5728 2 \u79D2\u5185\u65CB\u8F6C 360 \u5EA6",type:"Boolean",enum:"-",default:"false"},{prop:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"Boolean",enum:"-",default:"false"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"click",desc:"\u70B9\u51FB\u65F6\u89E6\u53D1",value:"MouseEvent"}]}]}];const B=t=>(y("data-v-6ee692c6"),t=t(),v(),t),V=B(()=>o("h1",{class:"component-h1"},"IconButton \u56FE\u6807\u6309\u94AE",-1)),j=B(()=>o("p",null,"\u652F\u6301ElIcon\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807",-1)),M=r({__name:"index",setup(t){const u=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u4E3B\u9898\uFF0C\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272\u3001\u5927\u5C0F",component:w,description:""},{title:"\u63D2\u69FD\u7528\u6CD5",titleDesc:"\u4F7F\u7528Slot\u81EA\u5B9A\u4E49\u56FE\u6807",component:N,description:""}];return(f,E)=>{const e=s("document-table"),l=s("code-example");return d(),p(_,null,[a(" \u6587\u6863\u8BF4\u660E "),n(e,{data:P(T)},null,8,["data"]),a(" \u4E00\u7EA7\u6807\u9898 "),V,a(" \u4E00\u7EA7\u63CF\u8FF0 "),j,a(" BaseTable\u5185\u5BB9 "),(d(),p(_,null,D(u,(c,h)=>o("div",{class:"component-block",key:h},[o("h2",null,b(c.title),1),o("p",null,b(c.titleDesc),1),n(l,{description:c.description,component:c.component},null,8,["description","component"])])),64))],64)}}});var G=m(M,[["__scopeId","data-v-6ee692c6"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/icon-button/index.vue"]]);export{G as default};
