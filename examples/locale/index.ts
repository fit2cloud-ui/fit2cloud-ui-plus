import {createI18n} from 'vue-i18n';
import zh from '@/locale/lang/zh-cn';
import tw from '@/locale/lang/zh-tw';
import en from '@/locale/lang/en';
import ru from '@/locale/lang/ru';
import ja from '@/locale/lang/ja';
import ms from '@/locale/lang/ms';
import pt from '@/locale/lang/pt-br';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'zh',
  fallbackLocale: 'zh',
  globalInjection: true,
  messages: {
    zh,
    tw,
    ru,
    en,
    ja,
    ms,
    pt,
  },
  warnHtmlMessage: false,
});

export default i18n;
