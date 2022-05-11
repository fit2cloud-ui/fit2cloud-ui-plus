<template>
  <div style="display: inline-block">
    <el-tooltip content="自定义表格字段">
      <!-- :size="configSize"  -->
      <fu-search-bar-button :icon="icon" @click="visible = true" />
    </el-tooltip>
    <el-dialog custom-class="fu-table-column-select-dialog" v-model:visible="visible" @open="open" append-to-body>
      <template #title>
        <h3>
          自定义表格字段
          <!-- {{ t('fu.table.custom_table_fields') }} -->
        </h3>
        <el-alert title="固定字段不在选择范围，可拖拽自定义顺序" type="info" :closable="false" />
      </template>

      <el-checkbox v-for="(c, i) in cloneColumns" :key="i" v-model="c.show" :checked="c.show !== false" draggable="true"
        @dragstart="dragstart($event, i)" @dragenter="dragenter" @dragleave="dragleave"
        @dragover.prevent @dragend="dragend" @drop="drop($event, cloneColumns, i)" v-show="!c.fix">
        {{ c.label }}
      </el-checkbox>

      <template #footer>
        <el-button @click="reset" v-if="columnsKey">重置
          <!-- {{ t('fu.table.reset') }} -->
        </el-button>
        <el-button type="primary" @click="ok">确定
          <!-- {{ t('fu.table.ok') }} -->
        </el-button>
      </template>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { tableColumnSelect } from "./utils"
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton.vue"

const props = defineProps({
  icon: {
    type: String,
    default: "Grid"
  },
  trigger: {
    type: String,
    default: "hover",
    validator: (value: string) => ['click', 'hover'].includes(value)
  },
  columns: {
    type: Array,
    default: () => []
  },

})

const localKey = inject("localKey")

const cloneColumn = (source: any, target: any) => {
  source.forEach((col: any) => {
    target.push(Object.assign({}, col))
  })
  return target
}


const { 
  columnsKey,
  dragstart,
  dragenter,
  dragleave,
  dragend,
  drop } = tableColumnSelect(localKey)

const cloneColumns = ref([])
const visible = ref(false)

function open() {
  cloneColumns.value = []
  cloneColumn(props.columns, cloneColumns)
}
function ok() {
  props.columns.splice(0, props.columns.length)
  cloneColumns.value.forEach(c => {
    props.columns.push(c)
  })
  visible.value = false
}
function reset() {
  if (columnsKey) {
    localStorage.removeItem(columnsKey)
  }
  props.columns.splice(0, props.columns.length)
  visible.value = false
}

</script>
