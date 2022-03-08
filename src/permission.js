import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getCookieByKey } from "./utils/cookies";
import getPageTitle from "./utils/get-page-title";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login"];


// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   document.title = `${to.meta.title} | vue-manage-system`;
//   const hasToken = getCookieByKey("vite_token");
//   if (!hasToken && to.path !== "/login") {
//     next("/login");
//     NProgress.done();
//   } else if (to.meta.permission) {
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === "admin" ? next() : next("/403");
//   } else {
//     next();
//   }
// });

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const hasToken = getCookieByKey("vite_token");
  console.log("token", hasToken);
  if (hasToken && hasToken !== "undefined") {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          const { roles } = await store.dispatch("user/loginByToken", hasToken);
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );
          accessRoutes.forEach((item) => {
            router.addRoute(item);
          });
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch("user/resetInfo");
          next(`/login`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
      console.log("notoken-next",'')
    } else {
      console.log("notoken-next", "login");
      next(`/login`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
