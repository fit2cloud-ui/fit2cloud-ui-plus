<template>
  <div :style="{ cursor, userSelect }" class="fu-split-pane" ref="outerWrapper">
    <div :class="[`is-${direction}`, 'fu-split-pane__left']"
      :style="{ [attr]: isReverse ? valueAnother : `${usedValue}px`, 'padding-right': padding }">
      <slot :name="isHorizontal ? 'left' : 'top'"></slot>
    </div>
    <div :class="resizerClasses" :style="{ [resizerAttr]: `${usedValue}px`, ...resizerStyle }" @mousedown="onMouseDown"
      @mouseover="hover = true" @mouseleave="hover = false">
      <div class="icon" v-if="resizerType === 'resizer'">
        <slot name="resizer">
          <el-icon :size="10"><MoreFilled /></el-icon>
        </slot>
      </div>
    </div>
    <div :class="[`is-${direction}`, 'fu-split-pane__right']"
      :style="{ [attr]: isReverse ? `${usedValue}px` : valueAnother, 'padding-left': padding }">
      <slot :name="isHorizontal ? 'right' : 'bottom'"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, computed, nextTick, getCurrentInstance } from "vue";
defineOptions({ name: "FuSplitPane" });
const props = defineProps({
  min: {
    type: [Number, String],
    default: "10px",
  },
  left: [Number, String],
  right: [Number, String],
  top: [Number, String],
  bottom: [Number, String],
  direction: {
    validator: (val: string) => ["vertical", "horizontal"].includes(val),
    default: "horizontal",
  },
  localKey: String,
  resizable: {
    type: Boolean,
    default: true,
  },
  resizerType: {
    validator: (val: string) => ["resizer", "line"].includes(val),
    default: "resizer",
  },
  resizerClass: String,
  resizerStyle: Object,
  resizerHoverClass: String,

});
const emit = defineEmits(["changeSplit"])

const instance = getCurrentInstance()

const active = ref(false)
const usedValue = ref(0)
const oldValue = ref(0)
const initOffset = ref(0)
const hover = ref(false)

watch(() => props.left, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    nextTick(() => {
      usedValue.value = defaultValue.value;
    });
  }
}, { immediate: true })

watch(() => props.bottom, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    nextTick(() => {
      usedValue.value = defaultValue.value;
    });
  }
}, { immediate: true })


const isReverse = computed(() => {
  return props.right || props.bottom;
})

const isHorizontal = computed(() => {
  return props.direction === "horizontal";
})

const userSelect = computed(() => {
  return active.value ? "none" : "" as any
})

const cursor = computed(() => {
  return active.value && props.resizable
    ? isHorizontal.value
      ? "col-resize"
      : "row-resize"
    : "";
})

const outerWrapperSize = computed(() => {
  return instance.refs.outerWrapper[offsetSize.value];
})

const offsetSize = computed(() => {
  return isHorizontal.value ? "offsetWidth" : "offsetHeight";
})

const defaultValue = computed(() => {
  if (isHorizontal.value) {
    return props.left
      ? getMin(percentToValue(props.left))
      : (props.right && getMin(percentToValue(props.right))) ||
      outerWrapperSize.value / 2;
  } else {
    return props.top
      ? getMin(percentToValue(props.top))
      : (props.bottom && getMin(percentToValue(props.bottom))) ||
      outerWrapperSize.value / 2;
  }
})
const valueAnother = computed(() => {
  return `calc(100% - ${usedValue.value}px)`;
})

const attr = computed(() => {
  return isHorizontal.value ? "width" : "height";
})

const resizerAttr = computed(() => {
  return isHorizontal.value
    ? isReverse.value
      ? "right"
      : "left"
    : isReverse.value
      ? "bottom"
      : "top" ;
})
const saveKey = computed(() => {
  return "Fu-SP-" + props.localKey;
})
const resizerClasses = computed(() => {
  const classes = [
    `fu-split-pane__${props.resizerType}`,
    `is-${props.direction}`,
    props.resizable && "is-resizable",
    props.resizerClass,
    hover.value && (props.resizerHoverClass || "hover"),
  ];
  return classes;
})
const padding = computed(() => {
  return props.resizerType === "resizer" && isHorizontal.value && "3px" as any;
})



function onMouseDown(e: MouseEvent) {
  initOffset.value = isHorizontal.value ? e.pageX : e.pageY;
  oldValue.value = usedValue.value;
  active.value = true;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}
function onMouseUp() {
  active.value = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
  emit("changeSplit", usedValue.value);
}
function onMouseMove(e: MouseEvent) {
  if (!props.resizable) return;
  if (active.value) {
    const currentPage = isHorizontal.value ? e.pageX : e.pageY;
    const offset = currentPage - initOffset.value;
    const value = isReverse.value
      ? oldValue.value - offset
      : oldValue.value + offset;
    if (
      value > percentToValue(props.min) &&
      value < outerWrapperSize.value - percentToValue(props.min)
    ) {
      usedValue.value = value;
      writeValue();
    }
  }
}
// 百分比换算成像素
function percentToValue(val: any) {
  const size = instance.refs.outerWrapper[offsetSize.value];
  if (typeof val === "string" && val.includes("%")) {
    return (parseInt(val) / 100) * size;
  } else {
    return parseInt(val);
  }
}
// 是否取最小值
function getMin(val: any) {
  return val < percentToValue(props.min)
    ? percentToValue(props.min)
    : val;
}
// localStorage储存数值
function writeValue() {
  const obj = {
    [resizerAttr.value]: usedValue.value,
  };
  if (props.localKey) {
    localStorage.setItem(saveKey.value, JSON.stringify(obj));
  }
}

function readValue() {
  if (props.localKey) {
    const local = localStorage.getItem(saveKey.value);
    if (local && local[resizerAttr.value]) {
      usedValue.value = parseInt(local) || defaultValue.value;
    } else {
      usedValue.value = defaultValue.value;
    }
  } else {
    usedValue.value = defaultValue.value;
  }
}

onMounted(() => {
  readValue()
});
</script>

