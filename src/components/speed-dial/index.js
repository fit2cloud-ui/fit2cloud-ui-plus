import FuSpeedDial from "./FuSpeedDial.vue"
import FuSpeedDialItem from "./FuSpeedDialItem.vue"

import type { App } from 'vue'

FuSpeedDial.install = (app: App): void => {
  app.component(FuSpeedDial.name, FuSpeedDial)
  app.component(FuSpeedDialItem.name, FuSpeedDialItem)
}

export default FuSpeedDial;