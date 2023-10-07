<template>
  <div class="fu-icon-button" :class="[{'is-disabled':disabled}, typeClass]" :tabindex="tabindex" @click="click">
    <slot>
      <el-icon :color="color" :size="size" :class="{'is-loading': loading}">
        <component :is="name"/>
      </el-icon>
    </slot>
  </div>
</template>


<script setup lang="ts">

import {computed} from "vue";
import {validateType} from "@/tools/theme";

defineOptions({name: "FuIconButton"});

const props = defineProps({
  name: String,
  size: {
    type: [Number, String],
    default: 20,
  },
  color: String,
  loading: Boolean,
  disabled: Boolean,
  type: {
    type: String,
    validator: validateType
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
})

const typeClass = computed(() => {
  return props.type ? `fu-icon-button--${props.type}` : ""
})

const emit = defineEmits(["click"])

function click(e: MouseEvent) {
  if (!props.disabled) {
    emit("click", e)
  }
}

</script>
