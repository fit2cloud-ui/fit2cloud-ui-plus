<demo>扩展的钩子用法</demo>
<template>
  <fu-steps ref="stepsRef" finish-status="success" :beforeLeave="beforeLeave" :isLoading="loading">
    <fu-step id="cluster" title="第1步">
      <div class="example">
        <el-form ref="ruleFormRef" label-width="80px" :model="ruleForm" :rules="rules">
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </fu-step>
    <fu-step id="network" title="第2步">
      <div class="example">
        <h1>Step 2</h1>
      </div>
    </fu-step>
    <fu-step id="storage" title="完成" :beforeActive="beforeActive">
      <div class="example">
        <h1>完成</h1>
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
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
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
    // 第一步校验
    if (await submitForm(ruleFormRef.value)) {
      // 校验成功
      if (validateCluster.value !== true) {
        // 异步校验，5秒后校验通过
        setTimeout(() => {
          validateCluster.value = true;
          loading.value = false;
          // 重新触发beforeLeave，但是validateCluster已经为true
          stepsRef.value.next();
        }, 3000);
        loading.value = true;
        console.log(id + '异步校验执行中，需要loading');
        // 校验通过前先返回false
        return false;
      } else {
        console.log(id + ' 异步校验通过');
        return true;
      }
    } else {
      return false;
    }
  }
  if (id === 'network') {
    console.log(title + ' 异步校验通过');
    return true; // 同步校验, 返回true
  }
  if (id === 'storage') {
    console.log(index + ' 异步校验通过');
    // 同步校验, 返回undefined
  }
};
function beforeActive({ id, title, index }: any) {
  console.log(index + '激活前');
}
</script>
<style lang="scss" scoped>
.example {
  margin: 0 10%;
}
</style>
