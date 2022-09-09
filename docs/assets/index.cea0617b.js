import{_ as r,r as s,o as p,e as d,a as t,w as u,f as n,F as c,g as i,p as E,i as h,d as R,j as m,u as T,k as w,t as C}from"./index.7d1a8808.js";function g(e){e.__sourceCode=`<template>
  <el-divider content-position="left">\u6C34\u5E73\u5206\u5272</el-divider>
  <div class="demo-split">
    <fu-split-pane left="200px">
      <template #left>
        Left
      </template>
      <template #right>
        Right
      </template>
    </fu-split-pane>
  </div>
  <el-divider content-position="left">\u5782\u76F4\u5206\u5272</el-divider>
  <div class="demo-split">
    <fu-split-pane top="40%" direction="vertical">
      <template #top>
        Top
      </template>
      <template #bottom>
        Bottom
      </template>
    </fu-split-pane>
  </div>
</template>

<script setup lang="ts">
<\/script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const x={},N=i("\u6C34\u5E73\u5206\u5272"),I={class:"demo-split"},L=i(" Left "),V=i(" Right "),j=i("\u5782\u76F4\u5206\u5272"),O={class:"demo-split"},P=i(" Top "),q=i(" Bottom ");function G(e,a){const o=s("el-divider"),l=s("fu-split-pane");return p(),d(c,null,[t(o,{"content-position":"left"},{default:u(()=>[N]),_:1}),n("div",I,[t(l,{left:"200px"},{left:u(()=>[L]),right:u(()=>[V]),_:1})]),t(o,{"content-position":"left"},{default:u(()=>[j]),_:1}),n("div",O,[t(l,{top:"40%",direction:"vertical"},{top:u(()=>[P]),bottom:u(()=>[q]),_:1})])],64)}typeof g=="function"&&g(x);var H=r(x,[["render",G],["__scopeId","data-v-249a990e"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/split-pane/demo/BaseSplit.vue"]]);function D(e){e.__sourceCode=`<template>
  <div class="demo-split">
    <fu-split-pane left="200" direction="horizontal">
      <template #left>
        <div class="demo-split-child">
          <fu-split-pane top="50%" direction="vertical">
            <template #top>
              Top
            </template>
            <template #bottom>
              Bottom
            </template>
          </fu-split-pane>
        </div>
      </template>
      <template #right>
        Right
      </template>
    </fu-split-pane>
  </div>
</template>

<script setup lang="ts">
<\/script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-child {
  height: 200px;
}
</style>`,e.__sourceCodeTitle="\u7EBF\u72B6\u5206\u5272"}const A={},J={class:"demo-split"},K={class:"demo-split-child"},M=i(" Top "),Q=i(" Bottom "),U=i(" Right ");function W(e,a){const o=s("fu-split-pane");return p(),d("div",J,[t(o,{left:"200",direction:"horizontal"},{left:u(()=>[n("div",K,[t(o,{top:"50%",direction:"vertical"},{top:u(()=>[M]),bottom:u(()=>[Q]),_:1})])]),right:u(()=>[U]),_:1})])}typeof D=="function"&&D(A);var X=r(A,[["render",W],["__scopeId","data-v-7c59c532"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/split-pane/demo/NestSplit.vue"]]);function b(e){e.__sourceCode=`<template>
  <el-divider content-position="left">\u7EBF\u72B6\u5206\u5272</el-divider>
  <div class="demo-split">
    <fu-split-pane left="200px" resizer-type="line" :resizable="false">
      <template #left>
        Left
      </template>
      <template #right>
        Right
      </template>
    </fu-split-pane>
  </div>
  <el-divider content-position="left">\u5B9A\u4E49\u5206\u5272\u7EBF\u6837\u5F0F</el-divider>
  <div class="demo-split">
    <fu-split-pane left="200px" resizer-type="line" :resizable="false" :resizer-style="{ background: 'none' }">
      <template #left>
        <div class="demo-split-child">
          <fu-split-pane top="50%" direction="vertical" resizer-type="line" :resizer-style="{ background: 'none' }">
            <template #top>
              <div class="pane" style="background: #f9e29a;">
                Top
              </div>
            </template>
            <template #bottom>
              <div class="pane" style="background: #a8dfd3;">
                Bottom
              </div>
            </template>
          </fu-split-pane>
        </div>
      </template>
      <template #right>
        <div class="pane" style="background: #fbbbbb;">
          Right
        </div>
      </template>
    </fu-split-pane>
  </div>
</template>

<script setup lang="ts">

<\/script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;

  .pane {
    height: 100%;
  }
}

.demo-split-child {
  height: 200px;
}
</style>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u5206\u5272\u8282\u70B9"}const z={},v=e=>(E("data-v-482db21d"),e=e(),h(),e),Y=i("\u7EBF\u72B6\u5206\u5272"),Z={class:"demo-split"},ee=i(" Left "),ue=i(" Right "),te=i("\u5B9A\u4E49\u5206\u5272\u7EBF\u6837\u5F0F"),ne={class:"demo-split"},ie={class:"demo-split-child"},oe=v(()=>n("div",{class:"pane",style:{background:"#f9e29a"}}," Top ",-1)),se=v(()=>n("div",{class:"pane",style:{background:"#a8dfd3"}}," Bottom ",-1)),le=v(()=>n("div",{class:"pane",style:{background:"#fbbbbb"}}," Right ",-1));function pe(e,a){const o=s("el-divider"),l=s("fu-split-pane");return p(),d(c,null,[t(o,{"content-position":"left"},{default:u(()=>[Y]),_:1}),n("div",Z,[t(l,{left:"200px","resizer-type":"line",resizable:!1},{left:u(()=>[ee]),right:u(()=>[ue]),_:1})]),t(o,{"content-position":"left"},{default:u(()=>[te]),_:1}),n("div",ne,[t(l,{left:"200px","resizer-type":"line",resizable:!1,"resizer-style":{background:"none"}},{left:u(()=>[n("div",ie,[t(l,{top:"50%",direction:"vertical","resizer-type":"line","resizer-style":{background:"none"}},{top:u(()=>[oe]),bottom:u(()=>[se]),_:1})])]),right:u(()=>[le]),_:1})])],64)}typeof b=="function"&&b(z);var de=r(z,[["render",pe],["__scopeId","data-v-482db21d"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/split-pane/demo/ResizerType.vue"]]);function y(e){e.__sourceCode=`<template>
  <div class="demo-split">
    <fu-split-pane left="200" direction="horizontal" :resizer-style="{ width: '10px' }">
      <template #left>
        <div style="padding-right:5px">
          Left
        </div>
      </template>
      <template #resizer>
        <el-icon :size="10">
          <DCaret />
        </el-icon>
      </template>
      <template #right>
        <div style="padding-left:5px">
          Right
        </div>
      </template>
    </fu-split-pane>
  </div>
  <el-divider></el-divider>
  <div class="demo-split">
    <fu-split-pane top="50%" direction="vertical" :resizer-style="{ height: '10px' }">
      <template #top>
        Top
      </template>
      <template #resizer>
        <el-icon :size="10">
          <DCaret />
        </el-icon>
      </template>
      <template #bottom>
        <div style="padding-top:5px">
          Bottom
        </div>
      </template>
    </fu-split-pane>
  </div>
</template>

<script setup lang="ts">
<\/script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
</style>`,e.__sourceCodeTitle="\u5D4C\u5957\u7528\u6CD5"}const $={},B=e=>(E("data-v-05136f52"),e=e(),h(),e),ae={class:"demo-split"},ce=B(()=>n("div",{style:{"padding-right":"5px"}}," Left ",-1)),re=B(()=>n("div",{style:{"padding-left":"5px"}}," Right ",-1)),_e={class:"demo-split"},Fe=i(" Top "),me=B(()=>n("div",{style:{"padding-top":"5px"}}," Bottom ",-1));function fe(e,a){const o=s("DCaret"),l=s("el-icon"),_=s("fu-split-pane"),f=s("el-divider");return p(),d(c,null,[n("div",ae,[t(_,{left:"200",direction:"horizontal","resizer-style":{width:"10px"}},{left:u(()=>[ce]),resizer:u(()=>[t(l,{size:10},{default:u(()=>[t(o)]),_:1})]),right:u(()=>[re]),_:1})]),t(f),n("div",_e,[t(_,{top:"50%",direction:"vertical","resizer-style":{height:"10px"}},{top:u(()=>[Fe]),resizer:u(()=>[t(l,{size:10},{default:u(()=>[t(o)]),_:1})]),bottom:u(()=>[me]),_:1})])],64)}typeof y=="function"&&y($);var Ee=r($,[["render",fe],["__scopeId","data-v-05136f52"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/split-pane/demo/CustomResizer.vue"]]);const he=[{name:"SplitPane",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"direction",desc:"\u5206\u5272\u65B9\u5F0F",type:"String",enum:"horizontal / vertical",default:"horizontal"},{prop:"left",desc:"\u5F53\u5206\u5272\u65B9\u5F0F\u662F\u6C34\u5E73\u5206\u5272\u65F6\uFF0C\u5DE6\u8FB9\u9762\u677F\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\uFF0C\u6216\u8005\u662F\u5177\u4F53\u7684\u50CF\u7D20\u6570\u503C",type:"Number / String",enum:"-",default:"50%"},{prop:"right",desc:"\u5F53\u5206\u5272\u65B9\u5F0F\u662F\u6C34\u5E73\u5206\u5272\u65F6\uFF0C\u53F3\u8FB9\u9762\u677F\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\uFF0C\u6216\u8005\u662F\u5177\u4F53\u7684\u50CF\u7D20\u6570\u503C\uFF1B\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u5DE6\u53F3\u5BBD\u5EA6\uFF0Cright\u6570\u503C\u5931\u6548",type:"Number / String",enum:"-",default:"50%"},{prop:"top",desc:"\u5F53\u5206\u5272\u65B9\u5F0F\u662F\u5782\u76F4\u5206\u5272\u65F6\uFF0C\u4E0A\u8FB9\u9762\u677F\u7684\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\uFF0C\u6216\u8005\u662F\u5177\u4F53\u7684\u50CF\u7D20\u6570\u503C",type:"Number / String",enum:"-",default:"50%"},{prop:"bottom",desc:"\u5F53\u5206\u5272\u65B9\u5F0F\u662F\u5782\u76F4\u5206\u5272\u65F6\uFF0C\u4E0B\u9762\u8FB9\u9762\u677F\u7684\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\uFF0C\u6216\u8005\u662F\u5177\u4F53\u7684\u50CF\u7D20\u6570\u503C\uFF1B\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u4E0A\u4E0B\u9AD8\u5EA6\uFF0Cbottom\u6570\u503C\u5931\u6548",type:"Number / String",enum:"-",default:"50%"},{prop:"min",desc:"\u5206\u5272\u7EBF\u8DDD\u79BB\u4E24\u7AEF\u7684\u6700\u5C0F\u8DDD\u79BB\uFF0C\u53EF\u4EE5\u662F\u767E\u5206\u6BD4\uFF0C\u6216\u8005\u662F\u5177\u4F53\u7684\u50CF\u7D20\u6570\u503C\uFF0C\u5982\u679C\u521D\u59CB\u5316\u8BBE\u7F6E\u7684\u4E0A\u4E0B\u5DE6\u53F3\u6570\u503C\u5C0F\u4E8E\u8BE5\u6570\u503C\uFF0C\u5219\u9ED8\u8BA4\u663E\u793A\u6700\u5C0F\u6570\u503C",type:"Number / String",enum:"-",default:"10px"},{prop:"resizable",desc:"\u5206\u5272\u7EBF\u662F\u5426\u53EF\u62D6\u52A8",type:"Boolean",enum:"-",default:"true"},{prop:"resizer-type",desc:"\u5206\u5272\u7EBF\u7684\u7C7B\u578B",type:"String",enum:"resizer / line",default:"resizer"},{prop:"resizer-style",desc:"\u5B9A\u4E49\u5206\u5272\u7EBF\u6837\u5F0F",type:"Object",enum:"-",default:"-"},{prop:"resizer-class",desc:"\u5B9A\u4E49\u5206\u5272\u7EBF\u7684className",type:"String",enum:"-",default:"-"},{prop:"resizer-hover-class",desc:"\u5B9A\u4E49\u5206\u5272\u7EBF\u9F20\u6807\u6ED1\u5165\u7684className",type:"String",enum:"-",default:"-"},{prop:"local-key",desc:"\u8BBE\u7F6E\u552F\u4E00 local-key \u5C06\u62D6\u4F4F\u5206\u5272\u7EBF\u7684\u4F4D\u7F6E\u4FDD\u5B58\u5230localStorage\u3002\u4FDD\u5B58\u7684\u662F\u5F53\u524D\u4F4D\u7F6E\u5C5E\u6027\u4EE5\u53CA\u5BF9\u5E94\u6570\u503C\uFF0C\u4FDD\u5B58\u4E4B\u540E\u521D\u59CB\u8BBE\u7F6E\u7684\u503C\u5931\u6548",type:"Object",enum:"\u4F8B\uFF1A{ bottom: 200 }",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"changeSplit",desc:"\u62D6\u62FD\u540E\u5F53\u524D\u4F4D\u7F6E\u7684\u6570\u503C",value:"value"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"left",desc:"\u6C34\u5E73\u5206\u5272\u65B9\u5F0F\u53EF\u7528\uFF0C\u5DE6\u4FA7\u5185\u5BB9"},{name:"right",desc:"\u6C34\u5E73\u5206\u5272\u65B9\u5F0F\u53EF\u7528\uFF0C\u53F3\u4FA7\u5185\u5BB9"},{name:"top",desc:"\u5782\u76F4\u5206\u5272\u65B9\u5F0F\u53EF\u7528\uFF0C\u4E0A\u4FA7\u5185\u5BB9"},{name:"bottom",desc:"\u5782\u76F4\u5206\u5272\u65B9\u5F0F\u53EF\u7528\uFF0C\u4E0B\u4FA7\u5185\u5BB9"},{name:"resizer",desc:"\u81EA\u5B9A\u4E49\u5206\u5272\u62D6\u52A8\u8282\u70B9\u56FE\u6807\uFF0C\u7EBF\u72B6\u5206\u5272\u7EBF\u65E0\u62D6\u52A8\u8282\u70B9\u63D2\u69FD"}]}]}];const k=e=>(E("data-v-ddf4ca5e"),e=e(),h(),e),ve=k(()=>n("h1",{class:"component-h1"},"SplitPane \u5206\u5272\u9762\u677F",-1)),Be=k(()=>n("p",null,"\u53EF\u5C06\u4E00\u7247\u533A\u57DF\uFF0C\u5206\u5272\u4E3A\u53EF\u4EE5\u62D6\u62FD\u8C03\u6574\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u7684\u4E24\u90E8\u5206\u533A\u57DF\u3002",-1)),Ce=R({__name:"index",setup(e){const a=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"",component:H,description:""},{title:"\u5D4C\u5957\u7528\u6CD5",titleDesc:"",component:X},{title:"\u7EBF\u72B6\u5206\u5272",titleDesc:"\u5206\u5272\u7EBF\u53EF\u5B9A\u4E49\u4E3A\u7EBF\u72B6\uFF0C\u4E5F\u53EF\u4EE5\u7981\u6B62\u62D6\u52A8",component:de},{title:"\u81EA\u5B9A\u4E49\u5206\u5272\u8282\u70B9",titleDesc:"\u5206\u5272\u8282\u70B9\u53EF\u66FF\u6362\u56FE\u6807\uFF0C\u5982\u679C\u53D1\u73B0\u5BBD\u5EA6\u4E0D\u5408\u9002\uFF0C\u53EF\u81EA\u884C\u8C03\u6574\u5206\u5272\u7EBF\u5BBD\u5EA6\u6837\u5F0F",component:Ee}];return(o,l)=>{const _=s("document-table"),f=s("code-example");return p(),d(c,null,[m(" \u6587\u6863\u8BF4\u660E "),t(_,{data:T(he)},null,8,["data"]),m(" \u4E00\u7EA7\u6807\u9898 "),ve,m(" \u4E00\u7EA7\u63CF\u8FF0 "),Be,m("\u5185\u5BB9 "),(p(),d(c,null,w(a,(F,S)=>n("div",{class:"component-block",key:S},[n("h2",null,C(F.title),1),n("p",null,C(F.titleDesc),1),t(f,{component:F.component,description:F.description},null,8,["component","description"])])),64))],64)}}});var De=r(Ce,[["__scopeId","data-v-ddf4ca5e"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/split-pane/index.vue"]]);export{De as default};
