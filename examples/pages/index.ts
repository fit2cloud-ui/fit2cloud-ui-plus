/* Components */
import type { App } from "vue";

const pages = (app:App)=>{
  const components= import.meta.globEager('./*/index.vue')
  Object.keys(components).forEach(key => {
    let component = components[key].default
    app.component(component.name, component)
  })
}
export default pages