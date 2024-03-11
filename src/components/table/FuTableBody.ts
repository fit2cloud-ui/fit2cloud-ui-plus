import {getChildren} from "@/tools/vnode";
import {isArray} from "@vue/shared";
import {ref} from "vue";

export const isFix = (node: any) => {
  const includeTag = node.type.name.indexOf("FuTableOperations") >= 0;
  const {fix, prop, type} = node.props;
  return (
    prop === undefined ||
    (fix !== undefined && fix !== false) ||
    ["selection", "index", "expand"].includes(type) ||
    includeTag
  );
};

export const getLabel = (node: any) => {
  if (node.props.label) return node.props.label;
  return node.props.type || node.props.prop;
};

export const getProp = (node: any) => {
  if (node.props.prop) return node.props.prop;
  return node.props.label;
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
        const isColNode = col.prop === getProp(child) && child.type.name !== undefined;
        // 多语言切换
        if (isColNode && child.props.label !== col.label && col.prop !== undefined) {
          col.label = child.props.label
        }
        return isColNode
      });
      if (node && (isFix(node) || col.show !== false)) {
        nodes.push(node);
      }
    }
  });
  return nodes;
};
