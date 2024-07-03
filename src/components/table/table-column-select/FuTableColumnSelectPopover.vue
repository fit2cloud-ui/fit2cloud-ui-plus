<template>
  <el-popover class="fu-table-column-select" :popper-class="popperClass" :trigger="trigger"
              :show-arrow="false" :style="{'visibility': hasSelect ? 'visible': 'hidden'}">
    <h3>
      {{ header }}
    </h3>
    <div class="fu-table-column-select-popper__body">
      <div v-for="(c, i) in columns" :key="i" class="fu-table-column-select-popper__item">
        <el-checkbox v-model="c.show" :checked="c.show !== false" draggable="true" @dragstart="dragstart($event, i)"
                     @dragenter="dragenter" @dragleave="dragleave" @dragover.prevent @dragend="dragend"
                     @drop="drop($event, columns, i)" v-show="!c.fix">
          {{ c.label }}
        </el-checkbox>
      </div>
    </div>
    <div class="fu-table-column-select-popper__footer">
      <el-button @click="reset" v-if="columnsKey">
        {{ t('fu.table.reset') }}
      </el-button>
    </div>

    <template #reference>
      <el-button class="fu-search-bar-button" :icon="icon">
        <template v-slot:[slotName]>
          {{ t('fu.table.custom_table_rows') }}
        </template>
      </el-button>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import {computed, inject} from "vue";
import {tableColumnSelect} from "./utils"
import {useLocale} from "@/hooks"
import {LocalKey} from "../types";

const props = defineProps({
  icon: {
    type: String,
    default: "Setting"
  },
  onlyIcon: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: "click",
    validator: (value: string) => ['click', 'hover'].includes(value)
  },
  columns: {
    type: Array as any,
    default: () => []
  },
  popperClass: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
});

const {t} = useLocale()

const localKey = inject(LocalKey, undefined)

const {
  columnsKey,
  dragstart,
  dragenter,
  dragleave,
  dragend,
  drop
} = tableColumnSelect(localKey)

const slotName = computed(() => props.onlyIcon ? 'onlyIcon' : 'default')

const isFixAll = computed(() => {
  return props.columns?.every((c: any) => {
    return c.fix
  })
});

const hasSelect = computed(() => {
  return props.columns?.length > 0 && !isFixAll.value
});

const header = computed(() => {
  return props.title || t('fu.table.custom_table_fields')
});

function reset() {
  if (columnsKey) {
    localStorage.removeItem(columnsKey.value)
  }
  props.columns.splice(0, props.columns.length)
}
</script>
