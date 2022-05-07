import FuTableColumnSelect from './FuTableColumnSelect.vue';
import type { App } from 'vue'

FuTableColumnSelect.install = (app: App): void => {
  app.component(FuTableColumnSelect.name, FuTableColumnSelect);
};

export default FuTableColumnSelect;