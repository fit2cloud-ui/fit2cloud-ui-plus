<template>
  <div style="display: inline-block">
    <el-button class="fu-search-bar-button" :icon="icon" @click="visible = true" >{{ t('fu.table.custom_table_rows') }}
    </el-button>
    <el-dialog custom-class="fu-table-column-select-dialog" v-model="visible" @open="open" append-to-body>
      <template #header>
        <h3>
          {{ t('fu.table.custom_table_fields') }}
        </h3>
        <el-alert :title="t('fu.table.custom_table_fields_desc')" type="info" :closable="false" />
      </template>

      <el-checkbox v-for="(c, i) in cloneColumns" :key="i" v-model="c.show" :checked="c.show !== false" draggable="true"
        @dragstart="dragstart($event, i)" @dragenter="dragenter" @dragleave="dragleave" @dragover.prevent
        @dragend="dragend" @drop="drop($event, cloneColumns, i)" v-show="!c.fix">
        {{ c.label }}
      </el-checkbox>

      <template #footer>
        <el-button @click="reset" v-if="columnsKey">
          {{ t('fu.table.reset') }}
        </el-button>
        <el-button type="primary" @click="ok">
          {{ t('fu.table.ok') }}
        </el-button>
      </template>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { tableColumnSelect } from "./utils"
import { useLocale } from "@/hooks"

const props = defineProps({
  icon: {
    type: String,
    default: "Setting"
  },
  columns: {
    type: Array,
    default: () => []
  },

})

const localKey = inject("localKey")

const { t } = useLocale()

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
  drop
} = tableColumnSelect(localKey)

const cloneColumns = ref([]) as any
const visible = ref(false)

function open() {
  cloneColumns.value = []
  cloneColumn(props.columns, cloneColumns.value)
}

function ok() {
  props.columns.splice(0, props.columns.length)
  cloneColumns.value.forEach((c: any) => {
    props.columns.push(c)
  })
  visible.value = false
}

function reset() {
  if (columnsKey) {
    localStorage.removeItem(columnsKey.value)
  }
  props.columns.splice(0, props.columns.length)
  visible.value = false
}

</script>
