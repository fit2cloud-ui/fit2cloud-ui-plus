import{d as y,r as f,a as p,o as s,k as _,w as A,c as E,j as D,e as S,t as B,u as h,F as C,_ as g,i as m,b as v,f as c,p as L,h as V}from"./index.5f9f7e8f.js";function T(n){n.__sourceCode=`<template>
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

<\/script>`,n.__sourceCodeTitle="\u52A8\u6001\u589E\u51CF\u6807\u7B7E"}const x=y({__name:"AddCloseTab",setup(n){const r=[{command:"debug",label:"\u5FEB\u6377\u8C03\u8BD5"},{command:"ADD",label:"\u521B\u5EFA\u63A5\u53E3"},{command:"CLOSE_ALL",label:"\u5173\u95ED\u6240\u6709\u6807\u7B7E"}],t=f("1"),l=f([{name:"1",title:"Tab 1",content:"Tab 1 content"}]);function b(e,u){u.command==="CLOSE_ALL"?(l.value=[],t.value=""):(l.value.push({name:e,title:u.label,content:`${u.label} content`,closable:!0}),t.value=e)}function i(e){let u=l.value,o=t.value;o===e&&u.forEach((d,a)=>{if(d.name===e){let F=u[a+1]||u[a-1];F&&(o=F.name)}}),t.value=o,l.value=u.filter(d=>d.name!==e)}return(e,u)=>{const o=p("el-tab-pane"),d=p("fu-tabs");return s(),_(d,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=a=>t.value=a),addable:"",addType:"dropdown",dropdownMenus:r,onCommand:b,onTabRemove:i},{default:A(()=>[(s(!0),E(C,null,D(h(l),a=>(s(),_(o,{key:a.name,label:a.title,name:a.name,closable:""},{default:A(()=>[S(B(a.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});typeof T=="function"&&T(x);var k=g(x,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/tabs/demo/AddCloseTab.vue"]]);const N=[{name:"Tabs",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"addable",desc:"\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0\uFF0C\u540C\u65F6\u589E\u52A0\u6309\u94AE\u7D27\u8D34\u6807\u7B7E\uFF0C\u539F\u6709ElTabs\u4E2Deditable\u548Caddable\u5931\u6548",type:"Boolean",enum:"-",default:"false"},{prop:"addType",desc:"\u589E\u52A0\u6309\u94AE\u7C7B\u578B\uFF0C\u6309\u94AE\u6216\u8005\u4E0B\u62C9\u7C7B\u578B",type:"String",enum:"default / dropdown",default:"default"},{prop:"dropdownMenus",desc:"\u5B9A\u4E49\u4E0B\u62C9\u5217\u8868\u6570\u7EC4\uFF0C\u53EA\u6709addType\u4E3Adropdown\u7C7B\u578B\u65F6\u5B9A\u4E49\uFF0C\u6570\u7EC4\u5BF9\u8C61\u7684\u53C2\u6570\u8BF7\u770BTabs @menus",type:"Array",enum:"-",default:"[]"},{prop:"addTrigger",desc:"addType\u4E3Adropdown\u7C7B\u578B\uFF0C\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A",type:"String",enum:"hover / click",default:"hover"},{prop:"addIcon",desc:"\u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE\u7684icon",type:"String",enum:"-",default:"Plus"},{prop:"addButtonLabel",desc:"\u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE\u7684label\u6587\u5B57",type:"String",enum:"-",default:"-"},{prop:"...ElTabs",desc:"\u7EE7\u627FElTabs\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@menus",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"command",desc:"\u6307\u4EE4",type:"String/Number/Object",enum:"-",default:"-"},{prop:"label",desc:"\u540D\u79F0",type:"String",enum:"-",default:"-"},{prop:"icon",desc:"\u56FE\u6807",type:"String",enum:"-",default:"-"},{prop:"disabled",desc:"\u7981\u7528",type:"Boolean",enum:"true / false",default:"-"},{prop:"divided",desc:"\u4E0E\u4E0A\u4E00\u4E2A\u7684\u5206\u5272\u7EBF",type:"Boolean",enum:"true / false",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"command",desc:"\u70B9\u51FB\u65B0\u589E\u7684\u6309\u94AE\u6216\u8005\u4E0B\u62C9\u83DC\u5355\u9879\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03",value:"(name, dropdownObj)\uFF1Bname\uFF1A\u65B0\u589E\u6807\u7B7E\u7684\u968F\u673A\u552F\u4E00name\uFF0C\u9009\u9879\u5361\u7684\u6807\u793A\u7B26\uFF1BdropdownObj\uFF1A\u5982\u679C\u662Fdropdown\u7C7B\u578B\u4F1A\u8FD4\u56DE\u6240\u9009\u62E9\u7684\u83DC\u5355\u5168\u90E8\u5BF9\u8C61\u4F9B\u65B0\u589E\u6807\u7B7E\u91CC\u663E\u793A\u4F7F\u7528\uFF0C\u5982\u679C\u662F\u9ED8\u8BA4\u7C7B\u578B\u5219\u8FD4\u56DEnull\u3002"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"add",desc:"\u81EA\u5B9A\u4E49\u65B0\u589E\u6309\u94AE"},{name:"dropdownButton",desc:"\u5982\u679C\u662Fdropdown\u7C7B\u578B\u53EF\u81EA\u5B9A\u4E49\u6309\u94AE"}]}]}];const w=n=>(L("data-v-32f056d8"),n=n(),V(),n),O=w(()=>c("h1",{class:"component-h1"},"Tabs \u6807\u7B7E\u9875",-1)),j=w(()=>c("p",null,"\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1)),I=y({__name:"index",setup(n){const r=[{title:"\u52A8\u6001\u589E\u51CF\u6807\u7B7E",titleDesc:"\u589E\u51CF\u6807\u7B7E\u9875",component:k,description:""}];return(t,l)=>{const b=p("document-table"),i=p("code-example");return s(),E(C,null,[m(" \u6587\u6863\u8BF4\u660E "),v(b,{data:h(N)},null,8,["data"]),m(" \u4E00\u7EA7\u6807\u9898 "),O,m(" \u4E00\u7EA7\u63CF\u8FF0 "),j,m("\u5185\u5BB9 "),(s(),E(C,null,D(r,(e,u)=>c("div",{class:"component-block",key:u},[c("h2",null,B(e.title),1),c("p",null,B(e.titleDesc),1),v(i,{component:e.component,description:e.description},null,8,["component","description"])])),64))],64)}}});var $=g(I,[["__scopeId","data-v-32f056d8"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/tabs/index.vue"]]);export{$ as default};
