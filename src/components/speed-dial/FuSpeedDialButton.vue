<template>
  <div :class="[
  'fu-speed-dial-button',
  'el-button',
  'el-button--' + type,
  {
    'fu-speed-dial-button--rotate': rotate,
    'is-disabled': disabled,
    'is-active': active,
  },]" :style="{
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    color: color,
    fontSize: fontSize
  }">
    <slot>
      <el-icon>
        <component :is="icon" />
      </el-icon>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { validateType } from "@/tools/theme"
defineProps({
  type: {
    type: String,
    default: "default",
    validator: validateType
  },
  rotate: Boolean,
  disabled: Boolean,
  active: Boolean,
  icon: String,
  size: {
    type: String,
    default: "32px"
  },
  backgroundColor: String,
  color: String,
  fontSize: String
})
</script>
