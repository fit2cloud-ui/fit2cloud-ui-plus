import PackageJSON from "../package.json"

import type { App } from 'vue'
const components = import.meta.globEager('@/components/*/index.ts');

const install = (app: App): void => {
  Object.keys(components).forEach(key => {
    let component = components[key].default;
    app.use(component);
  })
}

const plugin = {
  name: "Fit2CloudUIPlus",
  version: PackageJSON.version,
  install,
}

export default plugin
