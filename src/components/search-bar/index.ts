import FuSearchBar from "./FuSearchBar.vue"
import FuQuickSearch from "./FuQuickSearch.vue"
import FuSearchBarButton from "./FuSearchBarButton.vue"
// import FuComplexComponents from "./complex-components"

// FuSearchBar.install = function (Vue, opts = {}) {
//   Vue.use(FuComplexComponents)
// }

import type { App } from 'vue'
FuSearchBar.install = (app: App): void => {
  app.component(FuSearchBar.name, FuSearchBar)
  app.component(FuSearchBarButton.name, FuSearchBarButton)
  app.component(FuQuickSearch.name, FuQuickSearch)
};
export default FuSearchBar;