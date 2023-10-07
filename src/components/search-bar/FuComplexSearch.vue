<template>
  <el-popover :visible="active" :show-arrow="false" @hide="hide" width="auto" popper-class="fu-complex-components">
    <div class="fu-complex-components">
      <div class="fu-complex-components__body">
        <slot>
          <component v-for="c in components" :is="c.component" v-bind="c" :size="configSize"/>
        </slot>
      </div>
      <div class="fu-complex-components__footer">
        <el-button @click="close" :size="configSize">{{ t('fu.search_bar.cancel') }}</el-button>
        <el-button type="primary" @click="ok" :size="configSize">{{ t('fu.search_bar.ok') }}</el-button>
      </div>
    </div>
    <template #reference>
      <el-button circle icon="ArrowRightBold" @click="toggle" :size="configSize" v-show="showComplex"
                 :class="['fu-complex-components-trigger', {'is-active':active}]"/>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import {ref, inject, computed, PropType} from "vue";
import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";
import {ComplexCondition, referenceKey} from "./types";

defineOptions({name: "FuComplexSearch"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  components: Array as PropType<any[]>,
})

const emit = defineEmits(["close", "change"])

const active = ref(false)
const references = inject(referenceKey)

const configSize = useSize()

const showComplex = computed(() => {
  return references ? references.value.length > 0 : false
})

const {t} = useLocale()

function hide() {
  emit("close")
}

function toggle() {
  active.value = !active.value
  if (active.value) {
    references?.value.forEach(r => r.init())
  }
}

function close() {
  active.value = false
}

function ok() {
  close()
  exec()
}

function exec() {
  let conditions: any = [];
  references?.value.forEach(r => {
    let condition = r.getCondition()
    if (condition?.value !== undefined) {
      conditions.push(condition)
    }
  })
  emit("change", conditions)
}

function setConditions(conditionObj: any): ComplexCondition[] {
  let result: ComplexCondition[] = []
  if (conditionObj) {
    Object.keys(conditionObj).forEach(key => {
      let c = conditionObj[key]
      references?.value.forEach(r => {
        if (r.field === key) {
          r.init(c.value)
          const condition = r.getCondition()
          if (condition) {
            result.push(condition)
          }
        }
      })
    })
  }
  return result
}

defineExpose({
  setConditions,
  close
})
</script>
