import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Actions, Mutations } from "@/store/enums/store.enums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboards/start",
    component: () => import("@/view/layout/Layout.vue"),
    children: [
      {
        path: "/dashboards",
        name: "dashboards",
        component: () => import("@/view/pages/dashboards/Dashboards.vue"),
        children: [
          // {
          //   path: "start",
          //   name: "start",
          //   component: () => import("@/view/pages/dashboards/Start.vue")
          // },
          // {
          //   path: "extended",
          //   name: "extended",
          //   meta: { asideEnabled: true },
          //   component: () => import("@/view/pages/dashboards/Extended.vue")
          // },
          {
            path: "light",
            name: "light",
            meta: { asideEnabled: true, asidePrimaryDisabled: true },
            component: () => import("@/view/pages/dashboards/Light.vue")
          },
          // {
          //   path: "compact",
          //   name: "compact",
          //   meta: { asideEnabled: true, asideSecondaryDisabled: true },
          //   component: () => import("@/view/pages/dashboards/Compact.vue")
          // }
        ]
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/view/pages/general/Error.vue")
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/view/pages/general/Error.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
