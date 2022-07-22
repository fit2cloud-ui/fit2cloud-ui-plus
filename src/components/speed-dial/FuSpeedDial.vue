<template>
  <div class="fu-speed-dial" :style="style" v-click-outside="outsideClickClose">
    <div class="fu-speed-dial__content">
      <slot name="fab">
        <fu-speed-dial-button v-bind="buttonProps" @click="click" @mousedown="mousedown"/>
      </slot>
      <div :style="contentPosition">
        <slot>
          <fu-speed-dial-item v-for="(item, index) in items" :index="index" :key="index" v-bind="item"
                              @click="itemClick(index)"/>
        </slot>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref, watch, getCurrentInstance, onMounted, computed, provide, useSlots, PropType} from "vue";
import type {CSSProperties} from 'vue'
import type {ZIndexProperty, PositionProperty} from 'csstype'
import {ClickOutside as vClickOutside} from 'element-plus'
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton.vue"
import FuSpeedDialItem from "@/components/speed-dial/FuSpeedDialItem.vue"
import {SpeedDialKey} from "./types";

defineOptions({name: "FuSpeedDial"});
const props = defineProps({
  modelValue: Boolean,
  id: String,
  type: {
    type: String,
    default: "primary"
  },
  items: Array as any,
  size: {
    type: String,
    default: "default",
    validator: (value: string) => ["large", "default", "small"].includes(value)
  },
  direction: {
    type: String,
    default: "top",
    validator: (value: string) => ["top", "bottom", "left", "right"].includes(value)
  },
  icon: {
    type: String,
    default: "Plus"
  },
  activeIcon: {
    type: String,
    default: "Close"
  },
  movable: {
    type: Boolean,
    default: false
  },
  position: {
    type: String as PropType<PositionProperty>,
    validator: (value: string) => ["absolute", "fixed"].includes(value)
  },
  left: String,
  top: String,
  right: String,
  bottom: String,
  zIndex: {
    type: ([String, Number]) as PropType<ZIndexProperty>,
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
        large: {
          fab: {size: 56, fontSize: "18px"},
          item: {size: 40, spacing: 0, titleFontSize: "14px", buttonFontSize: "18px"}
        },
        default: {
          fab: {size: 40, fontSize: "16px"},
          item: {size: 32, spacing: 0, titleFontSize: "14px", buttonFontSize: "16px"}
        },
        small: {
          fab: {size: 32, fontSize: "12px", padding: 0},
          item: {size: 24, spacing: 0, titleFontSize: "12px", buttonFontSize: "12px"}
        },
      }
    }
  },
})

const emit = defineEmits(["close", "outside-click", "click"])

const slots = useSlots()
const instance = getCurrentInstance()

const active = ref(false)
const moving = ref(false)

const {zIndex, position, left, top, right, bottom} = props
const style = ref({zIndex, position, left, top, right, bottom})

watch(() => props.modelValue, (v) => {
  active.value = v
})
watch(() => props.position, () => updateStyle())
watch(() => props.zIndex, () => updateStyle())
watch(() => props.left, () => updateStyle())
watch(() => props.right, () => updateStyle())
watch(() => props.top, () => updateStyle())
watch(() => props.bottom, () => updateStyle())

function updateStyle() {
  const {zIndex, position, left, top, right, bottom} = props
  style.value = {zIndex, position, left, top, right, bottom}

}

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
  let rotate = true
  let size = config.value.fab.size + "px"
  let fontSize = config.value.fab.fontSize
  let icon = props.activeIcon === props.icon ? props.icon : active.value ? props.activeIcon : props.icon
  return {type: props.type, rotate, active: active.value, size, fontSize, icon}
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

  let positionStyle: CSSProperties = {position: "absolute", zIndex: props.zIndex}
  if (["top", "bottom"].includes(props.direction)) {
    positionStyle.top = position + "px"
  } else {
    positionStyle.top = 0
    positionStyle.left = position + "px"
  }
  return positionStyle
})


function toggle(bool?: any) {
  if (!moving.value && hashChildren.value) {
    active.value = bool === undefined ? !active.value : bool
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
  if (props.movable) {
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
  }
}

function mousemove(e: MouseEvent) {
  moving.value = true
  if (props.position === "fixed") {
    const el = instance?.vnode.el as HTMLElement
    const rect = el.getBoundingClientRect()
    let left = e.clientX - rect.width / 2
    let top = e.clientY - rect.height / 2
    style.value.left = left + 'px'
    style.value.top = top + 'px'
    delete style.value.right
    delete style.value.bottom
  }
  if (props.position === "absolute") {
    const {offsetLeft, offsetTop, clientWidth, clientHeight, offsetParent} = instance?.vnode.el as HTMLElement

    const maxWidth = offsetParent && offsetParent.clientWidth || 0 - clientWidth
    const maxHeight = offsetParent && offsetParent.clientHeight || 0 - clientHeight

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

function itemClick(index: any) {
  if (index !== undefined) {
    const item = props.items[index] as any;
    if (item.click && typeof item.click === "function") return item.click(index)
  }
}

function close() {
  if (props.itemClickClose && !props.manual) {
    toggle(false)
  }
  emit("close", [props.id, active.value])
}


provide(SpeedDialKey, {
  config: config.value,
  direction: computed(() => props.direction),
  active: active,
  close

})
onMounted(() => {
  readPosition()
})

defineExpose({
  close
})

</script>
