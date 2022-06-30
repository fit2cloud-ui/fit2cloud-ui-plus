<template>
  <div class="fu-speed-dial-action-button">
    <div v-if="title" class="fu-speed-dial-action-button__title" :style="titleSize">
      <slot name="title">
        <div class="fu-speed-dial-action-button__text" :class="titleClass" :style="titleStyle" @click="click">{{ title
        }}
        </div>
      </slot>
    </div>
    <slot>
      <fu-speed-dial-button :class="buttonClass" v-bind="buttonProps" :icon="icon" @click="click" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CSSProperties } from 'vue'
import FuSpeedDialButton from "@/components/speed-dial/FuSpeedDialButton.vue";
import { SpeedDialKey } from "./types";

const props = defineProps({
  index: Number,
  icon: {
    type: String,
    default: "Plus"
  },
  titleClass: String,
  titleBgColor: String,
  titleColor: String,
  buttonClass: String,
  bgColor: String,
  color: String,
  title: [String, Number]
})

const emit = defineEmits(["click"])
const speedDialKey = inject(SpeedDialKey)

const config = computed(() => {
  return speedDialKey?.config;
})

const direction = computed(() => {
  return speedDialKey?.direction.value || "";
})
// const clickClose =computed(()=>{
//     return FuSpeedDial.clickClose;
// })

const titleSize = computed(() => {
  let size = config.value?.fab.size + "px";
  let style: CSSProperties = { position: "absolute", height: size };
  if (["top", "bottom"].includes(direction.value)) {
    style['text-align'] = "right"
    style['right'] = size
  } else {
    style['text-align'] = "center"
    style['min-width'] = size
    if (props.index || 0 % 2 === 0) {
      style.top = size
    } else {
      style.top = "-" + size
    }
  }
  return style;
})

const titleStyle = computed(() => {
  let backgroundColor = props.titleBgColor;
  let color = props.titleColor
  let fontSize = config.value?.item.titleFontSize
  return { backgroundColor, color, fontSize }
})

const buttonProps = computed(() => {
  let backgroundColor = props.bgColor;
  let color = props.color
  let fontSize = config.value?.item.buttonFontSize
  let size = config.value?.item.size + "px";
  return { backgroundColor, color, fontSize, size }
})
function click(e: Event) {
  const { index, title } = props
  emit("click", { index, title }, e);
  speedDialKey?.close();
}
</script>
