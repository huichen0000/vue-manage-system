import { createStore } from "vuex";
import getters from "./getters";

let modules = {};
const modulesFiles = import.meta.globEager("./modules/*.js");
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, "$2");
  modules = {
    ...modules,
    [moduleName]: modulesFiles[path].default,
  };
}

export default createStore({
  modules,
  getters,
});
