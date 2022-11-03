var U=Object.defineProperty;var x=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(e,t,l)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,v=(e,t)=>{for(var l in t||(t={}))K.call(t,l)&&S(e,l,t[l]);if(x)for(var l of x(t))L.call(t,l)&&S(e,l,t[l]);return e};import{d as k,r as m,o as _,e as f,f as i,a as u,_ as B,b,w as a,g as r,p as y,i as I,j as g,u as M,F as A,k as q,t as $}from"./index.07c1f275.js";function w(e){e.__sourceCode=`<template>
  <div class="speed-dial-demo">
    <div>
      <fu-speed-dial id="left" size="large" direction="left" :items="items" @click="click" />
    </div>

    <div>
      <fu-speed-dial id="top" :items="items" @click="click" type="success" icon="VideoPlay" active-icon="VideoPause" />
    </div>

    <div>
      <fu-speed-dial id="right" size="default" direction="right" type="warning" :items="items" @click="click" />
    </div>

    <div>
      <fu-speed-dial id="bottom" size="small" direction="bottom" type="danger" :items="items" @click="click" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: "Item 1", click: clickItem },
  { title: "Item 2", click: clickItem },
  { title: "Item 3", click: clickItem, icon: "Avatar" },
  { title: "Item 4", click: clickItem },
  { title: "Item 5", click: clickItem },
]

function click(obj: any, e: any) {
  console.log(obj, e)
}
function clickItem(item: any, e: any) {
  console.log(item, e)
}

<\/script>

<style lang="scss" scoped>
.speed-dial-demo {
  display: flex;
  align-items: center;

  >div {
    width: 25%;
  }
}
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const G={class:"speed-dial-demo"},P=k({__name:"BaseSpeedDial",setup(e){const t=[{title:"Item 1",click:s},{title:"Item 2",click:s},{title:"Item 3",click:s,icon:"Avatar"},{title:"Item 4",click:s},{title:"Item 5",click:s}];function l(o,d){console.log(o,d)}function s(o,d){console.log(o,d)}return(o,d)=>{const n=m("fu-speed-dial");return _(),f("div",G,[i("div",null,[u(n,{id:"left",size:"large",direction:"left",items:t,onClick:l})]),i("div",null,[u(n,{id:"top",items:t,onClick:l,type:"success",icon:"VideoPlay","active-icon":"VideoPause"})]),i("div",null,[u(n,{id:"right",size:"default",direction:"right",type:"warning",items:t,onClick:l})]),i("div",null,[u(n,{id:"bottom",size:"small",direction:"bottom",type:"danger",items:t,onClick:l})])])}}});typeof w=="function"&&w(P);var H=B(P,[["__scopeId","data-v-0b456c70"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/speed-dial/demo/BaseSpeedDial.vue"]]);function V(e){e.__sourceCode=`<template>
  <div class="speed-dial-demo">
    <div>
      \u62D6\u62FD:
      <el-radio-group v-model="movable">
        <el-radio :label="true">\u5141\u8BB8</el-radio>
        <el-radio :label="false">\u7981\u6B62</el-radio>
      </el-radio-group>
    </div>
    <div>
      position:
      <el-radio-group v-model="position">
        <el-radio label="absolute">absolute</el-radio>
        <el-radio label="fixed">fixed</el-radio>
      </el-radio-group>
    </div>

    <div class="speed-dial-move">
      <fu-speed-dial :position="position" bottom="calc(50% - 20px)" right="calc(50% - 20px)" :movable="movable"
        :items="items" @click="click" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const items = [
  { title: "Item 1", click: clickItem },
  { title: "Item 2", click: clickItem },
  { title: "Item 3", click: clickItem, icon: "Avatar" },
  { title: "Item 4", click: clickItem },
  { title: "Item 5", click: clickItem },
]
const position = ref("absolute")
const movable = ref(false)

function click(obj: any, e: any) {
  console.log(obj, e)
}
function clickItem(item: any, e: any) {
  console.log(item, e)
}
<\/script>

<style lang="scss" scoped>
.speed-dial-demo {
  width: 100%;

  .speed-dial-move {
    margin-top: 10px;
    border: 1px #7c7c7c dashed;
    position: relative;
    width: 100%;
    height: 100px;
  }
}
</style>`,e.__sourceCodeTitle="\u5B9A\u4F4D\u65B9\u5F0F"}const J={class:"speed-dial-demo"},Q=r(" \u62D6\u62FD: "),W=r("\u5141\u8BB8"),X=r("\u7981\u6B62"),Y=r(" position: "),Z=r("absolute"),ee=r("fixed"),te={class:"speed-dial-move"},T=k({__name:"SpeedDialPosition",setup(e){const t=[{title:"Item 1",click:d},{title:"Item 2",click:d},{title:"Item 3",click:d,icon:"Avatar"},{title:"Item 4",click:d},{title:"Item 5",click:d}],l=b("absolute"),s=b(!1);function o(n,c){console.log(n,c)}function d(n,c){console.log(n,c)}return(n,c)=>{const p=m("el-radio"),F=m("el-radio-group"),E=m("fu-speed-dial");return _(),f("div",J,[i("div",null,[Q,u(F,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=D=>s.value=D)},{default:a(()=>[u(p,{label:!0},{default:a(()=>[W]),_:1}),u(p,{label:!1},{default:a(()=>[X]),_:1})]),_:1},8,["modelValue"])]),i("div",null,[Y,u(F,{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=D=>l.value=D)},{default:a(()=>[u(p,{label:"absolute"},{default:a(()=>[Z]),_:1}),u(p,{label:"fixed"},{default:a(()=>[ee]),_:1})]),_:1},8,["modelValue"])]),i("div",te,[u(E,{position:l.value,bottom:"calc(50% - 20px)",right:"calc(50% - 20px)",movable:s.value,items:t,onClick:o},null,8,["position","movable"])])])}}});typeof V=="function"&&V(T);var ue=B(T,[["__scopeId","data-v-36924eec"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/speed-dial/demo/SpeedDialPosition.vue"]]);function N(e){e.__sourceCode=`<template>
  <div class="speed-dial-demo">
    <div>
      <h4>\u9ED8\u8BA4\u8BBE\u7F6E</h4>
      <fu-speed-dial :items="items" />
    </div>

    <div>
      <h4>item\u70B9\u51FB\u540E\u4E0D\u5173\u95ED</h4>
      <fu-speed-dial direction="left" :items="items" :item-click-close="false" />
    </div>

    <div>
      <h4>\u70B9\u51FB\u7A7A\u767D\u5904\u4E0D\u5173\u95ED</h4>
      <fu-speed-dial :items="items" :outside-close="false" />
    </div>

    <div>
      <h4>
        \u624B\u52A8\u5F00\u5173
        <el-button size="small" class="fab-demo-manual" @click="toggle">
          <span v-if="active">\u5173\u95ED</span>
          <span v-else>\u6253\u5F00</span>
        </el-button>
      </h4>

      <fu-speed-dial :items="items" :manual="true" v-model="active" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const items = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "Item 5" },
]
const active = ref(false)
function toggle() {
  active.value = !active.value;
}
<\/script>

<style lang="scss" scoped>
.speed-dial-demo {
  display: flex;
  align-items: center;

  >div {
    width: 25%;
  }
}
</style>`,e.__sourceCodeTitle="\u5F00\u5173\u65B9\u5F0F"}const C=e=>(y("data-v-103555e7"),e=e(),I(),e),le={class:"speed-dial-demo"},ie=C(()=>i("h4",null,"\u9ED8\u8BA4\u8BBE\u7F6E",-1)),ne=C(()=>i("h4",null,"item\u70B9\u51FB\u540E\u4E0D\u5173\u95ED",-1)),oe=C(()=>i("h4",null,"\u70B9\u51FB\u7A7A\u767D\u5904\u4E0D\u5173\u95ED",-1)),de=r(" \u624B\u52A8\u5F00\u5173 "),ce={key:0},se={key:1},j=k({__name:"SpeedDialTrigger",setup(e){const t=[{title:"Item 1"},{title:"Item 2"},{title:"Item 3"},{title:"Item 4"},{title:"Item 5"}],l=b(!1);function s(){l.value=!l.value}return(o,d)=>{const n=m("fu-speed-dial"),c=m("el-button");return _(),f("div",le,[i("div",null,[ie,u(n,{items:t})]),i("div",null,[ne,u(n,{direction:"left",items:t,"item-click-close":!1})]),i("div",null,[oe,u(n,{items:t,"outside-close":!1})]),i("div",null,[i("h4",null,[de,u(c,{size:"small",class:"fab-demo-manual",onClick:s},{default:a(()=>[l.value?(_(),f("span",ce,"\u5173\u95ED")):(_(),f("span",se,"\u6253\u5F00"))]),_:1})]),u(n,{items:t,manual:!0,modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=p=>l.value=p)},null,8,["modelValue"])])])}}});typeof N=="function"&&N(j);var ae=B(j,[["__scopeId","data-v-103555e7"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/speed-dial/demo/SpeedDialTrigger.vue"]]);function z(e){e.__sourceCode=`<template>
  <div class="speed-dial-demo">
    <div>
      <h4>
        \u9ED8\u8BA4
      </h4>
      <fu-speed-dial>
        <fu-speed-dial-item :index="0" title="No.0" @click="clickItem" />
        <fu-speed-dial-item :index="1" title="No.1" @click="clickItem" />
      </fu-speed-dial>
    </div>

    <div>
      <h4>
        Items\u6570\u7EC4
      </h4>
      <fu-speed-dial :items="items" />
    </div>

    <div>
      <h4>
        Slot
      </h4>
      <fu-speed-dial>
        <fu-speed-dial-item :index="0" title="No.0" @click="clickItem" color="#222" bg-color="#DDD"
          title-bg-color="#F1F1F1" title-color="#555" />
        <fu-speed-dial-item :index="1" title="No.1" @click="clickItem" button-class="custom-button"
          title-class="custom-title" />
      </fu-speed-dial>
    </div>

    <div>
      <h4>
        Item Slot
      </h4>
      <fu-speed-dial ref="speedDialRef">
        <fu-speed-dial-item :index="0">
          <el-button @click="clickItem({ title: 'Item 1', index: 0, custom: true }, $event)">Item 1</el-button>
        </fu-speed-dial-item>

        <fu-speed-dial-item :index="1">
          <el-button @click="clickItem({ title: 'Item 2', index: 1, custom: true }, $event)">Item 2</el-button>
        </fu-speed-dial-item>
      </fu-speed-dial>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const itemStyle = {
  bgColor: "#DDD",
  color: "#222",
  titleBgColor: "#F1F1F1",
  titleColor: "#555",
}
const items = [
  {
    title: "Item 1",
    icon: "Edit",
    click: clickItem,
    ...itemStyle
  },
  { title: "Item 2", click: clickItem, ...itemStyle },
  { title: "Item 3", click: clickItem, ...itemStyle },
  { title: "Item 4", click: clickItem, ...itemStyle },
  { title: "Item 5", click: clickItem, ...itemStyle },
]

const speedDialRef = ref()
function clickItem(item: any, e: any) {
  if (item.custom) {
    speedDialRef.value.close()
  }
  console.log(item, e)
}

<\/script>

<style lang="scss" scoped>
.speed-dial-demo {
  display: flex;
  align-items: center;

  >div {
    width: 25%;
  }


  :deep(.custom-button) {
    color: #222;
    background-color: #DDD;
  }

  :deep(.custom-title) {
    color: #555;
    background-color: #F1F1F1;
  }
}
</style>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u5185\u5BB9"}const h=e=>(y("data-v-4567b5dc"),e=e(),I(),e),pe={class:"speed-dial-demo"},me=h(()=>i("h4",null," \u9ED8\u8BA4 ",-1)),re=h(()=>i("h4",null," Items\u6570\u7EC4 ",-1)),_e=h(()=>i("h4",null," Slot ",-1)),fe=h(()=>i("h4",null," Item Slot ",-1)),ve=r("Item 1"),Fe=r("Item 2"),R=k({__name:"SpeedDialCustom",setup(e){const t={bgColor:"#DDD",color:"#222",titleBgColor:"#F1F1F1",titleColor:"#555"},l=[v({title:"Item 1",icon:"Edit",click:o},t),v({title:"Item 2",click:o},t),v({title:"Item 3",click:o},t),v({title:"Item 4",click:o},t),v({title:"Item 5",click:o},t)],s=b();function o(d,n){d.custom&&s.value.close(),console.log(d,n)}return(d,n)=>{const c=m("fu-speed-dial-item"),p=m("fu-speed-dial"),F=m("el-button");return _(),f("div",pe,[i("div",null,[me,u(p,null,{default:a(()=>[u(c,{index:0,title:"No.0",onClick:o}),u(c,{index:1,title:"No.1",onClick:o})]),_:1})]),i("div",null,[re,u(p,{items:l})]),i("div",null,[_e,u(p,null,{default:a(()=>[u(c,{index:0,title:"No.0",onClick:o,color:"#222","bg-color":"#DDD","title-bg-color":"#F1F1F1","title-color":"#555"}),u(c,{index:1,title:"No.1",onClick:o,"button-class":"custom-button","title-class":"custom-title"})]),_:1})]),i("div",null,[fe,u(p,{ref_key:"speedDialRef",ref:s},{default:a(()=>[u(c,{index:0},{default:a(()=>[u(F,{onClick:n[0]||(n[0]=E=>o({title:"Item 1",index:0,custom:!0},E))},{default:a(()=>[ve]),_:1})]),_:1}),u(c,{index:1},{default:a(()=>[u(F,{onClick:n[1]||(n[1]=E=>o({title:"Item 2",index:1,custom:!0},E))},{default:a(()=>[Fe]),_:1})]),_:1})]),_:1},512)])])}}});typeof z=="function"&&z(R);var Ee=B(R,[["__scopeId","data-v-4567b5dc"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/speed-dial/demo/SpeedDialCustom.vue"]]);const ke=[{name:"SpeedDial",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"type",desc:"\u4E3B\u6309\u94AE\u4E3B\u9898",type:"String",enum:"primary / success / warning / danger / info / default",default:"primary"},{prop:"size",desc:"\u5927\u5C0F",type:"String",enum:"large / default / small",default:"default"},{prop:"id",desc:"SpeedDial ID",type:"String",enum:"-",default:"\u641C\u7D22"},{prop:"direction",desc:"\u5C55\u5F00\u65B9\u5411",type:"String",enum:"top / bottom / left / right",default:"top"},{prop:"icon",desc:"\u4E3B\u6309\u94AE\u56FE\u6807",type:"String",enum:"-",default:"Plus"},{prop:"active-icon",desc:"\u4E3B\u6309\u94AE\u6FC0\u6D3B\u65F6\u56FE\u6807",type:"String",enum:"-",default:"Close"},{prop:"movable",desc:"\u662F\u5426\u53EF\u79FB\u52A8",type:"Boolean",enum:"true / false",default:"false"},{prop:"position",desc:"\u5B9A\u4F4D\u65B9\u5F0F",type:"String",enum:"static / absolute / fixed",default:"static"},{prop:"left(right / top /bottom \u540C\u7406)",desc:"\u5DE6\u4FA7\u4F4D\u7F6E(position\u4E3Aabsolute\u6216fixed\u751F\u6548)",type:"String",enum:"-",default:"-"},{prop:"z-index",desc:"z-index",type:"String / Number",enum:"-",default:"99"},{prop:"item-click-close",desc:"item \u70B9\u51FB\u540E\u662F\u5426\u81EA\u52A8\u5173\u95ED",type:"Boolean",enum:"true / false",default:"true"},{prop:"outside-lose",desc:"\u5916\u90E8\u70B9\u51FB\u662F\u5426\u81EA\u52A8\u5173\u95ED",type:"Boolean",enum:"true / false",default:"true"},{prop:"manual",desc:"\u662F\u5426\u624B\u52A8\u5F00\u5173",type:"Boolean",enum:"true / false",default:"false"},{prop:"local-key",desc:"\u8BBE\u7F6E\u552F\u4E00 local-key \u5C06\u4FDD\u5B58\u6309\u94AE\u4F4D\u7F6E\u5230localStorage",type:"String",enum:"-",default:"-"},{prop:"items",desc:"\u5185\u5BB9\u6570\u7EC4",type:"Array",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"click",desc:"\u4E3B\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1",value:"Object: {id, active}"},{event:"close",desc:"\u5173\u95ED\u65F6\u89E6\u53D1",value:"Object: {id, active}"},{event:"outside-click",desc:"\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1",value:"Object: {id, active}"}]},{name:"@Methods",header:{event:"\u65B9\u6CD5\u540D",desc:"\u8BF4\u660E",value:"\u53C2\u6570"},table:[{event:"close",desc:"\u6267\u884C\u5173\u95ED",value:"-"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"-",desc:"\u5185\u5BB9"}]}]},{name:"SpeedDialItem",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"index",desc:"\u7D22\u5F15\uFF0C\u4ECE0\u5F00\u59CB",type:"Number",enum:"-",default:"-"},{prop:"Slot \u5185\u5BB9\u7684 props",desc:"\u6839\u636ESlot\u7684\u5185\u5BB9\u800C\u5B9A",type:"-",enum:"-",default:"-"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"-",desc:"\u5185\u5BB9"}]}]},{name:"SpeedDialActionButton",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"index",desc:"\u7D22\u5F15\uFF0C\u4ECE0\u5F00\u59CB",type:"Number",enum:"-",default:"-"},{prop:"icon",desc:"\u56FE\u6807",type:"String",enum:"-",default:"Plus"},{prop:"title",desc:"\u6807\u9898",type:"String",enum:"-",default:"-"},{prop:"title-class",desc:"\u6807\u9898\u81EA\u5B9A\u4E49class",type:"String",enum:"-",default:"-"},{prop:"title-bg-color",desc:"\u6807\u9898\u80CC\u666F\u8272",type:"String",enum:"-",default:"-"},{prop:"title-color",desc:"\u6807\u9898\u989C\u8272",type:"String",enum:"-",default:"-"},{prop:"button-class",desc:"\u6309\u94AE\u81EA\u5B9A\u4E49class",type:"String",enum:"-",default:"-"},{prop:"button-bg-color",desc:"\u6309\u94AE\u80CC\u666F\u8272",type:"String",enum:"-",default:"-"},{prop:"button-color",desc:"\u6309\u94AE\u989C\u8272",type:"String",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"click",desc:"\u70B9\u51FB\u65F6\u89E6\u53D1",value:"Object: {index, title}"}]}]}];const O=e=>(y("data-v-6131540c"),e=e(),I(),e),Be=O(()=>i("h1",{class:"component-h1"},"SpeedDial \u5FEB\u901F\u62E8\u53F7",-1)),ge=O(()=>i("p",null,"\u5FEB\u901F\u62E8\u53F7\uFF0C\u652F\u63014\u4E2A\u65B9\u5411\uFF0C\u652F\u6301\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u652F\u6301\u79FB\u52A8\u4F4D\u7F6E\uFF1B\u56FE\u6807\u652F\u6301iconfont\uFF1B",-1)),be=k({__name:"index",setup(e){const t=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u53EF\u4EE5\u8BBE\u7F6E\u65B9\u5411\uFF0C\u5927\u5C0F\uFF0C\u4E3B\u9898\uFF0C\u56FE\u6807",component:H,description:"\u63A7\u5236\u53F0\u67E5\u770Bclick\u4E8B\u4EF6"},{title:"\u5B9A\u4F4D\u65B9\u5F0F",titleDesc:"position \u8BBE\u7F6E absolute / fixed \u53EF\u4EE5\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u53EF\u4EE5\u79FB\u52A8\u4F4D\u7F6E",component:ue,description:"\u8BBE\u7F6ElocalKey\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u79FB\u52A8\u4F4D\u7F6E\u5230localStorage"},{title:"\u5F00\u5173\u65B9\u5F0F",titleDesc:"",component:ae,description:"\u8BBE\u7F6ElocalKey\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u79FB\u52A8\u4F4D\u7F6E\u5230localStorage"},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",titleDesc:"",component:Ee}];return(l,s)=>{const o=m("document-table"),d=m("code-example");return _(),f(A,null,[g(" \u6587\u6863\u8BF4\u660E "),u(o,{data:M(ke)},null,8,["data"]),g(" \u4E00\u7EA7\u6807\u9898 "),Be,g(" \u4E00\u7EA7\u63CF\u8FF0 "),ge,g(" BaseTable\u5185\u5BB9 "),(_(),f(A,null,q(t,(n,c)=>i("div",{class:"component-block",key:c},[i("h2",null,$(n.title),1),i("p",null,$(n.titleDesc),1),u(d,{description:n.description,component:n.component},null,8,["description","component"])])),64))],64)}}});var ye=B(be,[["__scopeId","data-v-6131540c"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/speed-dial/index.vue"]]);export{ye as default};
