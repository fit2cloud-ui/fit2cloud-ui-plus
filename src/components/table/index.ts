import FuTable from "./FuTable.vue"
import FuTableColumnSelect from "./table-column-select"
// import FuTablePagination from "./FuTablePagination"
// import FuTableOperations from "./table-operations"

// import FuTableColumnDropdown from "./table-column-dropdown"

// FuTable.install = function (Vue, opts = {}) {
//   Vue.component(FuTablePagination.name, FuTablePagination)
//   Vue.use(FuTableOperations)
//   Vue.use(FuTableColumnSelect)
//   Vue.use(FuTableColumnDropdown)
// }

import type { App } from 'vue'
FuTable.install = (app: App): void => {
  app.component(FuTable.name, FuTable);
  app.use(FuTableColumnSelect.install)
};
export default FuTable;