import FuSearchInput from "./FuSearchInput.vue"
import FuFilterBar from "./FuFilterBar.vue";
import FuFilter from "./FuFilter.vue";
import FuFilterSelect from "./filter-components/FuFilterSelect.vue";
import FuFilterDate from "./filter-components/FuFilterDate.vue";
import FuFilterDateTime from "./filter-components/FuFilterDateTime.vue";

import type { App } from 'vue'
FuSearchInput.install = (app: App): void => {
  app.component(FuFilterBar.name, FuFilterBar)
  app.component(FuFilter.name, FuFilter)
  app.component(FuSearchInput.name, FuSearchInput)
  app.component(FuFilterSelect.name, FuFilterSelect)
  app.component(FuFilterDate.name, FuFilterDate)
  app.component(FuFilterDateTime.name, FuFilterDateTime)
}

export default FuSearchInput
