import {computed, getCurrentInstance, ref, unref} from 'vue'
import {useGlobalConfig} from '@/hooks'
import type {ComputedRef} from 'vue'
import type {ComponentSize} from '@/tools/size'
import {validateSize} from "@/tools/size";
import {MaybeRef} from "@vueuse/core";

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => (vm.proxy?.$props as any)[name] ?? undefined)
}

export const useSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop' | 'global', boolean>> = {}
) => {
  const emptyRef = ref(undefined)

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig('size')

  return computed(
    (): ComponentSize =>
      size.value ||
      unref(fallback) ||
      globalConfig.value ||
      ''
  )
}

export const useSizeProp = {
  type: String,
  validator: validateSize,
}

