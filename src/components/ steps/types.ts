import {InjectionKey} from "vue";

export const stepperKey = Symbol('StepperKey') as unknown as InjectionKey<stepperOptions>

export interface stepperOptions {
  steps: []
  index: number
  activeSet: any
  isLoading?: boolean
  onCancelButtonText: string
  onFinishButtonText: string
  prevButtonText: string
  nextButtonText: string
  buttonSize: string
  footerAlign: string
  showCancel: any
  beforeActive: Function
  beforeLeave: Function
  height: string
}

export interface stepOptions {
  id?: string
  index: number
  beforeActive?: Function
  beforeLeave?: Function
  title?: string
  description?: string
  icon?: string
  status?: string
}
