<template>
  <el-dropdown @command="handleCommand" class="fu-table-more-button">
    <el-button circle icon="MoreFilled" :size="size" @click.stop />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(btn, i) in buttons" :key="i" :icon="btn.icon" :disabled="disabled(btn)"
          :command="btn">
          {{ btn.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  row: Object,
  buttons: {
    type: Array,
    required: true
  },
  size: {
    type: String,
    default: "mini"
  }
});

const disabled = computed(({ row }) => {
  return (btn: any) => {
    return typeof btn.disabled === "function" ? btn.disabled(row) : btn.disabled
  }
});

function handleCommand(btn: any) {
  btn.click(props.row)
}
</script>
