import FuTable from "./FuTable.vue"
import FuTableColumnSelect from "./table-column-select"
import FuTablePagination from "./FuTablePagination.vue"
// import FuTableOperations from "./table-operations"
import FuTableColumnDropdown from "./table-column-dropdown"

// FuTable.install = function (Vue, opts = {}) {
//   Vue.use(FuTableOperations)
//   Vue.use(FuTableColumnSelect)
// }

import type { App } from 'vue'
FuTable.install = (app: App): void => {
  app.component(FuTable.name, FuTable);
  app.component(FuTablePagination.name, FuTablePagination)
  app.use(FuTableColumnSelect.install)
  app.use(FuTableColumnDropdown.install)
};
export default FuTable;