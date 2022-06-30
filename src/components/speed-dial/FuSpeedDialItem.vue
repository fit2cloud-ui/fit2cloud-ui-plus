<template>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="isActive" class="fu-speed-dial-item" :style="itemSize">
      <slot>
        <fu-speed-dial-action-button :index="index" v-bind="$attrs" />
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import FuSpeedDialActionButton from "@/components/speed-dial/FuSpeedDialActionButton.vue";
import { SpeedDialKey } from "./types";
defineOptions({ name: "FuSpeedDialItem" });
const props = defineProps({
  index: {
    type: Number,
    required: true
  },
})
const speedDialKey = inject(SpeedDialKey)

const config = computed(() => {
  return speedDialKey?.config;
})

const direction = computed(() => {
  return speedDialKey?.direction.value || "";
})
const isActive = computed(() => {
  return speedDialKey?.active?.value;
})

const spacing = computed(() => {
  return config.value.item.spacing || 0;
})

const directionPosition = computed(() => {
  if (["top", "left"].includes(direction.value)) {
    return -config.value?.fab?.size - spacing.value
  }
  return config.value?.fab?.size + spacing.value
})

const itemSize = computed(() => {
  let size = config.value?.fab?.size + "px";
  return {
    width: size,
    height: size,
  }
})

function setPosition(el: HTMLElement, position: any) {
  if (["top", "bottom"].includes(direction.value)) {
    el.style.transform = "translateY(" + position + ")"
  } else {
    el.style.transform = "translateX(" + position + ")"
  }
}
function beforeEnter(el: HTMLElement) {
  el.style.transition = "all 0.3s"
  el.style.position = "absolute"
  setPosition(el, 0)
  el.style.opacity = "0"
}
function enter(el: HTMLElement, done: Function) {
  let position = props.index * directionPosition.value + "px"
  setTimeout(() => {
    setPosition(el, position)
    el.style.opacity = "1"
    done()
  })
}
function leave(el: HTMLElement, done: Function) {
  setPosition(el, 0)
  el.style.opacity = "0"
  setTimeout(() => {
    done()
  }, 200)
}
</script>
