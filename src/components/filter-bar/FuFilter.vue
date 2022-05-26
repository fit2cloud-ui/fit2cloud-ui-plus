<template>
  <div class="fu-filter">
    <div class="fu-filter__result">{{ count }} <span style="opacity: 0.6">{{ t('fu.filter_bar.results') }}</span></div>
    <div class="fu-filter__split" />

    <div class="fu-filter__scroll" @mousedown="left" @mouseup="mouseup" v-if="scroll">
      <i class="el-icon-arrow-left"></i>
    </div>
    <fu-filter-conditions :conditions="conditions" @change="change" />

    <div class="fu-filter__scroll" @mousedown="right" @mouseup="mouseup" v-if="scroll">
      <i class="el-icon-arrow-right"></i>
    </div>

    <div class="fu-filter__clear" @click="clear" v-if="conditions.length > 0">
      <i class="el-icon-delete" />
      {{ t('fu.filter_bar.clear') }}
    </div>

    <el-drawer :size="drawerWidth" custom-class="fu-filter__drawer" :title="t('fu.filter_bar.drawer_title')"
      v-model="drawer" @open="initComponents" v-show="show" :modal="modal">
      <div class="drawer-body">
        <slot>
          <component v-for="(c, i) in components" :key="i" :is="c.component" v-bind="c" :ref="c.field" v-on="c" />
        </slot>
        <!-- :size="configSize"  -->
      </div>
      <div class="drawer-footer">
        <slot name="footer">
          <el-button @click="drawer = false">{{ t('fu.filter_bar.cancel') }}</el-button>
          <el-button type="primary" @click="filter">{{ t('fu.filter_bar.search') }}</el-button>
        </slot>
        <!-- :size="configSize"  -->
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuSearchBar",
};
</script>

<script setup lang="ts">
import { ref, computed, useSlots, onMounted, getCurrentInstance, nextTick } from "vue";
import FuFilterConditions from "@/components/filter-bar/FuFilterConditions.vue";
import { useLocale } from "@/hooks"

const { t } = useLocale()

const slots = useSlots()
const instance = getCurrentInstance()

const props = defineProps({
  count: {
    type: Number,
    default: 0
  },
  components: Array,
  drawerWidth: {
    type: [Number, String],
    default: "680px"
  }
})

const emit = defineEmits(["filter"])

const drawer = ref(true)
const conditions = ref([])
const show = ref(false)
const modal = ref(false)
const leftTimer = ref(null)
const rightTimer = ref(null)
const scroll = ref(false)

function mouseup() {
  clearInterval(leftTimer.value)
  clearInterval(rightTimer.value)
}
function left() {
  let conditions = instance?.vnode.el?.getElementsByClassName("fu-filter-conditions")[0]
  leftTimer.value = setInterval(() => {
    conditions.scrollLeft -= 15
  }, 50)
}
function right() {
  let conditions = instance?.vnode.el?.getElementsByClassName("fu-filter-conditions")[0]
  rightTimer.value = setInterval(() => {
    conditions.scrollLeft += 15
  }, 50)
}
function change() {
  nextTick(() => {
    let conditions = instance?.vnode.el?.getElementsByClassName("fu-filter-conditions")[0]
    scroll.value = conditions.getBoundingClientRect().width >= scrollWidth.value
  })
  emit("filter", conditions.value)
}
function setConditions(conditions: any) {
  conditions.value = []
  if (conditions) {
    Object.keys(conditions).forEach(key => {
      let value = conditions[key].value
      refs.value.forEach((r: any) => {
        if (r.field === key) {
          r.init(value)
          conditions.value.push(r.getCondition())
        }
      })
    })
    change();
  }
}
function filter() {
  conditions.value = []
  refs.value.forEach((r: any) => {
    let condition: any
    if (r.getCondition) {
      condition = r.getCondition()
    } else {
      console.warn("getCondition undefined", r)
    }
    if (condition && condition.value !== undefined) {
      conditions.value.push(condition)
    }
  })
  drawer.value = false
  change();
}

function open() {
  show.value = true
  drawer.value = true
}

function initComponents() {
  refs.value.forEach((r: any) => {
    if (r.init) {
      let condition = conditions.value.find(c => c.field === r.field)
      r.init(condition?.value)
    } else {
      console.warn("init undefined", r)
    }
  })
}
function clear() {
  conditions.value = []
  initComponents()
  change();
}

const scrollWidth = computed(() => {
  const el = instance?.vnode.el as HTMLElement
  return el.getBoundingClientRect().width - 210
});

const refs = computed(() => {
  let refs: any = [];
  if (slots.default?.()) {
    // 使用slot
    slots.default?.().forEach((component: any) => {
      refs.push(component.componentInstance)
    })
  } else {
    // 使用components
    props.components.forEach((c: any) => {
      refs.push(instance.refs[c.field][0])
    })
  }
  return refs
});

onMounted(() => {
  modal.value = true
  drawer.value = false
})

defineExpose({
  open,
  setConditions
})
</script>
