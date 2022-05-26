<template>
  <!-- v-outside-click="outsideClickClose" -->
  <div class="fu-speed-dial" :style="style">
    <div class="fu-speed-dial__content">
      <slot name="fab">
        <fu-speed-dial-button v-bind="buttonProps" @click="click" @mousedown="mousedown" />
      </slot>
      <div :style="contentPosition">
        <slot>
          <fu-speed-dial-item v-for="(item, index) in items" :index="index" :key="index" v-bind="item"
            @click="itemClick" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuSpeedDial",
};
</script>
<script setup lang="ts">
import { reactive, ref, watch, getCurrentInstance, onMounted, computed, provide, useSlots } from "vue";
import type { CSSProperties } from 'vue'
// import OutsideClick from "element-ui/src/utils/clickoutside"
// directives: { OutsideClick },
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton.vue"
import FuSpeedDialItem from "@/components/speed-dial/FuSpeedDialItem.vue"
const props = defineProps({
  id: String,
  value: Boolean,
  type: {
    type: String,
    default: "primary"
  },
  items: Array,
  size: {
    type: String,
    default: "default",
    validator: (value: string) => ["big", "default", "medium", "small"].includes(value)
  },
  direction: {
    type: String,
    default: "top",
    validator: (value: string) => ["top", "bottom", "left", "right"].includes(value)
  },
  icon: {
    type: String,
    default: "el-icon-plus"
  },
  activeIcon: {
    type: String,
    default: "el-icon-close"
  },
  movable: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    validator: (value: string) => ["absolute", "fixed"].includes(value)
  },
  left: String,
  top: String,
  right: String,
  bottom: String,
  zIndex: {
    type: [String, Number],
    default: 99
  },
  itemClickClose: {
    type: Boolean,
    default: true
  },
  outsideClose: {
    type: Boolean,
    default: true
  },
  manual: {
    type: Boolean,
    default: false
  },
  localKey: String,
  sizeOptions: {
    type: Object,
    default: () => {
      return {
        big: {
          fab: { size: 56, fontSize: "18px" },
          item: { size: 40, spacing: 0, titleFontSize: "14px", buttonFontSize: "18px" }
        },
        default: {
          fab: { size: 40, fontSize: "16px" },
          item: { size: 32, spacing: 0, titleFontSize: "14px", buttonFontSize: "16px" }
        },
        medium: {
          fab: { size: 36, fontSize: "14px" },
          item: { size: 28, spacing: 0, titleFontSize: "12px", buttonFontSize: "14px" }
        },
        small: {
          fab: { size: 32, fontSize: "12px" },
          item: { size: 24, spacing: 0, titleFontSize: "12px", buttonFontSize: "12px" }
        },
      }
    }
  },
})

const emit = defineEmits(["close", "outside-click", "click"])

const slots = useSlots()
const instance = getCurrentInstance()

const { zIndex, position, left, top, right, bottom } = props

const active = ref(false)
const moving = ref(false)
const style = reactive({ zIndex, position, left, top, right, bottom }) as any
const updateStyle = function () {
  style.value = { zIndex, position, left, top, right, bottom }
}

provide("FuSpeedDial", instance)

watch(() => props.value, (v) => {
  active.value = v
})
watch(() => props.position, updateStyle)
watch(() => props.zIndex, updateStyle)
watch(() => props.left, updateStyle)
watch(() => props.right, updateStyle)
watch(() => props.top, updateStyle)
watch(() => props.bottom, updateStyle)

const saveKey = computed(() => {
  return "Fu-SD-" + props.localKey
})
const hashChildren = computed(() => {
  if (props.items && props.items.length > 0) {
    return true
  }
  return slots && slots.default
})
const config = computed(() => {
  return props.sizeOptions[props.size] || props.sizeOptions["default"]
})
const buttonProps = computed(() => {
  let type = props.type
  let rotate = true
  let activeValue = active.value
  let size = config.value.fab.size + "px"
  let fontSize = config.value.fab.fontSize
  let icon = props.activeIcon === props.icon ? props.icon : active.value ? props.activeIcon : props.icon
  return { type, rotate, active: activeValue, size, fontSize, icon }
})
const spacing = computed(() => {
  let spacing = config.value.item.spacing || 0
  spacing += (config.value.fab.size - config.value.item.size) / 2
  return spacing
})

const contentPosition = computed(() => {
  let position = config.value.fab.size + spacing.value
  if (["top", "left"].includes(props.direction)) {
    position = -config.value.fab.size - spacing.value
  }

  let style: CSSProperties = { position: "absolute", zIndex: props.zIndex }
  if (["top", "bottom"].includes(props.direction)) {
    style.top = position + "px"
  } else {
    style.top = 0
    style.left = position + "px"
  }
  return style
})

function toggle(active?: any) {
  if (!moving.value && hashChildren.value) {
    active.value = active === undefined ? !active.value : active
  }
}

function outsideClickClose() {
  if (props.outsideClose && !props.manual) {
    toggle(false)
  }
  emit("outside-click", [props.id, active.value])
}
function click(e: Event) {
  if (!props.manual) {
    toggle()
  }
  emit("click", [props.id, active.value], e)
}
function mousedown() {
  if (moving.value) {
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
  }
}
function mousemove(e: MouseEvent) {
  moving.value = true
  if (props.position === "fixed") {
    const el = instance.vnode.el as HTMLElement
    const rect = el.getBoundingClientRect()
    let left = e.clientX - rect.width / 2
    let top = e.clientY - rect.height / 2
    style.value.left = left + 'px'
    style.value.top = top + 'px'
    delete style.value.right
    delete style.value.bottom
  }

  if (props.position === "absolute") {
    const { offsetLeft, offsetTop, clientWidth, clientHeight, offsetParent } = this.$el
    const maxWidth = offsetParent.clientWidth - clientWidth
    const maxHeight = offsetParent.clientHeight - clientHeight

    let left = offsetLeft + e.movementX
    let top = offsetTop + e.movementY
    if (left > 0 && left < maxWidth) {
      style.value.left = left + 'px'
      delete style.value.right
    }
    if (top > 0 && top < maxHeight) {
      style.value.top = top + 'px'
      delete style.value.bottom
    }
  }
}
function mouseup() {
  writePosition()
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
  setTimeout(() => moving.value = false)
}
function writePosition() {
  if (props.localKey) {
    localStorage.setItem(saveKey.value, JSON.stringify(style.value))
  }
}
function readPosition() {
  // *******????
  // if (this.savePosition) {
  let position = localStorage.getItem(saveKey.value)
  try {
    localStorage.getItem(saveKey.value)
    if (position) {
      style.value = JSON.parse(position)
    }
  } catch (e) {
    console.warn(saveKey.value + " error", e)
  }
  // }
}
function itemClick(arg: any, e: any) {
  console.log(arg)
  const { index } = arg
  if (index !== undefined) {
    const item = props.items[index];
    if (item.click && typeof item.click === "function") return item.click(arg, e)
  }
}

function close() {
  if (props.itemClickClose && !props.manual) {
    toggle(false)
  }
  emit("close", [props.id, active.value])
}

onMounted(() => {
  readPosition()
})


defineExpose({
  close
})

</script>
