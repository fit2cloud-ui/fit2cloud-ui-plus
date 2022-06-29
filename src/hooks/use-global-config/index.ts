import { computed, getCurrentInstance, inject, ref } from 'vue'
const globalConfig = ref()

export function useGlobalConfig(
  key?: keyof any,
  defaultValue = undefined
) {
  const config = getCurrentInstance()
    ? inject( Symbol(), globalConfig)
    : globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue)
  } else {
    return config
  }
}

