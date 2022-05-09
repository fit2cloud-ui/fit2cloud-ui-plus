<template>
  <el-table class="fu-table" v-bind="$attrs" :key="key">
    <fu-table-body name="table-body" :columns="columns">
      <slot />
    </fu-table-body>
  </el-table>
</template>
<script lang="ts">
export default {
  name: "FuTable"
}
</script>

<script lang="ts" setup>
import { onMounted, useSlots, ref, watch, computed, onUpdated, provide } from "vue";
import FuTableBody from "@/components/table/FuTableBody";

const prefix = "FU-T-"

const isFix = (node: any) => {
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0
  const { fix } = node.props
  let { type } = node.props
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
}

const getLabel = (node: any) => {
  if (node.props.label) return node.props.label
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0
  let { label, type } = node.props
  if (includeTag) label = prefix + "dropdown"
  label ??= node.props.label
  label ??= prefix + type
  return label;
}

const cleanColumns = (columns: any) => {
  columns.splice(0, columns.length)
}

const updateNodes = (nodes: any) => {
  nodes.forEach((node: any) => {
    if (!node.type.key) {
      node.type.key = getLabel(node)
    }
  })
}

const initColumns = (nodes: any, columns: any) => {
  nodes.forEach((node: any) => {
    const label = getLabel(node)
    const fix = isFix(node);
    const { show } = node.props
    if (!label && !fix) {
      throw new Error("unfixed column's label is required.")
    }
    columns.push({ label, show, fix })
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
  if (columns.some((col: any) => col.label === undefined)) {
    columns.forEach((col: any, i: any) => {
      col.label ??= getLabel(nodes[i])
    })
  }
}
const props = defineProps({
  columns: Array,
  refresh: {
    type: Boolean,
    default: true,
  },
  localKey: String, // 如果需要记住选择的列，则这里添加一个唯一的Key

});

const slots = useSlots()

const key = ref(0);

const columnsKey = computed(() => {
  return prefix + props.localKey
})
// 去掉v-if=false的node
const children = slots.default?.().filter((c: any) => c.type.name !== undefined)
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
  { deep: true }
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


provide("localKey", props.localKey)

onUpdated(() => {
  updateNodes(children)
  updateColumns(children, props.columns)
})

</script>
