import { getModule } from "vuex-module-decorators";
import LoginModule from "@/store/modules/LoginModule";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/view/layout/Layout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "light",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/dashboards/Light.vue"),
      },
      {
        path: "/users",
        name: "otletlist",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/ListUser.vue"),
      },

      {
        path: "users/:uuid/:id/",
        name: "userlist-update",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/Update.vue"),
      },

      {
        path: "users/DetailUser/",
        name: "DetailUser",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/DetailUser.vue"),
      },
      {
        path: "users/CardDetail",
        name: "CardDetail",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/CardDetail.vue"),
      },
      {
        path: "balance",
        name: "balance",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/HistoryDisbursment.vue"),
      },
      // {
      //   path: 'balance',
      //   name: 'balance',
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () => import('@/view/pages/balance/index.vue'),
      // },
      // {
      //   path: '/balance/refund',
      //   name: 'refund-balance',
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () => import('@/view/pages/balance/create/index.vue'),
      // },
      // {
      //   path: '/balance/refund/:id',
      //   name: 'detail-refund-balance',
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () => import('@/view/pages/balance/detail/Refund.vue'),
      // },
      // {
      //   path: "users/DetailOutlet",
      //   name: "DetailOutlet",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () => import("@/view/pages/users/DetailOutlet.vue"),
      // },
      {
        path: "employee/:uuid",
        name: "DetailOutlet",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/users/DetailEmployee.vue"),
      },

      {
        path: "/voucher",
        name: "voucher",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/voucher/ListVoucher.vue"),
      },

      {
        path: "/voucher/add",
        name: "add-voucher",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/voucher/Add.vue"),
      },

      {
        path: "voucher/:uuid",
        name: "detail-voucher",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/voucher/Detail.vue"),
      },

      {
        path: "voucher/update/:uuid",
        name: "update-voucher",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/voucher/Update.vue"),
      },

      {
        path: "/outlets",
        name: "outlet-list",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/outletlist/ListOutlet.vue"),
      },
      {
        path: "outlets/detail/:uuid",
        name: "outlet-detail",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/outletlist/DetailOutlet.vue"),
      },

      {
        path: "product/list/",
        name: "list-produk",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/products/ListProduct.vue"),
      },
      {
        path: 'product/detail/:uuid',
        name: 'detail-product',
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () =>
          import('@/view/pages/products/Detail.vue'),
      },
      // {
      //   path: "modifier/list/",
      //   name: "list-modifier",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () => import("@/view/pages/products/modifier/ListModifier.vue"),
      // },
      // {
      //   path: 'modifier/detail/:uuid',
      //   name: 'detail-modifier',
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true },
      //   component: () =>
      //     import('@/view/pages/products/modifier/DetailModifier.vue'),
      // },






      {
        path: "transaction/list/",
        name: "List-Transaksi",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/transaction/Transaction.vue"),
      },
      {
        path: "transaction/list-kasbon/",
        name: "List-Transaksi-kasbon",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/transaction/TransactionKasbon.vue"),
      },
      {
        path: 'transaction/detail/:trxId',
        name: 'detail-transaction',
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () =>
          import('@/view/pages/transaction/TransactionDetail.vue'),
      },

      // {
      //   path: "outlets/outlet/omset",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailOmset.vue"),),
      // },
      // {
      //   path: "outlets/outlet/profit",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailProfit.vue"),),
      // },
      // {
      //   path: "outlets/outlet/transaksi",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailTransaksi.vue"),),
      // },
      // {
      //   path: "outlets/outlet/diskon",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailDiskon.vue"),),
      // },
      // {
      //   path: "outlets/outlet/produk",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailProduk.vue"),),
      // },
      // {
      //   path: "outlets/outlet/tipe-produk",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailTipeProduk.vue"),),
      // },
      // {
      //   path: "outlets/outlet/payment-methods",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailPembayaran.vue"),),
      // },
      // {
      //   path: "outlets/outlet/order-methods",
      //   meta: { asideEnabled: true, asidePrimaryDisabled: true},
      //   component: () => import(("@/view/pages/outletlist/DetailPemesanan.vue"),),
      // },

      {
        path: "/my-profile",
        name: "my-profile",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/auth/MyProfile.vue"),
      },

      {
        path: "/faq",

        name: "faq",
        meta: { sidebar: "user" },
        component: () => import("@/view/pages/general/FAQ.vue"),
      },
      {
        path: "/pricing",
        name: "pricing",
        meta: { sidebar: "user" },
        component: () => import("@/view/pages/general/Pricing.vue"),
      },
      {
        path: "/invoice",
        name: "invoice",
        meta: { sidebar: "user" },
        component: () => import("@/view/pages/general/Invoice.vue"),
      },
      {
        path: "/overview",
        name: "overview",
        meta: { sidebar: "user" },
        component: () => import("@/view/pages/profile/Overview.vue"),
      },
      {
        path: "/documentation",
        name: "documentation",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/resources/Documentation.vue"),
        children: [
          {
            path: "build",
            name: "build",
            component: () =>
              import(
                "@/view/pages/resources/documentation/get-started/Build.vue"
              ),
          },
          {
            path: "doc-overview",
            name: "doc-overview",
            component: () =>
              import(
                "@/view/pages/resources/documentation/get-started/Overview.vue"
              ),
          },
          {
            path: "updates",
            name: "updates",
            component: () =>
              import(
                "@/view/pages/resources/documentation/get-started/Updates.vue"
              ),
          },
          {
            path: "changelog",
            name: "changelog",
            component: () => import("@/view/pages/resources/Changelog.vue"),
          },
          {
            path: "utilities",
            name: "utilities",
            meta: {
              desc: "extended utility classes",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Utilities.vue"),
          },
          {
            path: "helpers/flex-layouts",
            name: "flex-layouts",
            meta: {
              desc: "extended flex layout classes",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/helpers/FlexLayouts.vue"
              ),
          },
          {
            path: "helpers/text",
            name: "text",
            meta: {
              desc: "extended text classes",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/helpers/Text.vue"
              ),
          },
          {
            path: "helpers/background",
            name: "backkground",
            meta: {
              desc: "extended background classes",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/helpers/Background.vue"
              ),
          },
          {
            path: "helpers/borders",
            name: "borders",
            meta: {
              desc: "extended borders classes",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/helpers/Borders.vue"
              ),
          },
          {
            path: "forms",
            name: "forms",
            meta: {
              desc: "forms elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Forms.vue"),
          },
          {
            path: "buttons",
            name: "buttons",
            meta: {
              desc: "buttons elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Buttons.vue"),
          },
          {
            path: "indicator",
            name: "indicator",
            meta: {
              desc: "indicator element",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Indicator.vue"),
          },
          {
            path: "rotate",
            name: "rotate",
            meta: {
              desc: "Rotate element",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Rotate.vue"),
          },
          {
            path: "tables",
            name: "tables",
            meta: {
              desc: "extended bootstrap tables",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Tables.vue"),
          },
          {
            path: "cards",
            name: "cards",
            meta: {
              desc: "card elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Cards.vue"),
          },
          {
            path: "symbol",
            name: "symbol",
            meta: {
              desc: "symbol elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Symbol.vue"),
          },
          {
            path: "badges",
            name: "badges",
            meta: {
              desc: "badge elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Badges.vue"),
          },
          {
            path: "pulse",
            name: "pulse",
            meta: {
              desc: "pulse elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Pulse.vue"),
          },
          {
            path: "bullets",
            name: "bullets",
            meta: {
              desc: "bullets elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Bullets.vue"),
          },
          {
            path: "accordion",
            name: "accordion",
            meta: {
              desc: "accordion elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Accordion.vue"),
          },
          {
            path: "carousel",
            name: "carousel",
            meta: {
              desc: "carousel elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Carousel.vue"),
          },
          {
            path: "overlay",
            name: "overlay",
            meta: {
              desc: "overlay elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Overlay.vue"),
          },
          {
            path: "separator",
            name: "separator",
            meta: {
              desc: "separator elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Separator.vue"),
          },
          {
            path: "tabs",
            name: "tabs",
            meta: {
              desc: "tabs elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Tabs.vue"),
          },
          {
            path: "breadcrumb",
            name: "breadcrumb",
            meta: {
              desc: "breadcrumb elements",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/Breadcrumb.vue"
              ),
          },
          {
            path: "modal",
            name: "modal",
            meta: {
              desc: "modal elements",
            },
            component: () =>
              import("@/view/pages/resources/documentation/base/Modal.vue"),
          },
          {
            path: "pagination",
            name: "pagination",
            meta: {
              desc: "pagination elements",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/base/Pagination.vue"
              ),
          },
          {
            path: "vue-select",
            name: "vue-select",
            meta: {
              desc: "Vue multiselect",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/forms/VueSelect.vue"
              ),
          },
          {
            path: "vee-validate",
            name: "vee-validate",
            meta: {
              desc: "Vee validate",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/forms/VeeValidate.vue"
              ),
          },
          {
            path: "element-ui",
            name: "element-ui",
            component: () =>
              import(
                "@/view/pages/resources/documentation/element-ui/ElementUI.vue"
              ),
            children: [
              {
                path: "basic/layout",
                name: "layout",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/Layout.vue"
                  ),
              },
              {
                path: "basic/layout-container",
                name: "layout-container",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/LayoutContainer.vue"
                  ),
              },
              {
                path: "basic/icon",
                name: "icon",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/Icon.vue"
                  ),
              },
              {
                path: "basic/button",
                name: "button",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/Button.vue"
                  ),
              },
              {
                path: "basic/link",
                name: "link",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/Link.vue"
                  ),
              },
              {
                path: "basic/space",
                name: "space",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/basic/Space.vue"
                  ),
              },
              {
                path: "form/radio",
                name: "radio",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Radio.vue"
                  ),
              },
              {
                path: "form/checkbox",
                name: "checkbox",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Checkbox.vue"
                  ),
              },
              {
                path: "form/input",
                name: "input",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Input.vue"
                  ),
              },
              {
                path: "form/input-number",
                name: "input-number",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/InputNumber.vue"
                  ),
              },
              {
                path: "form/select",
                name: "select",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Select.vue"
                  ),
              },
              {
                path: "form/cascader",
                name: "cascader",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Cascader.vue"
                  ),
              },
              {
                path: "form/switch",
                name: "switch",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Switch.vue"
                  ),
              },
              {
                path: "form/slider",
                name: "slider",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Slider.vue"
                  ),
              },
              {
                path: "form/time-picker",
                name: "time-picker",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/TimePicker.vue"
                  ),
              },
              {
                path: "form/time-select",
                name: "time-select",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/TimeSelect.vue"
                  ),
              },
              {
                path: "form/date-picker",
                name: "date-picker",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/DatePicker.vue"
                  ),
              },
              {
                path: "form/date-time-picker",
                name: "date-time-picker",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/DateTimePicker.vue"
                  ),
              },
              {
                path: "form/upload",
                name: "upload",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Upload.vue"
                  ),
              },
              {
                path: "form/rate",
                name: "rate",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Rate.vue"
                  ),
              },
              {
                path: "form/color-picker",
                name: "color-picker",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/ColorPicker.vue"
                  ),
              },
              {
                path: "form/transfer",
                name: "transfer",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Transfer.vue"
                  ),
              },
              {
                path: "form/form",
                name: "form",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/form/Form.vue"
                  ),
              },
              {
                path: "data/table",
                name: "table",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Table.vue"
                  ),
              },
              {
                path: "data/tag",
                name: "tag",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Tag.vue"
                  ),
              },
              {
                path: "data/progress",
                name: "progress",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Progress.vue"
                  ),
              },
              {
                path: "data/tree",
                name: "tree",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Tree.vue"
                  ),
              },
              {
                path: "data/pagination",
                name: "pagination",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Pagination.vue"
                  ),
              },
              {
                path: "data/badge",
                name: "badge",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Badge.vue"
                  ),
              },
              {
                path: "data/skeleton",
                name: "skeleton",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Skeleton.vue"
                  ),
              },
              {
                path: "data/empty",
                name: "empty",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/data/Empty.vue"
                  ),
              },
              {
                path: "notice/alert",
                name: "alert",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/notice/Alert.vue"
                  ),
              },
              {
                path: "notice/loading",
                name: "loading",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/notice/Loading.vue"
                  ),
              },
              {
                path: "notice/message",
                name: "message",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/notice/Message.vue"
                  ),
              },
              {
                path: "notice/message-box",
                name: "message-box",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/notice/MessageBox.vue"
                  ),
              },
              {
                path: "notice/notification",
                name: "notification",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/notice/Notification.vue"
                  ),
              },
              {
                path: "navigation/affix",
                name: "affix",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/Affix.vue"
                  ),
              },
              {
                path: "navigation/nav-menu",
                name: "nav-menu",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/NavMenu.vue"
                  ),
              },
              {
                path: "navigation/tabs",
                name: "tabs",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/Tabs.vue"
                  ),
              },
              {
                path: "navigation/breadcrumb",
                name: "breadcrumb",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/Breadcrumb.vue"
                  ),
              },
              {
                path: "navigation/page-header",
                name: "page-header",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/PageHeader.vue"
                  ),
              },
              {
                path: "navigation/dropdown",
                name: "dropdown",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/Dropdown.vue"
                  ),
              },
              {
                path: "navigation/steps",
                name: "steps",
                component: () =>
                  import(
                    "@/view/pages/resources/documentation/element-ui/navigation/Steps.vue"
                  ),
              },
            ],
          },
          {
            path: "icons/duotone",
            name: "duotone",
            meta: {
              desc: "duotone svg icons",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/general/Duotone.vue"
              ),
          },
          {
            path: "icons/bootstrap-icons",
            name: "bootstrap-icons",
            meta: {
              desc: "free, high quality, open source icon library",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/general/BootstrapIcons.vue"
              ),
          },
          {
            path: "icons/font-awesome",
            name: "font-awesome",
            meta: {
              desc: "awesome font icons",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/general/FontAwesome.vue"
              ),
          },
          {
            path: "icons/line-awesome",
            name: "line-awesome",
            meta: {
              desc: "line font icons",
            },
            component: () =>
              import(
                "@/view/pages/resources/documentation/general/LineAwesome.vue"
              ),
          },
        ],
      },
    ],
  },

  // auth
  {
    path: "/login",
    name: "login",
    component: () => import("@/view/pages/auth/Login.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("@/view/pages/auth/Login.vue"),
  },
  // {
  //   path: "/registration/confirmation-code",
  //   name: "confirmation-code",
  //   component: () => import("@/view/pages/auth/ConfirmationCode.vue"),
  // },
  // {
  //   path: "/registration/setting-pin",
  //   name: "setting-pin",
  //   component: () => import("@/view/pages/auth/SettingPin.vue"),
  // },
  // {
  //   path: "/registration/confirmation-pin",
  //   name: "confirmation-pin",
  //   component: () => import("@/view/pages/auth/ConfirmationPin.vue"),
  // },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/view/pages/general/Error.vue"),
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/view/pages/general/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const auth = getModule(LoginModule);

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
