<template>
  <el-table-column class-name="fu-table-operations" :align="align" :width="computeWidth" v-bind="$attrs">
    <template #header>
      {{ $attrs.label }}
    </template>
    <template #default="{ row }">
      <fu-table-button :icon="type === 'icon'" v-for="(btn, i) in defaultButtons(row)" :key="i"
        @click.stop="btn.click(row)" :disabled="disableButton(btn, row)" :label="btn.label" :type="btn.type || 'primary'"
        link>
        <el-icon v-if="type === 'icon'">
          <component :is="btn.icon" />
        </el-icon>
        <template v-else>
          {{ btn.label }}
        </template>
      </fu-table-button>
      <fu-table-more-button :type="type" :buttons="moreButtons(row)" :row="row" v-if="moreButtons(row).length > 0" />
    </template>
  </el-table-column>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import FuTableButton from "./FuTableButton.vue";
import FuTableMoreButton from "./FuTableMoreButton.vue";

defineOptions({ name: "FuTableOperations" });
const props = defineProps({
  // columns: Array,
  align: {
    type: String,
    default: "center"
  },
  width: [String, Number],
  minWidth: [String, Number],
  ellipsis: { // 超过几个按钮时显示省略号，如果只超过一个也不显示省略号
    type: Number,
    default: 3
  },
  buttons: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: "label",
    validator: (value: string) => ['icon', 'label'].includes(value)
  },
});

const hasShowFunc = computed(() => {
  return props.buttons.some((btn: any) => typeof btn.show === "function")
});

const defaultButtons = computed(() => {
  return function (row: any) {
    return hasMore(row) ? showButtons(row).slice(0, props.ellipsis) : showButtons(row)
  }
});

const moreButtons = computed(() => {
  return function (row: any) {
    return hasMore(row) ? showButtons(row).slice(props.ellipsis) : []
  }
});

const computeWidth = computed(() => {
  let length = hasShowFunc.value ? props.ellipsis : defaultButtons.value.length
  let buttonsWidth = 35 + length * 58 + 58
  if (props.minWidth) {
    buttonsWidth = buttonsWidth < props.minWidth ? props.minWidth : buttonsWidth
  }
  return props.width ? props.width : buttonsWidth
});

const disableButton = computed(() => {
  return function (btn: any, row: any) {
    return typeof btn.disabled === "function" ? btn.disabled(row) : btn.disabled
  }
});

function showButtons(row: any) {
  return props.buttons?.filter((btn: any) => typeof btn.show === "function" ? btn.show(row) !== false : btn.show !== false)
}
function hasMore(row: any) {
  return showButtons(row)?.length > props.ellipsis + 1
}
</script>
