<template>
  <div class="fu-complex-search">
    <el-popover trigger="manual" v-model="active" :show-arrow="false" @hide="closePopover"
      popper-class="fu-complex-components">

      <div class="fu-complex-components__body">
        <slot>
          <!-- :size="configSize" -->
          <component v-for="(c, i) in components" :key="i" :is="c.component" v-bind="c" :ref="c.field" v-on="c" />
        </slot>
      </div>
      <div class="fu-complex-components__footer">
        <!--  :size="configSize" -->
        <el-button @click="active = false">{{ t('fu.search_bar.cancel') }}</el-button>
        <el-button type="primary" @click="ok">{{ t('fu.search_bar.ok') }}</el-button>
      </div>
      <template #reference>
        <!--  :size="configSize" -->
        <fu-search-bar-button icon="ArrowRight" @click="toggle"
          :class="['fu-complex-search__trigger', { 'is-active': active }]" :tooltip="t('fu.search_bar.adv_search')" />
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots, getCurrentInstance } from "vue";
import FuSearchBarButton from "@/components/search-bar/FuSearchBarButton.vue";
import { useLocale } from "@/hooks"

const slots = useSlots()
const instance = getCurrentInstance()

const props = defineProps({
  components: Array,
});
const emit = defineEmits(["close", "change"])
const { t } = useLocale()
const active = ref(false)


function closePopover() {
  emit("close")
}
function toggle() {
  active.value = !active.value
  refs.value.forEach((r: any) => {
    // *****r.init  有问题
    if (r?.init) {
      r.init()
    } else {
      console.warn("init undefined", r)
    }
  })
}

function close() {
  active.value = false
}
function ok() {
  active.value = false
  let conditions: any = [];
  refs.value.forEach((r: any) => {
    let condition
    if (r.getCondition) {
      condition = r.getCondition()
    } else {
      console.warn("getCondition undefined", r)
    }
    if (condition && condition.value !== undefined) {
      conditions.push(condition)
    }
  })
  emit("change", conditions)
}

function createConditions(conditions: any) {
  let result: any = []
  if (conditions) {
    Object.keys(conditions).forEach(key => {
      let c = conditions[key]
      refs.value.forEach((r: any) => {
        if (r.field === key) {
          result.push(r.createCondition(c.value, c.operator))
        }
      })
    })
  }
  return result
}
const refs = computed(() => {
  let refs: any = [];
  if (slots.default?.()[0].children.length) {
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


</script>
