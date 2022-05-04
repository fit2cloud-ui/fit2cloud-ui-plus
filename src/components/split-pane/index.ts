import FuSplitPane from './FuSplitPane.vue';
import type { App } from 'vue'

FuSplitPane.install = (app: App): void => {
  app.component(FuSplitPane.name, FuSplitPane);
};

export default FuSplitPane;
