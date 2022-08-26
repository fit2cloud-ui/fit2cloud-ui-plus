import FuSearchBar from "./FuSearchBar.vue";
import FuQuickSearch from "./FuQuickSearch.vue";
import FuSearchBarButton from "./FuSearchBarButton.vue";
import FuComplexSelect from "./complex-components/FuComplexSelect.vue";
import FuComplexInput from "./complex-components/FuComplexInput.vue";
import FuComplexDate from "./complex-components/FuComplexDate.vue";
import FuComplexDateTime from "./complex-components/FuComplexDateTime.vue";
import type {App} from "vue";

FuSearchBar.install = (app: App): void => {
  app.component(FuQuickSearch.name, FuQuickSearch);
  app.component(FuSearchBar.name, FuSearchBar);
  app.component(FuSearchBarButton.name, FuSearchBarButton);
  app.component(FuComplexSelect.name, FuComplexSelect);
  app.component(FuComplexInput.name, FuComplexInput);
  app.component(FuComplexDate.name, FuComplexDate);
  app.component(FuComplexDateTime.name, FuComplexDateTime);
};

export default FuSearchBar;
