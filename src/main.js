import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import "./assets/css/icon.css";
import "./permission";

const app = createApp(App);
installElementPlus(app);
// const getServerConfig = async () => {
//   installElementPlus(app);
//   app.use(router);
// app.use(store);
//   //   await registerDirective(app);
//   await router.isReady();
//   console.log("root", "root");
//   app.mount("#app");
// };

// getServerConfig();

app.use(store).use(router).mount("#app");
