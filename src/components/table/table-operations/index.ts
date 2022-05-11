import FuTableOperations from "./FuTableOperations.vue";
import FuTableButton from "./FuTableButton.vue";
import FuTableMoreButton from "./FuTableMoreButton.vue";
import type { App } from 'vue'

FuTableOperations.install = (app: App): void => {
  app.component(FuTableOperations.name, FuTableOperations);
  app.component(FuTableButton.name, FuTableButton);
  app.component(FuTableMoreButton.name, FuTableMoreButton);
};

export default FuTableOperations;
