import FuReadWriteSwitch from "./FuReadWriteSwitch.vue"
import FuInputRwSwitch from "./FuInputRwSwitch.vue"
import FuSelectRwSwitch from "./FuSelectRwSwitch.vue"

import type { App } from 'vue'

FuReadWriteSwitch.install = (app: App): void => {
  app.component(FuReadWriteSwitch.name, FuReadWriteSwitch)
  app.component(FuInputRwSwitch.name, FuInputRwSwitch)
  app.component(FuSelectRwSwitch.name, FuSelectRwSwitch)
}

export default FuReadWriteSwitch;
