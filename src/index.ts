import PackageJSON from "../package.json"

import type {App} from 'vue'
import {GlobalConfig, i18n, provideGlobalConfig} from "@/hooks";

const components = [FilterBar, IconButton, ReadWriteSwitch,SearchBar,SpeedDial,Steps, table,tabs/* ... other components */];
import FilterBar from '@/components/filter-bar/index';
import IconButton from '@/components/icon-button/index';
import ReadWriteSwitch from '@/components/read-write-switch/index';
import SearchBar from '@/components/search-bar/index';
import SpeedDial from '@/components/speed-dial/index';
import Steps from '@/components/steps/index';
import table from '@/components/table/index';
import tabs from '@/components/tabs/index';

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
