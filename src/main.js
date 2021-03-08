import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLayout from "./components/BaseLayout.vue";
import store from "./store";

import { IonicVue } from "@ionic/vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import VueNativeSock from "vue-native-websocket-vue3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/ionic.bundle.css";

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .use(AMapLoader)
  .use(VueNativeSock, "ws://echo.websocket.org", {
    store: store,
  });

app.component("base-layout", BaseLayout);

router.isReady().then(() => {
  app.mount("#app");
});

router.beforeEach((to, from, next) => {
  // 这里的meta就是我们刚刚在路由里面配置的meta
  if (to.meta.needLogin) {
    // 下面这个判断是自行实现到底是否有没有登录
    if (store.getters.isLogin) {
      console.log("isloginistrue");
      // 登录就继续
      next();
    } else {
      if (from.path != "/folder/login") {
        // 没有登录跳转到登录页面，登录成功之后再返回到之前请求的页面
        next({
          path: "/folder/login",
          query: { redirect: to.fullPath },
        });
      }
    }
  } else {
    // 不需要登录的，可以继续访问
    next();
  }
});

export default app;