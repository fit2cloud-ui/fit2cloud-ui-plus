<template>
  <!-- 一级标题 -->
  <div class="style-guide">
    <div class="style-guide-item">
      <el-form :model="ruleForm" :rules="rules" style="width: 100%">
        <el-form-item prop="name">
          <el-input type="textarea" v-model="ruleForm.name" placeholder="Please input"/>
        </el-form-item>
        <el-form-item prop="name">
          <el-input type="textarea" v-model="ruleForm.name" placeholder="Please input" disabled/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormRules} from "element-plus";

const value = ref()

const ruleForm = reactive({
  name: "",
})

const rules = reactive<FormRules>({
    name: [
      {required: true, message: 'Please input name', trigger: 'blur'},
      {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
    ],
  }
)
</script>

<style lang="scss" scoped>
.style-guide {
  display: flex;
  flex-direction: column;
  width: 800px;

  .style-guide-item {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .label {
      font-size: 14px;
      line-height: 22px;
    }
  }
}


.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
