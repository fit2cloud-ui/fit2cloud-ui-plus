<template>
  <el-table-column class-name="fu-table-operations" :align="align" :width="computeWidth" v-bind="$attrs">
    <template #header>
      {{ $attrs.label }}
      <fu-table-column-select type="dialog" :columns="columns" :local-key="localKey" v-if="columns" />
    </template>
    <template v-slot:default="{ row }">
      <fu-table-button v-for="(btn, i) in defaultButtons(row)" :key="i" v-bind="btn" @click.stop="btn.click(row)"
        :disabled="disableButton(btn, row)" />
      <fu-table-more-button :buttons="moreButtons(row)" :row="row" v-if="moreButtons(row).length > 0" />
    </template>
  </el-table-column>
</template>

<script lang="ts">
export default {
  name: "FuTableOperations"
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import FuTableButton from "./FuTableButton.vue";
import FuTableMoreButton from "./FuTableMoreButton.vue";
import FuTableColumnSelect from "../table-column-select/FuTableColumnSelect.vue";
const props = defineProps({
  columns: Array,
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
  }
});

const localKey = inject("localKey")

const hasShowFunc = computed(() => {
  return props.buttons.some((btn: any) => typeof btn.show === "function")
});

const defaultButtons = computed(() => {
  return (row: any) => {
    return hasMore(row) ? showButtons(row).slice(0, props.ellipsis) : showButtons(row)
  }
});

const moreButtons = computed(() => {
  return (row: any) => {
    return hasMore(row) ? showButtons(row).slice(props.ellipsis) : []
  }
});

const computeWidth = computed(() => {
  let length = hasShowFunc ? props.ellipsis : defaultButtons.length
  let buttonsWidth = 20 + length * 38 + 38
  if (props.minWidth) {
    buttonsWidth = buttonsWidth < props.minWidth ? props.minWidth : buttonsWidth
  }
  return props.width ? props.width : buttonsWidth
});

const disableButton = computed(() => {
  return (btn: any, row: any) => {
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
