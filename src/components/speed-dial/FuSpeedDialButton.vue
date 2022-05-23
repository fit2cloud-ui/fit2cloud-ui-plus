<template>
  <div :class="[
    'fu-speed-dial-button',
    'fu-speed-dial-button--' + type,
    {
      'fu-speed-dial-button--rotate': rotate,
      'is-disabled': disabled,
      'is-active': active,
    }, ]" 
    :style="{
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    color: color,
    fontSize: fontSize }">
    <slot>
      <i :class="icon" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { validateType } from "@/tools/theme"
const props = defineProps({
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
