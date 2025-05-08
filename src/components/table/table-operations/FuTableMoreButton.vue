<template>
  <el-dropdown @command="handleCommand" class="fu-table-more-button">
    <el-button link type="primary" @click.stop>
      <el-icon v-if="type === 'icon'">
        <MoreFilled />
      </el-icon>
      <template v-else>
        {{ t('fu.table.more') }}
      </template>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(btn, i) in buttons" :key="i" :icon="type === 'icon'? btn.icon: ''" :disabled="disabled(btn)" :divided="btn.divided"
          :command="btn">
          {{ btn.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";
import { useLocale } from "@/hooks"
import { DropdownProps } from "@/tools/types";

defineOptions({ name: "FuTableMoreButton" });
const { t } = useLocale()
const props = defineProps({
  row: Object,
  buttons: {
    type: Array as PropType<DropdownProps[]>,
    required: true
  },
  size: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "label",
    validator: (value: string) => ['icon', 'label'].includes(value)
  },
});

const disabled = computed(() => {
  return function (btn: any) {
    return typeof btn.disabled === "function" ? btn.disabled(props.row) : btn.disabled
  }
});

function handleCommand(btn: any) {
  btn.click(props.row)
}
</script>
