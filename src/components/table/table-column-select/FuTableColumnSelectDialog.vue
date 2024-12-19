<template>
  <div style="display: inline-block">
    <el-button class="fu-search-bar-button" :icon="icon" @click="visible = true">
      <template v-slot:[slotName]>
        {{ t('fu.table.custom_table_rows') }}
      </template>
    </el-button>
    <el-dialog class="fu-table-column-select-dialog" v-model="visible" @open="open" :show-close="false" append-to-body>
      <template #header>
        <h3>
          {{ header }}
        </h3>
        <el-alert :title="t('fu.table.custom_table_fields_desc')" type="info" :closable="false"/>
      </template>

      <el-checkbox v-for="(c, i) in cloneColumns" :key="i" v-model="c.show" :checked="c.show !== false" draggable="true"
                   @dragstart="dragstart($event, i)" @dragenter="dragenter" @dragleave="dragleave" @dragover.prevent
                   @dragend="dragend" @drop="drop($event, cloneColumns, i)" v-show="!c.fix">
        {{ c.label }}
      </el-checkbox>

      <template #footer>
        <el-button @click="cancel">
          {{ t('fu.table.cancel') }}
        </el-button>
        <el-button type="primary" @click="ok">
          {{ t('fu.table.ok') }}
        </el-button>
      </template>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {tableColumnSelect} from "./utils"
import {useLocale} from "@/hooks"

const props = defineProps({
  icon: {
    type: String,
    default: "Setting"
  },
  onlyIcon: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  }
})

const {t} = useLocale()

const slotName = computed(() => props.onlyIcon ? 'onlyIcon' : 'default')

const cloneColumn = (source: any, target: any) => {
  source.forEach((col: any) => {
    target.push({...col})
  })
  return target
}


const {
  dragstart,
  dragenter,
  dragleave,
  dragend,
  drop
} = tableColumnSelect()

const cloneColumns = ref([]) as any
const visible = ref(false)

const header = computed(() => {
  return props.title || t('fu.table.custom_table_fields')
});

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

function cancel() {
  cloneColumns.value = []
  visible.value = false
}

</script>
