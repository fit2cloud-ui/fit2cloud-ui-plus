import { h } from 'vue'

// const isFix = node => {
//   const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
//   const {fix} = node.data.attrs
//   let {type} = node.componentOptions.propsData
//   return (fix !== undefined && fix !== false) || ["selection", "index", "expand"].includes(type) || includeTag
// }

// const getLabel = node => {
//   if (node.data.key) return node.data.key
//   const prefix = "FU-T-"
//   const includeTag = node.tag.indexOf("FuTableColumnDropdown") >= 0
//   let {label, type} = node.componentOptions.propsData
//   if (includeTag) label = prefix + "dropdown"
//   label ??= node.data.attrs.label
//   label ??= prefix + type
//   return label
// }
const FuTableBody = (props: any, context: any) => {
  const slots = context.slots.default()
  const nodes: any = [];
  let { columns } = props
  const children = slots[0].children.filter((c: any) => c.type !== undefined)
  if (!children) return nodes
  if (!columns || columns?.length === 0) return children
  // columns.forEach(col => {
  //   let node = children.find(child => {
  //     return col.label === getLabel(child)
  //   })
  //   if (node && (isFix(node) || col.show !== false)) {
  //     nodes.push(node);
  //   }
  // })

  return h(`h${props.name}`, context.attrs, nodes)
}

export default FuTableBody;


