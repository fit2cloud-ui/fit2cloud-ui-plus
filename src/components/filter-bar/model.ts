export interface Options {
  field: string
  label?: string
  value: any
  valueLabel: string
}
export default class FilterCondition {
  field: string
  label?: string
  value: string
  valueLabel: string
  constructor(options?: Options) {
    options = options || ({} as Options)
    this.field = options.field
    this.label = options.label
    this.value = options.value
    this.valueLabel = options.valueLabel || options.value
  }
}
