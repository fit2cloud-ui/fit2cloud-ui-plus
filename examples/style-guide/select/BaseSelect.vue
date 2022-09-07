<template>
  <!-- 一级标题 -->
  <div class="style-guide">
    <div class="style-guide-item">
      <el-form :model="ruleForm" :rules="rules" style="width: 100%">
        <el-form-item prop="name">
          <el-select v-model="ruleForm.name" multiple clearable allow-create collapse-tags collapse-tags-tooltip
                     clear-icon="CircleCloseFilled">
            <el-option v-for="item in options" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item prop="name">
          <el-select v-model="ruleForm.name" multiple disabled>
            <el-option v-for="item in options" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormRules} from "element-plus";

const value = ref()

const options = [
  {
    value: 'Option1',
    label: '选项1',
  },
  {
    value: 'Option2',
    label: '选项2',
  },
  {
    value: 'Option3',
    label: '选项3',
  },
  {
    value: 'Option4',
    label: '选项4',
  },
  {
    value: 'Option5',
    label: '选项5',
  },
]

const ruleForm = reactive({
  name: "",
})

const rules = reactive<FormRules>({
    name: [
      {required: true, message: 'Please select name', trigger: 'change'},
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
