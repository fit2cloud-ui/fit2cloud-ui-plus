<template>
  <div class="fu-filter-bar">
    <div class="fu-filter-bar__top">
      <div class="top_left">
        <slot name="tl"></slot>
      </div>
      <div class="top_right">
        <slot name="tr">
          <!-- :size="configSize" -->
          <FuSearchInput :size="configSize" v-model="quick" :placeholder="quickPlaceholder" @change="change"/>
          <el-button @click="open" icon="Filter">{{ t('fu.filter_bar.filter') }}
            <span v-if="conditions.length > 0">({{ conditions.length }})</span>
          </el-button>
        </slot>
        <slot name="buttons"></slot>
      </div>
    </div>
    <div class="fu-filter-bar__bottom">
      <FuFilter ref="filterRef" @filter="filter" :count="resultCount" :components="components">
        <slot></slot>
      </FuFilter>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {useLocale, useSize} from "@/hooks"
import FuSearchInput from "@/components/filter-bar/FuSearchInput.vue";
import FuFilter from "@/components/filter-bar/FuFilter.vue";
defineOptions({ name: "FuFilterBar" });
const {t} = useLocale()
const configSize = useSize()
const props = defineProps({
  resultCount: Number,
  quickPlaceholder: String,
  components: Array
})

const emit = defineEmits(["exec"])

const quick = ref("")
const conditions = ref([])

const filterRef = ref()

function open() {
  filterRef.value?.open()
}

function change() {
  emit("exec", conditionObj.value)
}

function filter(c: any) {
  conditions.value = c
  emit("exec", conditionObj.value)
}

function setConditions(conditionObj: any) {
  filterRef.value?.setConditions(conditionObj)
}

const conditionObj = computed(() => {
  let obj: any = {quick: quick.value}
  conditions.value.forEach((c: any) => {
    obj[c.field] = c
  })
  return obj
});

defineExpose({
  setConditions
})
</script>
