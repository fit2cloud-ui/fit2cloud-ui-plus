import FuTabs from "./FuTabs.vue"

import type { App } from 'vue'
FuTabs.install = (app: App): void => {
  app.component(FuTabs.name, FuTabs)
}

export default FuTabs
