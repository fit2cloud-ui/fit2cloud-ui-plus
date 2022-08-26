import {InjectionKey, Ref} from "vue";

export const referenceKey = Symbol('ReferenceKey') as unknown as InjectionKey<Ref<ReferenceContext[]>>

export interface ReferenceContext {
  field: string,

  init(v?: any): void

  getCondition(): ComplexCondition | undefined
}

export interface OptionProps {
  label: string
  value: string | number
}

export interface ComplexCondition {
  field: string
  label?: string
  value: any
  valueLabel?: string
}
