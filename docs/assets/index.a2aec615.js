import{d as y,b as F,r as p,o as s,c as _,w as A,e as E,k as h,g as S,t as B,u as D,F as f,_ as g,j as m,a as v,f as c,p as k,i as L}from"./index.7d1a8808.js";function T(a){a.__sourceCode=`<template>
  <fu-tabs v-model="editableTabsValue" addable addType="dropdown" :dropdownMenus="menus" @command="handleCommand"
    @tab-remove="removeTab">
    <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name" closable>
      {{ item.content }}
    </el-tab-pane>
  </fu-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue"
const menus = [
  {
    command: "debug",
    label: "\u5FEB\u6377\u8C03\u8BD5",
  },
  {
    command: "ADD",
    label: "\u521B\u5EFA\u63A5\u53E3",
  },
  {
    command: "CLOSE_ALL",
    label: "\u5173\u95ED\u6240\u6709\u6807\u7B7E",
  },
]
const editableTabsValue = ref("1")

const editableTabs = ref([
  {
    name: "1",
    title: "Tab 1",
    content: "Tab 1 content",
  },
]) as any

function handleCommand(name: string, obj: any) {
  if (obj.command === "CLOSE_ALL") {
    editableTabs.value = [];
    editableTabsValue.value = "";
  } else {
    editableTabs.value.push({
      name: name,
      title: obj.label,
      content: \`\${obj.label} content\`,
      closable: true,
    });
    editableTabsValue.value = name;
  }
}
function removeTab(targetName: string) {
  let tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab: any, index: number) => {
      if (tab.name === targetName) {
        let nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab: any) => tab.name !== targetName);
}

<\/script>
<style lang="scss" scoped>
</style>`,a.__sourceCodeTitle="\u52A8\u6001\u589E\u51CF\u6807\u7B7E"}const x=y({__name:"AddCloseTab",setup(a){const r=[{command:"debug",label:"\u5FEB\u6377\u8C03\u8BD5"},{command:"ADD",label:"\u521B\u5EFA\u63A5\u53E3"},{command:"CLOSE_ALL",label:"\u5173\u95ED\u6240\u6709\u6807\u7B7E"}],t=F("1"),o=F([{name:"1",title:"Tab 1",content:"Tab 1 content"}]);function b(e,u){u.command==="CLOSE_ALL"?(o.value=[],t.value=""):(o.value.push({name:e,title:u.label,content:`${u.label} content`,closable:!0}),t.value=e)}function i(e){let u=o.value,l=t.value;l===e&&u.forEach((d,n)=>{if(d.name===e){let C=u[n+1]||u[n-1];C&&(l=C.name)}}),t.value=l,o.value=u.filter(d=>d.name!==e)}return(e,u)=>{const l=p("el-tab-pane"),d=p("fu-tabs");return s(),_(d,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=n=>t.value=n),addable:"",addType:"dropdown",dropdownMenus:r,onCommand:b,onTabRemove:i},{default:A(()=>[(s(!0),E(f,null,h(D(o),n=>(s(),_(l,{key:n.name,label:n.title,name:n.name,closable:""},{default:A(()=>[S(B(n.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});typeof T=="function"&&T(x);var V=g(x,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/tabs/demo/AddCloseTab.vue"]]);const N=[{name:"Tabs",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"addable",desc:"\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0\uFF0C\u540C\u65F6\u589E\u52A0\u6309\u94AE\u7D27\u8D34\u6807\u7B7E\uFF0C\u539F\u6709ElTabs\u4E2Deditable\u548Caddable\u5931\u6548",type:"Boolean",enum:"-",default:"false"},{prop:"addType",desc:"\u589E\u52A0\u6309\u94AE\u7C7B\u578B\uFF0C\u6309\u94AE\u6216\u8005\u4E0B\u62C9\u7C7B\u578B",type:"String",enum:"default / dropdown",default:"default"},{prop:"dropdownMenus",desc:"\u5B9A\u4E49\u4E0B\u62C9\u5217\u8868\u6570\u7EC4\uFF0C\u53EA\u6709addType\u4E3Adropdown\u7C7B\u578B\u65F6\u5B9A\u4E49\uFF0C\u6570\u7EC4\u5BF9\u8C61\u7684\u53C2\u6570\u8BF7\u770BTabs @menus",type:"Array",enum:"-",default:"[]"},{prop:"addTrigger",desc:"addType\u4E3Adropdown\u7C7B\u578B\uFF0C\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A",type:"String",enum:"hover / click",default:"hover"},{prop:"addIcon",desc:"\u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE\u7684icon",type:"String",enum:"-",default:"Plus"},{prop:"addButtonLabel",desc:"\u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE\u7684label\u6587\u5B57",type:"String",enum:"-",default:"-"},{prop:"...ElTabs",desc:"\u7EE7\u627FElTabs\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@menus",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"command",desc:"\u6307\u4EE4",type:"String/Number/Object",enum:"-",default:"-"},{prop:"label",desc:"\u540D\u79F0",type:"String",enum:"-",default:"-"},{prop:"icon",desc:"\u56FE\u6807",type:"String",enum:"-",default:"-"},{prop:"disabled",desc:"\u7981\u7528",type:"Boolean",enum:"true / false",default:"-"},{prop:"divided",desc:"\u4E0E\u4E0A\u4E00\u4E2A\u7684\u5206\u5272\u7EBF",type:"Boolean",enum:"true / false",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"command",desc:"\u70B9\u51FB\u65B0\u589E\u7684\u6309\u94AE\u6216\u8005\u4E0B\u62C9\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03",value:"(name, dropdownObj)\uFF1Bname\uFF1A\u65B0\u589E\u6807\u7B7E\u7684\u968F\u673A\u552F\u4E00name\uFF0C\u9009\u9879\u5361\u7684\u6807\u793A\u7B26\uFF1BdropdownObj\uFF1A\u5982\u679C\u662Fdropdown\u7C7B\u578B\u4F1A\u8FD4\u56DE\u6240\u9009\u62E9\u7684\u83DC\u5355\u5168\u90E8\u5BF9\u8C61\u4F9B\u65B0\u589E\u6807\u7B7E\u91CC\u663E\u793A\u4F7F\u7528\uFF0C\u5982\u679C\u662F\u9ED8\u8BA4\u7C7B\u578B\u5219\u8FD4\u56DEnull\u3002"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"add",desc:"\u81EA\u5B9A\u4E49\u65B0\u589E\u6309\u94AE"},{name:"dropdownButton",desc:"\u5982\u679C\u662Fdropdown\u7C7B\u578B\u53EF\u81EA\u5B9A\u4E49\u6309\u94AE"}]}]}];const w=a=>(k("data-v-32f056d8"),a=a(),L(),a),O=w(()=>c("h1",{class:"component-h1"},"Tabs \u6807\u7B7E\u9875",-1)),j=w(()=>c("p",null,"\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1)),I=y({__name:"index",setup(a){const r=[{title:"\u52A8\u6001\u589E\u51CF\u6807\u7B7E",titleDesc:"\u589E\u51CF\u6807\u7B7E\u9875",component:V,description:""}];return(t,o)=>{const b=p("document-table"),i=p("code-example");return s(),E(f,null,[m(" \u6587\u6863\u8BF4\u660E "),v(b,{data:D(N)},null,8,["data"]),m(" \u4E00\u7EA7\u6807\u9898 "),O,m(" \u4E00\u7EA7\u63CF\u8FF0 "),j,m("\u5185\u5BB9 "),(s(),E(f,null,h(r,(e,u)=>c("div",{class:"component-block",key:u},[c("h2",null,B(e.title),1),c("p",null,B(e.titleDesc),1),v(i,{component:e.component,description:e.description},null,8,["component","description"])])),64))],64)}}});var $=g(I,[["__scopeId","data-v-32f056d8"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/tabs/index.vue"]]);export{$ as default};
