import { computed, ref, unref, getCurrentInstance } from 'vue'
import { useGlobalConfig } from '../use-global-config'
import type { ComputedRef } from 'vue'
import type { ComponentSize } from '@/tools/size'
import type { MaybeRef } from '@vueuse/core'

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

