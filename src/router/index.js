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
    path: "/folder/AboutProject",
    component: () => import("../views/AboutProject.vue"),
    meta: {
      needLogin: false
    },
  },
  {
    path: "/folder/ContactUs",
    component: () => import("../views/ContactUs.vue"),
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
  },
  {
    path: "/folder/verification",
    component: () => import("../views/VerificationCode.vue"),
  },
  {
    path: "/folder/test",
    component: () => import("../views/OpenAndClose2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
