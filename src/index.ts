import PackageJSON from "../package.json"

import type {App} from 'vue'
import {GlobalConfig, i18n, provideGlobalConfig} from "@/hooks";

const components = import.meta.globEager('@/components/*/index.ts');

const install = (app: App, config: GlobalConfig): void => {
  Object.keys(components).forEach(key => {
    let component = components[key].default;
    app.use(component)
  })
  i18n(config?.i18n)
  provideGlobalConfig(config)
}

const plugin = {
  name: "Fit2CloudUIPlus",
  version: PackageJSON.version,
  install,
}

export default plugin
