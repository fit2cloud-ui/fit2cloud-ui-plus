<template>
  <el-table-column class-name="fu-table-column-dropdown" :width="width" :resizable="false" align="center"
    v-bind="$attrs">
    <template #default="scope">
      <el-dropdown @command="handleCommand" :trigger="trigger" :class="showType === 'hover' ? 'fu-show-icon' : ''"
        v-if="isShow(scope.row)" placement="bottom" :ref="`dropdown${scope.$index}`">
        <span class="fu-dropdown-link">
          <slot name="icon">
            <el-icon class="fu-icon-more">
              <MoreFilled />
            </el-icon>
          </slot>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <slot name="title">
              <div class="fu-table-column-dropdown__title" v-if="title">
                {{ title }}
              </div>
            </slot>
            <slot v-bind="scope">
              <el-dropdown-item v-for="(item, i) in menus" :key="i" :icon="item.icon"
                :disabled="disabled(item, scope.row)" :divided="item.divided" :command="composeValue(item, scope.row)">
                {{ item.label }}
              </el-dropdown-item>
            </slot>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>

  </el-table-column>
</template>
<script lang="ts">
export default {
  name: "FuTableColumnDropdown"
}
</script>
<script lang="ts" setup>
import { computed, getCurrentInstance } from "vue";
const props = defineProps({
  showType: {
    type: String,
    default: "always",
    validator: (value: string) => ["always", "hover", "selected"].includes(value),
  },
  menus: {
    type: Array,
    default: () => [],
  },
  title: String,
  trigger: {
    type: String,
    default: "click",
  },
  width: {
    type: String,
    default: "40",
  },

});

const instance = getCurrentInstance()


const isShow = computed(() => {
  return function (row: any) {
    if (props.showType === "selected") {
      const selection = instance?.parent?.parent?.store?.getSelectionRows()
      return selection.includes(row) && true;
    } else {
      return true;
    }
  };
});

const disabled = computed(() => {
  return function (item: any, row: any) {
    return typeof item.disabled === "function"
      ? item.disabled(row)
      : item.disabled;
  };
});


function handleCommand({ item, row }: any) {
  item.click(row);
}
function composeValue(item: any, row: any) {
  return {
    item,
    row,
  };
}

function show(index: number) {
  instance.refs[`dropdown${index}`].handleOpen();
}
function hide(index: number) {
  instance.refs[`dropdown${index}`].handleClose();
}
defineExpose({
  show,
  hide
})
</script>
