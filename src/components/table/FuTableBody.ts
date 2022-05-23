import { h } from 'vue'

const isFix = (node: any) => {
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0
  const { fix } = node.props
  let { type } = node.props
  return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
}

const getLabel = (node: any) => {
  if (node.props.label) return node.props.label
  const prefix = "FU-T-"
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0
  let { label, type } = node.props
  if (includeTag) label = prefix + "dropdown"
  label ??= node.props.label
  label ??= prefix + type
  return label;
}
const FuTableBody = (props: any, context: any) => {
  const slots = context.slots.default()
  const nodes: any = [];
  let { columns } = props
  const children = slots[0].children.filter((c: any) => c.type.name !== undefined)
  if (!children) return nodes
  if (!columns || columns?.length === 0) return children
  columns.forEach((col: any) => {
    let node = children.find((child: any) => {
      return col.label === getLabel(child)
    })
    if (node && (isFix(node) || col.show !== false)) {
      nodes.push(node);
    }
  })
  return nodes
}

export default FuTableBody;


