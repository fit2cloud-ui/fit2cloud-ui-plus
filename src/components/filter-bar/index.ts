import FuFilterInput from "./FuFilterInput.vue";
import FuFilterBar from "./FuFilterBar.vue";
import FuFilter from "./FuFilter.vue";
import FuFilterSelect from "./filter-components/FuFilterSelect.vue";
import FuFilterDate from "./filter-components/FuFilterDate.vue";
import FuFilterDateTime from "./filter-components/FuFilterDateTime.vue";
import type { App } from "vue";

FuFilterBar.install = (app: App): void => {
  app.component(FuFilterBar.name, FuFilterBar);
  app.component(FuFilter.name, FuFilter);
  app.component(FuFilterInput.name, FuFilterInput);
  app.component(FuFilterSelect.name, FuFilterSelect);
  app.component(FuFilterDate.name, FuFilterDate);
  app.component(FuFilterDateTime.name, FuFilterDateTime);
};

export default FuFilterBar;
