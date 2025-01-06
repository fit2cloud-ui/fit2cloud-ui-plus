import {computed, isRef, ref, unref} from 'vue'
import {get} from 'lodash-unified'
import Chinese from '@/locale/lang/zh-cn'
import {useGlobalConfig} from '@/hooks'
import type {MaybeRef} from '@vueuse/core'
import type {Ref} from 'vue'
import type {Language} from '@/locale'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
    (path, option) =>
      translate(path, option, unref(locale))

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language
): string => {
  if (!i18nHandler) {
    return (get(locale, path, path) as string).replace(
      /\{(\w+)\}/g,
      (_, key) => `${option?.[key] ?? `{${key}}`}`
    )
  }
  return i18nHandler(path);
}

export const buildLocaleContext = (
  locale: MaybeRef<Language>
): LocaleContext => {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  }
}

export const useLocale = () => {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || Chinese))
}

let i18nHandler: Function;

export const i18n = (fn: Function | undefined) => {
  i18nHandler = fn || i18nHandler;
};
