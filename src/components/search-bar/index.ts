import FuSearchBar from "./FuSearchBar.vue"
// import FuQuickSearch from "./FuQuickSearch.vue"
import FuSearchBarButton from "./FuSearchBarButton.vue"
// import FuComplexComponents from "./complex-components"
// import locale from "@/locale"

// FuSearchBar.install = function (Vue, opts = {}) {
//   locale.use(opts.locale)
//   locale.i18n(opts.i18n)
//   Vue.component(FuSearchBar.name, FuSearchBar)
//   Vue.component(FuSearchBarButton.name, FuSearchBarButton)
//   Vue.component(FuQuickSearch.name, FuQuickSearch)
//   Vue.use(FuComplexComponents)
// }

import type { App } from 'vue'
FuSearchBar.install = (app: App): void => {
  app.component(FuSearchBar.name, FuSearchBar)
  app.component(FuSearchBarButton.name, FuSearchBarButton)
};
export default FuSearchBar;