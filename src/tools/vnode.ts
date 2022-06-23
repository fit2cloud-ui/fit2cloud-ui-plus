import {
  Comment,
  Fragment,
  isVNode,
} from 'vue'
import type {
  VNode,
  VNodeNormalizedChildren,
} from 'vue'
import {isArray} from "@vue/shared";

export function isFragment(node: VNode): boolean
export function isFragment(node: unknown): node is VNode
export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment
}

export function isComment(node: VNode): boolean
export function isComment(node: unknown): node is VNode
export function isComment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Comment
}

export function isValidElementNode(node: VNode): boolean
export function isValidElementNode(node: unknown): node is VNode
export function isValidElementNode(node: unknown): node is VNode {
  return isVNode(node) && !isFragment(node) && !isComment(node)
}

export function isValidChildren(children: VNodeNormalizedChildren): children is VNodeNormalizedChildren {
  return Array.isArray(children) ? isValidElementNode(children[0]) : false
}

export function getChildren(
  nodes: VNodeNormalizedChildren | VNode[],
  depth = 5
): VNodeNormalizedChildren | VNode[] {
  let node = isArray(nodes) ? nodes[0] : nodes
  if (isFragment(node)) {
    if (isValidChildren(node.children)) return node.children
    if (depth > 0) {
      return getChildren(node.children[0], depth - 1)
    }
  }
  if (isValidChildren(nodes)) return nodes
  return []
}
