<template>
  <div class="fu-filter" ref="filterRef">
    <div class="fu-filter__result">{{ count }} <span style="opacity: 0.6">{{ t('fu.filter_bar.results') }}</span></div>
    <div class="fu-filter__split"/>

    <div class="fu-filter__scroll" @mousedown="left" @mouseup="mouseup" v-if="scroll">
      <el-icon>
        <ArrowLeftBold/>
      </el-icon>
    </div>

    <fu-filter-conditions :conditions="conditions" @change="change" ref="conditionsRef"/>

    <div class="fu-filter__scroll" @mousedown="right" @mouseup="mouseup" v-if="scroll">
      <el-icon>
        <ArrowRightBold/>
      </el-icon>
    </div>

    <div class="fu-filter__clear fu-scale-click" @click="clear" v-if="conditions.length > 0">
      <el-icon>
        <Delete/>
      </el-icon>
      {{ t('fu.filter_bar.clear') }}
    </div>

    <el-drawer :size="drawerWidth" custom-class="fu-filter__drawer" :title="t('fu.filter_bar.drawer_title')"
               v-model="drawer" @open="initComponents" v-show="show" :modal="modal">
      <div class="drawer-body">
        <slot>
          <component v-for="(c, i) in components" :key="i" :is="c.component" v-bind="c" :ref="c.field" v-on="c"/>
        </slot>
      </div>
      <div class="drawer-footer">
        <slot name="footer">
          <el-button @click="drawer = false">{{ t('fu.filter_bar.cancel') }}</el-button>
          <el-button type="primary" @click="filter">{{ t('fu.filter_bar.search') }}</el-button>
        </slot>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
export default {
  name: "FuFilter",
};
</script>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  nextTick,
  provide,
  Ref,
  ComponentPublicInstance
} from "vue";
import FuFilterConditions from "./FuFilterConditions.vue";
import {useLocale} from "@/hooks"
import {FilterCondition, ReferenceContext, referenceKey} from "@/components/filter-bar/types";

const {t} = useLocale()

const filterRef = ref<HTMLElement | null>(null)
const conditionsRef = ref<ComponentPublicInstance | null>(null)

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
const show = ref(false)
const modal = ref(false)
const scroll = ref(false)
const conditions: Ref<Array<FilterCondition>> = ref([])
const references: Ref<Array<ReferenceContext>> = ref([])

let leftTimer: NodeJS.Timer, rightTimer: NodeJS.Timer

function mouseup() {
  clearInterval(leftTimer)
  clearInterval(rightTimer)
}

function left() {
  let el = conditionsRef.value?.$el
  leftTimer = setInterval(() => {
    if (el) el.scrollLeft -= 15
  }, 50)
}

function right() {
  let el = conditionsRef.value?.$el
  rightTimer = setInterval(() => {
    if (el) el.scrollLeft += 15
  }, 50)
}

function change() {
  nextTick(() => {
    let el = conditionsRef.value?.$el
    scroll.value = el != null && el?.getBoundingClientRect().width >= scrollWidth.value
    console.log(el?.getBoundingClientRect().width, scrollWidth.value)
  })
  emit("filter", conditions.value)
}

function setConditions(conditions: any) {
  conditions.value = []
  if (conditions) {
    Object.keys(conditions).forEach(key => {
      let value = conditions[key].value
      references.value.forEach(r => {
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
  references.value.forEach(r => {
    let condition: FilterCondition | undefined
    condition = r.getCondition()
    if (condition) {
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
  references.value.forEach((r: any) => {
    let condition = conditions.value.find(c => c.field === r.field)
    r.init(condition?.value)
  })
}

function clear() {
  conditions.value = []
  initComponents()
  change();
}

const scrollWidth = computed(() => {
  const el = filterRef.value
  return el === null ? 0 : el.getBoundingClientRect().width - 210
})

provide(referenceKey, references)

onMounted(() => {
  modal.value = true
  drawer.value = false
})

defineExpose({
  open,
  setConditions
})
</script>
