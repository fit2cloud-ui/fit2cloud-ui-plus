<template>
  <el-table class="fu-table" v-bind="$attrs" :key="key" header-row-class-name="fu-table-header" ref="refElTable">
    <fu-table-body name="table-body" :columns="columns">
      <slot/>
    </fu-table-body>
    <template v-slot:append>
      <slot name="append"/>
    </template>
    <template v-slot:empty>
      <slot name="empty"/>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import {onMounted, useSlots, ref, watch, computed, onUpdated, VNodeNormalizedChildren, VNode} from "vue";
import {isFix, getLabel, getProp, FuTableBody} from "@/components/table/FuTableBody";
import {isValidElementNode, getChildren, isValidChildren} from "@/tools/vnode";

defineOptions({name: "FuTable"});
const props = defineProps({
  columns: Array,
  refresh: {
    type: Boolean,
    default: true,
  },
  localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key
  refTable: String
});

const refElTable = ref(null)

const slots = useSlots().default?.()

const key = ref(0);

const prefix = "FU-T-"

const cleanColumns = (columns: any) => {
  columns.splice(0, columns.length)
}

const updateNodes = (nodes: any) => {
  nodes.forEach((node: any) => {
    if (isValidElementNode(node) && !(node.type as any).key) {
      (node.type as any).key = getProp(node)
    }
  })
}

const initColumns = (nodes: any, columns: any) => {
  nodes.forEach((node: any) => {
    const label = getLabel(node)
    const prop = getProp(node)
    const fix = isFix(node);
    const {show} = node.props
    if (!prop && !fix) {
      throw new Error("unfixed column's label is required.")
    }
    columns.push({label, prop, show, fix})
  })
}

const copyColumns = (source: any, target: any) => {
  source.forEach((col: any) => {
    target.push(col)
  })
}

const updateColumns = (nodes: any, columns: any) => {
  if (columns === undefined) return
  // 如果保存的列跟实际的列冲突则以实际的为准
  if (nodes.length !== columns.length) {
    cleanColumns(columns)
    initColumns(nodes, columns)
  }
  // 更新label和prop
  columns.forEach((col: any, i: any) => {
    col.prop = getProp(nodes[i])
    col.label = getLabel(nodes[i])
  })
}


const columnsKey = computed(() => {
  return prefix + props.localKey
})

// 去掉v-if=false的node
let children: VNodeNormalizedChildren | VNode[]
if (slots) {
  if (isValidChildren(slots)) {
    children = slots
  }
  children = getChildren(slots)
}

watch(() => props.columns,
  () => {
    // 设置refresh，可以避免抖动或闪烁，但是table会更新一次
    if (props.refresh) {
      key.value++;
    }
    if (props.localKey) {
      localStorage.setItem(columnsKey.value, JSON.stringify(props.columns));
    }

  },
  {deep: true}
)
// 之前的created
onMounted(() => {
  updateNodes(children)
  // 表格没有内容或者不需要选列
  if (!children || !props.columns) return

  // 需要读取localStorage
  if (props.localKey) {
    let str = localStorage.getItem(columnsKey.value)
    if (str) {
      try {
        const columns = JSON.parse(str)
        cleanColumns(props.columns)
        copyColumns(columns, props.columns)
        updateColumns(children, props.columns)
        return
      } catch (e) {
        console.error("get columns error", e)
      }
    }
  }

  if (props.columns.length === 0) {
    initColumns(children, props.columns)
  }
})

onUpdated(() => {
  updateNodes(children)
  updateColumns(children, props.columns)
})

defineExpose({
  refElTable
})
</script>
