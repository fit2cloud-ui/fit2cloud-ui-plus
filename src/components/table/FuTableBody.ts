import {getChildren} from "@/tools/vnode";
import {isArray} from "@vue/shared";

export const isFix = (node: any) => {
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0;
  const {fix} = node.props;
  let {type} = node.props;
  return (
    (fix !== undefined && fix !== false) ||
    ["selection", "index", "expand"].includes(type) ||
    includeTag
  );
};

export const getLabel = (node: any) => {
  if (node.props.label) return node.props.label;
  const prefix = "FU-T-";
  const includeTag = node.type.name.indexOf("FuTableColumnDropdown") >= 0;
  let {label, type} = node.props;
  if (includeTag) label = prefix + "dropdown";
  label ??= node.props.label;
  label ??= prefix + type;
  return label;
};

export const FuTableBody = (props: any, context: any) => {
  let slots = context.slots.default();
  const nodes: any = [];
  let {columns} = props;
  let children = getChildren(slots);
  if (!children) return nodes;
  if (!columns || columns?.length === 0) return children;
  columns.forEach((col: any) => {
    if (isArray(children)) {
      let node = children.find((child: any) => {
        return col.label === getLabel(child) && child.type.name !== undefined;
      });
      if (node && (isFix(node) || col.show !== false)) {
        nodes.push(node);
      }
    }
  });
  return nodes;
};
