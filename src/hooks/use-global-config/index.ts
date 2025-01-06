import {computed, getCurrentInstance, inject, provide, InjectionKey, Ref, ref, App, unref} from 'vue'
import {MaybeRef} from "@vueuse/core";

const globalConfig = ref()

export const globalConfigKey: InjectionKey<Ref<GlobalConfig>> = Symbol('GlobalConfigKey')

export interface GlobalConfig {
  size?: string,
  locale?: any
  i18n?: Function
}

export function useGlobalConfig(key?: keyof any, defaultValue = undefined) {
  const config = getCurrentInstance() ? inject(globalConfigKey, globalConfig) : globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue)
  } else {
    return config
  }
}

export const provideGlobalConfig = (config: MaybeRef<GlobalConfig>, app?: App) => {
  const inSetup = !!getCurrentInstance()
  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  const context = computed(() => {
    return unref(config)
  })
  provideFn?.(globalConfigKey, context)
  if (!globalConfig.value) {
    globalConfig.value = context.value
  }

  return context
}

