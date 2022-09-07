import FuIconButton from "./FuIconButton.vue"

import type {App} from 'vue'

FuIconButton.install = (app: App): void => {
  app.component(FuIconButton.name, FuIconButton)
}

export default FuIconButton;
