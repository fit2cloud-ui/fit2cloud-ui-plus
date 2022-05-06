import FuTable from "./FuTable.vue"
// import FuTablePagination from "./FuTablePagination"
// import FuTableOperations from "./table-operations"
// import FuTableColumnSelect from "./table-column-select"
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
};

export default FuTable;