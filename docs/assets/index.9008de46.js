import{d as E,a as s,o as v,k as b,w as t,b as o,_ as C,p as D,h as A,f as e,q as L,r as c,c as y,F as S,e as h,i as x,u as Q,j as W,t as T}from"./index.44add918.js";function $(u){u.__sourceCode=`<template>
  <fu-steps ref="steps" finish-status="success" height="200" @cancel="cancel" @finish="submit" showCancel>
    <fu-step id="cluster" title="\u7B2C1\u6B65">
      <div class="example">
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="network" title="\u7B2C2\u6B65">
      <div class="example">
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="storage" title="\u5B8C\u6210">
      <div class="example">
        <h1>\u5B8C\u6210</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
  </fu-steps>
</template>

<script setup lang="ts">
function cancel() {
  alert("\u53D6\u6D88");
}
function submit() {
  alert("\u5B8C\u6210");
}

<\/script>
<style lang="scss" scoped>
.example {
  margin: 0 5%;
}
</style>`,u.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const w=u=>(D("data-v-a3c3fe76"),u=u(),A(),u),X=w(()=>e("div",{class:"example"},[e("h1",null,"Step 1"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),Y=w(()=>e("div",{class:"example"},[e("h1",null,"Step 2"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),Z=w(()=>e("div",{class:"example"},[e("h1",null,"\u5B8C\u6210"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),N=E({__name:"BaseSteps",setup(u){function n(){alert("\u53D6\u6D88")}function f(){alert("\u5B8C\u6210")}return(m,a)=>{const r=s("fu-step"),d=s("fu-steps");return v(),b(d,{ref:"steps","finish-status":"success",height:"200",onCancel:n,onFinish:f,showCancel:""},{default:t(()=>[o(r,{id:"cluster",title:"\u7B2C1\u6B65"},{default:t(()=>[X]),_:1}),o(r,{id:"network",title:"\u7B2C2\u6B65"},{default:t(()=>[Y]),_:1}),o(r,{id:"storage",title:"\u5B8C\u6210"},{default:t(()=>[Z]),_:1})]),_:1},512)}}});typeof $=="function"&&$(N);var ee=C(N,[["__scopeId","data-v-a3c3fe76"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/demo/BaseSteps.vue"]]);function M(u){u.__sourceCode=`<template>
  <fu-steps direction="vertical" finish-status="success" height="150" @finish="submit" >
    <fu-step id="cluster" title="\u7B2C1\u6B65">
      <div class="example">
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="network" title="\u7B2C2\u6B65">
      <div class="example">
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="storage" title="\u5B8C\u6210">
      <div class="example">
        <h1>\u5B8C\u6210</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
  </fu-steps>
</template>

<script setup lang="ts">
function submit() {
  alert("\u5B8C\u6210");
}
<\/script>`,u.__sourceCodeTitle="\u7AD6\u5F0F\u6B65\u9AA4\u6761"}const ue=e("div",{class:"example"},[e("h1",null,"Step 1"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),te=e("div",{class:"example"},[e("h1",null,"Step 2"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),oe=e("div",{class:"example"},[e("h1",null,"\u5B8C\u6210"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),P=E({__name:"VerticalSteps",setup(u){function n(){alert("\u5B8C\u6210")}return(f,m)=>{const a=s("fu-step"),r=s("fu-steps");return v(),b(r,{direction:"vertical","finish-status":"success",height:"150",onFinish:n},{default:t(()=>[o(a,{id:"cluster",title:"\u7B2C1\u6B65"},{default:t(()=>[ue]),_:1}),o(a,{id:"network",title:"\u7B2C2\u6B65"},{default:t(()=>[te]),_:1}),o(a,{id:"storage",title:"\u5B8C\u6210"},{default:t(()=>[oe]),_:1})]),_:1})}}});typeof M=="function"&&M(P);var se=C(P,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/demo/VerticalSteps.vue"]]);function I(u){u.__sourceCode=`<template>
  <fu-steps ref="stepsRef" finish-status="success" :beforeLeave="beforeLeave" :isLoading="loading">
    <fu-step id="cluster" title="\u7B2C1\u6B65">
      <div class="example">
        <el-form ref="ruleFormRef" label-width="80px" :model="ruleForm" :rules="rules">
          <el-form-item label="\u540D\u79F0" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </fu-step>
    <fu-step id="network" title="\u7B2C2\u6B65">
      <div class="example">
        <h1>Step 2</h1>
      </div>
    </fu-step>
    <fu-step id="storage" title="\u5B8C\u6210" :beforeActive="beforeActive">
      <div class="example">
        <h1>\u5B8C\u6210</h1>
      </div>
    </fu-step>
  </fu-steps>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const ruleForm = reactive({
  name: '',
});
const rules = reactive({
  name: [{ required: true, message: '\u8BF7\u8F93\u5165\u540D\u79F0', trigger: 'blur' }],
});
const validateCluster = ref(false);
const loading = ref(false);

const ruleFormRef = ref();
const stepsRef = ref();

const submitForm = async (formEl: any) => {
  let bool;
  if (!formEl) return;
  await formEl.validate((valid: boolean) => {
    if (valid) {
      bool = true;
    } else {
      bool = false;
    }
  });
  return bool;
};

const beforeLeave = async ({ id, title, index }: any, forward: string) => {
  console.log(forward);
  if (index === 0) {
    // \u7B2C\u4E00\u6B65\u6821\u9A8C
    if (await submitForm(ruleFormRef.value)) {
      // \u6821\u9A8C\u6210\u529F
      if (validateCluster.value !== true) {
        // \u5F02\u6B65\u6821\u9A8C\uFF0C5\u79D2\u540E\u6821\u9A8C\u901A\u8FC7
        setTimeout(() => {
          validateCluster.value = true;
          loading.value = false;
          // \u91CD\u65B0\u89E6\u53D1beforeLeave\uFF0C\u4F46\u662FvalidateCluster\u5DF2\u7ECF\u4E3Atrue
          stepsRef.value.next();
        }, 3000);
        loading.value = true;
        console.log(id + '\u5F02\u6B65\u6821\u9A8C\u6267\u884C\u4E2D\uFF0C\u9700\u8981loading');
        // \u6821\u9A8C\u901A\u8FC7\u524D\u5148\u8FD4\u56DEfalse
        return false;
      } else {
        console.log(id + ' \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7');
        return true;
      }
    } else {
      return false;
    }
  }
  if (id === 'network') {
    console.log(title + ' \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7');
    return true; // \u540C\u6B65\u6821\u9A8C, \u8FD4\u56DEtrue
  }
  if (id === 'storage') {
    console.log(index + ' \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7');
    // \u540C\u6B65\u6821\u9A8C, \u8FD4\u56DEundefined
  }
};
function beforeActive({ id, title, index }: any) {
  console.log(index + '\u6FC0\u6D3B\u524D');
}
<\/script>
<style lang="scss" scoped>
.example {
  margin: 0 10%;
}
</style>`,u.__sourceCodeTitle="\u6269\u5C55\u7684\u94A9\u5B50\u7528\u6CD5"}const H=u=>(D("data-v-1a6d0aed"),u=u(),A(),u),ne={class:"example"},ie=H(()=>e("div",{class:"example"},[e("h1",null,"Step 2")],-1)),le=H(()=>e("div",{class:"example"},[e("h1",null,"\u5B8C\u6210")],-1)),z=E({__name:"StepsHooksDemo",setup(u){const n=L({name:""}),f=L({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}]}),m=c(!1),a=c(!1),r=c(),d=c(),B=async i=>{let l;if(!!i)return await i.validate(_=>{_?l=!0:l=!1}),l},F=async({id:i,title:l,index:_},g)=>{if(console.log(g),_===0)return await B(r.value)?m.value!==!0?(setTimeout(()=>{m.value=!0,a.value=!1,d.value.next()},3e3),a.value=!0,console.log(i+"\u5F02\u6B65\u6821\u9A8C\u6267\u884C\u4E2D\uFF0C\u9700\u8981loading"),!1):(console.log(i+" \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7"),!0):!1;if(i==="network")return console.log(l+" \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7"),!0;i==="storage"&&console.log(_+" \u5F02\u6B65\u6821\u9A8C\u901A\u8FC7")};function p({id:i,title:l,index:_}){console.log(_+"\u6FC0\u6D3B\u524D")}return(i,l)=>{const _=s("el-input"),g=s("el-form-item"),J=s("el-form"),q=s("fu-step"),K=s("fu-steps");return v(),b(K,{ref_key:"stepsRef",ref:d,"finish-status":"success",beforeLeave:F,isLoading:a.value},{default:t(()=>[o(q,{id:"cluster",title:"\u7B2C1\u6B65"},{default:t(()=>[e("div",ne,[o(J,{ref_key:"ruleFormRef",ref:r,"label-width":"80px",model:n,rules:f},{default:t(()=>[o(g,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[o(_,{modelValue:n.name,"onUpdate:modelValue":l[0]||(l[0]=O=>n.name=O)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),_:1}),o(q,{id:"network",title:"\u7B2C2\u6B65"},{default:t(()=>[ie]),_:1}),o(q,{id:"storage",title:"\u5B8C\u6210",beforeActive:p},{default:t(()=>[le]),_:1})]),_:1},8,["isLoading"])}}});typeof I=="function"&&I(z);var ae=C(z,[["__scopeId","data-v-1a6d0aed"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/demo/StepsHooksDemo.vue"]]);function R(u){u.__sourceCode=`<template>
  <el-radio-group v-model="labelPosition" style="margin-bottom: 30px;">
    <el-radio-button label="left">\u5DE6\u5BF9\u9F50</el-radio-button>
    <el-radio-button label="right">\u53F3\u5BF9\u9F50</el-radio-button>
    <el-radio-button label="center">\u5C45\u4E2D\u5BF9\u9F50</el-radio-button>
    <el-radio-button label="flex">\u4E24\u7AEF\u5BF9\u9F50</el-radio-button>
  </el-radio-group>
  <fu-steps ref="steps" finish-status="success" height="200" @finish="submit" :cancelButtonText="cancelText"
    :finishButtonText="finishText" :prevButtonText="prevText" :nextButtonText="nextText" buttonSize="small"
    :footerAlign="labelPosition" showCancel>
    <fu-step id="cluster" title="\u7B2C1\u6B65">
      <div class="example">
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="network" title="\u7B2C2\u6B65">
      <div class="example">
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="storage" title="\u5B8C\u6210">
      <div class="example">
        <h1>\u5B8C\u6210</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
  </fu-steps>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const labelPosition = ref("right")
const cancelText = ref("Cancel")
const prevText = ref("Prev")
const nextText = ref("Next")
const finishText = ref("Submit")
function submit() {
  alert("\u5B8C\u6210");
}
<\/script>`,u.__sourceCodeTitle="footer\u6B65\u9AA4\u6309\u94AE\u7684\u914D\u7F6E"}const re=h("\u5DE6\u5BF9\u9F50"),de=h("\u53F3\u5BF9\u9F50"),pe=h("\u5C45\u4E2D\u5BF9\u9F50"),ce=h("\u4E24\u7AEF\u5BF9\u9F50"),me=e("div",{class:"example"},[e("h1",null,"Step 1"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),fe=e("div",{class:"example"},[e("h1",null,"Step 2"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),_e=e("div",{class:"example"},[e("h1",null,"\u5B8C\u6210"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1),U=E({__name:"SettingFooterDemo",setup(u){const n=c("right"),f=c("Cancel"),m=c("Prev"),a=c("Next"),r=c("Submit");function d(){alert("\u5B8C\u6210")}return(B,F)=>{const p=s("el-radio-button"),i=s("el-radio-group"),l=s("fu-step"),_=s("fu-steps");return v(),y(S,null,[o(i,{modelValue:n.value,"onUpdate:modelValue":F[0]||(F[0]=g=>n.value=g),style:{"margin-bottom":"30px"}},{default:t(()=>[o(p,{label:"left"},{default:t(()=>[re]),_:1}),o(p,{label:"right"},{default:t(()=>[de]),_:1}),o(p,{label:"center"},{default:t(()=>[pe]),_:1}),o(p,{label:"flex"},{default:t(()=>[ce]),_:1})]),_:1},8,["modelValue"]),o(_,{ref:"steps","finish-status":"success",height:"200",onFinish:d,cancelButtonText:f.value,finishButtonText:r.value,prevButtonText:m.value,nextButtonText:a.value,buttonSize:"small",footerAlign:n.value,showCancel:""},{default:t(()=>[o(l,{id:"cluster",title:"\u7B2C1\u6B65"},{default:t(()=>[me]),_:1}),o(l,{id:"network",title:"\u7B2C2\u6B65"},{default:t(()=>[fe]),_:1}),o(l,{id:"storage",title:"\u5B8C\u6210"},{default:t(()=>[_e]),_:1})]),_:1},8,["cancelButtonText","finishButtonText","prevButtonText","nextButtonText","footerAlign"])],64)}}});typeof R=="function"&&R(U);var ve=C(U,[["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/demo/SettingFooterDemo.vue"]]);function V(u){u.__sourceCode=`<template>
  <fu-steps ref="stepsRef" finish-status="success" @change="handleChange" height="200">
    <fu-step id="cluster" title="\u7B2C1\u6B65">
      <div class="example">
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="network" title="\u7B2C2\u6B65">
      <div class="example">
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <fu-step id="storage" title="\u5B8C\u6210">
      <div class="example">
        <h1>\u5B8C\u6210</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet
          quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis
          tempore, dolores voluptas dolore placeat nulla.</p>
      </div>
    </fu-step>
    <template #footer>
      <div class="footer">
        <el-button type="primary" @click="prev" v-if="nowIndex !== 0">\u4E0A\u4E00\u6B65</el-button>
        <el-button type="primary" v-if="nowId === 'storage'">\u63D0\u4EA4</el-button>
        <el-button type="primary" @click="next" v-else>\u4E0B\u4E00\u6B65</el-button>
      </div>
    </template>
  </fu-steps>
</template>

<script setup lang="ts">
import {ref } from 'vue'
const nowId = ref(null)
const nowIndex = ref(0)

const stepsRef = ref()

function next() {
  stepsRef.value.next();
}
function prev() {
  stepsRef.value.prev();
}
function handleChange({ id, title, index }: any) {
  console.log(id, title, index)
  nowId.value = id
  nowIndex.value = index
}

<\/script>
<style lang="scss" scoped>
.footer {
  text-align: right;
}
</style>`,u.__sourceCodeTitle="\u81EA\u5B9A\u4E49footer\u6B65\u9AA4\u6309\u94AE"}const k=u=>(D("data-v-42fb2150"),u=u(),A(),u),Be=k(()=>e("div",{class:"example"},[e("h1",null,"Step 1"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),Fe=k(()=>e("div",{class:"example"},[e("h1",null,"Step 2"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),be=k(()=>e("div",{class:"example"},[e("h1",null,"\u5B8C\u6210"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.")],-1)),he={class:"footer"},Ee=h("\u4E0A\u4E00\u6B65"),Ce=h("\u63D0\u4EA4"),ge=h("\u4E0B\u4E00\u6B65"),j=E({__name:"CustomFooterDemo",setup(u){const n=c(null),f=c(0),m=c();function a(){m.value.next()}function r(){m.value.prev()}function d({id:B,title:F,index:p}){console.log(B,F,p),n.value=B,f.value=p}return(B,F)=>{const p=s("fu-step"),i=s("el-button"),l=s("fu-steps");return v(),b(l,{ref_key:"stepsRef",ref:m,"finish-status":"success",onChange:d,height:"200"},{footer:t(()=>[e("div",he,[f.value!==0?(v(),b(i,{key:0,type:"primary",onClick:r},{default:t(()=>[Ee]),_:1})):x("v-if",!0),n.value==="storage"?(v(),b(i,{key:1,type:"primary"},{default:t(()=>[Ce]),_:1})):(v(),b(i,{key:2,type:"primary",onClick:a},{default:t(()=>[ge]),_:1}))])]),default:t(()=>[o(p,{id:"cluster",title:"\u7B2C1\u6B65"},{default:t(()=>[Be]),_:1}),o(p,{id:"network",title:"\u7B2C2\u6B65"},{default:t(()=>[Fe]),_:1}),o(p,{id:"storage",title:"\u5B8C\u6210"},{default:t(()=>[be]),_:1})]),_:1},512)}}});typeof V=="function"&&V(j);var xe=C(j,[["__scopeId","data-v-42fb2150"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/demo/CustomFooterDemo.vue"]]);const De=[{name:"Steps",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"beforeActive",desc:"\u8282\u70B9\u6FC0\u6D3B\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u6FC0\u6D3B\uFF0C\u5176\u4ED6\u60C5\u51B5\u5219\u8FDB\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002",type:"Function({ id, title, index }, forward)",enum:"-",default:"forward\u4E3ABoolean\u7C7B\u578B\uFF0C\u88AB\u6FC0\u6D3B\u8282\u70B9\u5728\u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0Cforward\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse"},{prop:"beforeLeave",desc:"\u8282\u70B9\u79BB\u5F00\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u79BB\u5F00\uFF0C\u5176\u4ED6\u60C5\u51B5\u5219\u8FDB\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9",type:"Function({ id, title, index }, forward)",enum:"-",default:"forward\u4E3ABoolean\u7C7B\u578B\uFF0C\u88AB\u6FC0\u6D3B\u8282\u70B9\u5728\u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0Cforward\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse"},{prop:"cancelButtonText",desc:"\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9",type:"String",enum:"-",default:"\u53D6\u6D88(\u5DF2\u56FD\u9645\u5316)"},{prop:"prevButtonText",desc:"\u4E0A\u4E00\u6B65\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9",type:"String",enum:"-",default:"\u4E0A\u4E00\u6B65(\u5DF2\u56FD\u9645\u5316)"},{prop:"nextButtonText",desc:"\u4E0B\u4E00\u6B65\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9",type:"String",enum:"-",default:"\u4E0B\u4E00\u6B65(\u5DF2\u56FD\u9645\u5316)"},{prop:"finishButtonText",desc:"\u5B8C\u6210\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9",type:"String",enum:"-",default:"\u5B8C\u6210(\u5DF2\u56FD\u9645\u5316)"},{prop:"showCancel",desc:"\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE",type:"Boolean",enum:"-",default:"false"},{prop:"buttonSize",desc:"\u6309\u94AE\u7684\u5927\u5C0F",type:"String",enum:"-",default:"default"},{prop:"footerAlign",desc:"footer\u6309\u94AE\u5BF9\u9F50\u65B9\u5F0F",type:"String",enum:"flex / left / right / center",default:"flex"},{prop:"isLoading",desc:"loading\u52A0\u8F7D\u72B6\u6001",type:"Boolean",enum:"-",default:"false"},{prop:"height",desc:"\u5185\u5BB9\u9AD8\u5EA6",type:"String/Number",enum:"-",default:"auto"},{prop:"...ElSteps",desc:"\u7EE7\u627FElSteps\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@Events",header:{event:"\u4E8B\u4EF6\u540D",desc:"\u8BF4\u660E",value:"\u56DE\u8C03\u53C2\u6570"},table:[{event:"cancel",desc:"\u53D6\u6D88\u6309\u94AE\u56DE\u8C03",value:"-"},{event:"finish",desc:"\u5B8C\u6210\u6309\u94AE\u56DE\u8C03",value:"-"},{event:"change",desc:"\u6B65\u9AA4\u8282\u70B9\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",value:"\u5F53\u524D\u9879\u7684\u5B9E\u4F8B\uFF0C\u4F8B\u5982\uFF1A({ id, title, index })"}]},{name:"@Methods",header:{event:"\u65B9\u6CD5\u540D",desc:"\u8BF4\u660E",value:"\u53C2\u6570"},table:[{event:"next",desc:"\u6267\u884C\u4E0B\u4E00\u6B65",value:"-"},{event:"prev",desc:"\u6267\u884C\u4E0A\u4E00\u6B65",value:"-"},{event:"active",desc:"\u6FC0\u6D3B\u6307\u5B9A\u8282\u70B9",value:"index"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"footer",desc:"Steps \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9"}]}]},{name:"Step",children:[{name:"@Attributes",header:{prop:"\u53C2\u6570",desc:"\u8BF4\u660E",type:"\u7C7B\u578B",enum:"\u53EF\u9009\u503C",default:"\u9ED8\u8BA4\u503C"},table:[{prop:"id",desc:"ID",type:"String",enum:"-",default:"-"},{prop:"beforeActive",desc:"\u8282\u70B9\u6FC0\u6D3B\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u6FC0\u6D3B\uFF0C\u8FD4\u56DE true \u5219\u8FDB\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002",type:"Function({ id, title, index }, forward)",enum:"-",default:"-"},{prop:"beforeLeave",desc:"\u8282\u70B9\u79BB\u5F00\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u79BB\u5F00\uFF0C\u8FD4\u56DE true \u5219\u8FDB\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9",type:"Function({ id, title, index }, forward))",enum:"-",default:"-"},{prop:"...ElStep",desc:"\u7EE7\u627FElStep\u7684\u5C5E\u6027",type:"-",enum:"-",default:"-"}]},{name:"@Slots",header:{name:"name",desc:"\u8BF4\u660E"},table:[{name:"-",desc:"\u5185\u5BB9"}]}]}];const G=u=>(D("data-v-14b2a567"),u=u(),A(),u),Ae=G(()=>e("h1",{class:"component-h1"},"Steps \u6B65\u9AA4\u6761",-1)),qe=G(()=>e("p",null,"el-steps\u7684\u6269\u5C55\uFF0C\u589E\u52A0\u5C55\u793A\u533A\u3001\u6B65\u9AA4\u6309\u94AE\u4EE5\u53CA\u6FC0\u6D3B\u3001\u79BB\u5F00\u7684\u94A9\u5B50\u51FD\u6570\u7B49\uFF0C\u9664\u4E86\u4EE5\u4E0B\u989D\u5916\u589E\u52A0\u7684\u529F\u80FD\u548C\u5C5E\u6027\uFF0C\u5176\u4ED6\u7684\u7528\u6CD5\u4E0Eel-steps\u4E00\u81F4",-1)),ye=E({__name:"index",setup(u){const n=[{title:"\u57FA\u672C\u7528\u6CD5",titleDesc:"\u7EE7\u627Fel-steps\u7684\u529F\u80FD\uFF0C\u589E\u52A0\u5185\u5BB9\u5C55\u793A\u533A\uFF1B\u6B65\u9AA4\u8282\u70B9\u88AB\u6FC0\u6D3B\u540E\u53EF\u70B9\u51FB\u3002",component:ee,description:""},{title:"\u7AD6\u5F0F\u6B65\u9AA4\u6761",titleDesc:"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002",component:se},{title:"\u6269\u5C55\u7684\u94A9\u5B50\u7528\u6CD5",titleDesc:"\u94A9\u5B50\u51FD\u6570\uFF0C\u5373\u53EF\u7528\u5728\u8282\u70B9fu-step\u4E0A\uFF0C\u4E5F\u53EF\u7528\u5728fu-steps\u4E0A\uFF0C\u6548\u679C\u4E00\u6837\u3002",component:ae},{title:"footer\u6B65\u9AA4\u6309\u94AE\u7684\u914D\u7F6E",titleDesc:"\u76EE\u524Dfooter\u6309\u94AE\u53EF\u4EE5\u4FEE\u6539\u6587\u5B57\u3001\u5927\u5C0F\u4EE5\u53CA\u5BF9\u9F50\u65B9\u5F0F",component:ve},{title:"\u81EA\u5B9A\u4E49footer\u6B65\u9AA4\u6309\u94AE",titleDesc:"\u81EA\u5B9A\u4E49\u7684footer\uFF0C\u539F\u6709\u6309\u94AE\u7684\u76F8\u5173\u4E8B\u4EF6\u548C\u914D\u7F6E\u5C5E\u6027\u5931\u6548\u3002",component:xe}];return(f,m)=>{const a=s("document-table"),r=s("code-example");return v(),y(S,null,[x(" \u6587\u6863\u8BF4\u660E "),o(a,{data:Q(De)},null,8,["data"]),x(" \u4E00\u7EA7\u6807\u9898 "),Ae,x(" \u4E00\u7EA7\u63CF\u8FF0 "),qe,x(" \u5185\u5BB9 "),(v(),y(S,null,W(n,(d,B)=>e("div",{class:"component-block",key:B},[e("h2",null,T(d.title),1),e("p",null,T(d.titleDesc),1),o(r,{description:d.description,component:d.component},null,8,["description","component"])])),64))],64)}}});var we=C(ye,[["__scopeId","data-v-14b2a567"],["__file","/home/runner/work/fit2cloud-ui-plus/fit2cloud-ui-plus/examples/pages/steps/index.vue"]]);export{we as default};
