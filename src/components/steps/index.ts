import FuSteps from "./FuSteps.vue";
import FuStep from "./FuStep.vue";

import type { App } from "vue";
FuSteps.install = (app: App): void => {
  app.component(FuStep.name, FuStep);
  app.component(FuSteps.name, FuSteps);
};

export default FuSteps;
