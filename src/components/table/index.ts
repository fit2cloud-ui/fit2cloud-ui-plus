import FuTable from "./FuTable.vue"
import FuTableColumnSelect from "./table-column-select/FuTableColumnSelect.vue"
import FuTablePagination from "./FuTablePagination.vue"
import FuTableOperations from "./table-operations/FuTableOperations.vue";
import FuTableButton from "./table-operations/FuTableButton.vue";
import FuTableMoreButton from "./table-operations/FuTableMoreButton.vue";
import FuTableColumnDropdown from "./FuTableColumnDropdown.vue"

import type { App } from 'vue'
FuTable.install = (app: App): void => {
  app.component(FuTable.name, FuTable);
  app.component(FuTablePagination.name, FuTablePagination)
  app.component(FuTableColumnSelect.name, FuTableColumnSelect);
  app.component(FuTableColumnDropdown.name, FuTableColumnDropdown)
  app.component(FuTableOperations.name, FuTableOperations);
  app.component(FuTableButton.name, FuTableButton);
  app.component(FuTableMoreButton.name, FuTableMoreButton);
};
export default FuTable;
