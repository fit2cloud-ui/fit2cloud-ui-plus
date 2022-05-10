import FuTableColumnDropdown from "./FuTableColumnDropdown.vue";
import type { App } from 'vue'
FuTableColumnDropdown.install = (app: App): void =>{
  app.component(FuTableColumnDropdown.name, FuTableColumnDropdown);
};

export default FuTableColumnDropdown;
