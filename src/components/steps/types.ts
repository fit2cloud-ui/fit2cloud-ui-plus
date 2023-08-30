import {Step} from "@/components/steps/Stepper";

export interface StepperOptions {
  steps: [Step]
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

export interface StepOptions {
  id?: string
  index: number
  beforeActive?: Function
  beforeLeave?: Function
  title?: string
  description?: string
  icon?: string
  status?: string
}
