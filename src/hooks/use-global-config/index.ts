import { computed, getCurrentInstance, inject, ref } from 'vue'
// import { configProviderContextKey } from '@element-plus/tokens'
// import type { Ref } from 'vue'
// import type { ConfigProviderContext } from '@element-plus/tokens'

// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/element-plus/element-plus/issues/2610#issuecomment-887965266
const globalConfig = ref()

// export function useGlobalConfig<
//   K extends keyof ConfigProviderContext,
//   D extends ConfigProviderContext[K]
// >(
//   key: K,
//   defaultValue?: D
// ): Ref<Exclude<ConfigProviderContext[K], undefined> | D>
// export function useGlobalConfig(): Ref<ConfigProviderContext>
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

