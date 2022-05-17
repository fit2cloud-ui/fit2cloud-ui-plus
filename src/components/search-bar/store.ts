export interface Options {
  field: string
  label: string
  operator?: string
  operatorLabel: string
  value: string
  valueLabel: string
}

export default class ComplexCondition {
  field: string
  label: string
  operator?: string
  operatorLabel: string
  value: string
  valueLabel: string
  constructor(options: Options) {
    this.field = options.field
    this.label = options.label
    this.operator = options.operator
    this.operatorLabel = options.operatorLabel
    this.value = options.value
    this.valueLabel = options.valueLabel || options.value
  }
}
