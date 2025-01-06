export { default as en } from './lang/en'
export { default as zhCn } from './lang/zh-cn'
export { default as zhTw } from './lang/zh-tw'
export { default as ja } from './lang/ja'
export { default as ms } from './lang/ms'
export { default as ru } from './lang/ru'
export { default as ptBr } from './lang/pt-br'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  el: TranslatePair
}
