import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "",
    redirect: "/folder/AboutMe",
  },
  {
    path: "/folder/AboutMe",
    component: () => import("../views/AboutMe.vue"),
    meta: {
      needLogin: true
    },
  },
  {
    path: "/folder/RunningState",
    component: () => import("../views/RunningState.vue"),
    meta: {
      needLogin: true
    },
  },
  {
    path: "/folder/CarLenting",
    component: () => import("../views/CarLenting.vue"),
    meta: {
      needLogin: true
    },
  },
  {
    path: "/folder/OpenAndClose",
    component: () => import("../views/OpenAndClose.vue"),
    meta: {
      needLogin: true
    },
  },
  {
    path: "/folder/KeySharing",
    component: () => import("../views/KeySharing.vue"),
    meta: {
      needLogin: true
    },
  },
  {
    path: "/folder/AboutUs",
    component: () => import("../views/AboutUs.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/login",
    component: () => import("../views/Login.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/register",
    component: () => import("../views/Register.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/verification",
    component: () => import("../views/VerificationCode.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/test",
    component: () => import("../views/OpenAndClose2.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/au",
    component: () => import("../views/Authorization.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/cu",
    component: () => import("../views/ContactUs.vue"),
    meta: {
      needLogin: false
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
