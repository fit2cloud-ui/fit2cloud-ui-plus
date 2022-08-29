<template>
  <div class="fu-filter" ref="filterRef" v-show="show">
    <div class="fu-filter__result">{{ count }} <span style="opacity: 0.6">{{ t('fu.filter_bar.results') }}</span>
    </div>
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
  </div>

  <el-drawer :size="drawerWidth" custom-class="fu-filter__drawer" :title="t('fu.filter_bar.drawer_title')"
             v-model="drawer" @open="initComponents">
    <div class="drawer-body">
      <slot>
        <component v-for="(c, i) in components" :key="i" :is="c.component" v-bind="c" :ref="c.field" v-on="c"
                   :size="configSize"/>
      </slot>
    </div>
    <div class="drawer-footer">
      <slot name="footer">
        <el-button :size="size" @click="drawer = false">{{ t('fu.filter_bar.cancel') }}</el-button>
        <el-button :size="size" type="primary" @click="filter">{{ t('fu.filter_bar.search') }}</el-button>
      </slot>
    </div>
  </el-drawer>
</template>

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
import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";
import {FilterCondition, ReferenceContext, referenceKey} from "@/components/filter-bar/types";

defineOptions({name: "FuFilter"});
const {t} = useLocale()

const filterRef = ref<HTMLElement | null>(null)
const conditionsRef = ref<ComponentPublicInstance | null>(null)

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  count: {
    type: Number,
    default: 0
  },
  components: Array as any,
  drawerWidth: {
    type: [Number, String],
    default: "680px"
  },
  showEmpty: Boolean
})

const emit = defineEmits(["filter"])

const configSize = useSize()
const drawer = ref(true)
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
  })
  emit("filter", conditions.value)
}

function setConditions(conditionObj: any) {
  conditions.value = []
  if (conditionObj) {
    Object.keys(conditionObj).forEach(key => {
      let value = conditionObj[key].value
      references.value.forEach(r => {
        if (r.field === key) {
          r.init(value)
          const condition = r.getCondition()
          if (condition) {
            conditions.value.push(condition)
          }
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

const show = computed(() => {
  return (conditions.value.length > 0 && props.showEmpty === false) || props.showEmpty
})

provide(referenceKey, references)

onMounted(() => {
  drawer.value = false
})

defineExpose({
  open,
  setConditions
})
</script>
