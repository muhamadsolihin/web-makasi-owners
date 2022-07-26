import { createApp } from "vue";
import App from "@/App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.
 */
import router from "@/router/index";
import store from "@/store/index";
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css'

//imports for app initialization
// import MockService from "@/core/mock/MockService";
// import ApiService from "@/core/services/ApiService";
import LayoutService from "@/core/services/LayoutService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { createGlobalComponents } from "@/core/components/components";

import PrimeVue from "primevue/config";
import ToastServices from "primevue/toastservice"

import "@/core/plugins/bootstrap";
import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "@/firebaseInitialize";
// import { messaging } from "@/firebaseInitialize";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(PrimeVue);
app.use(ToastServices);
// app.config.globalProperties.$messaging = messaging

createGlobalComponents(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

// ApiService.init(app);
LayoutService.init();
// MockService.init(app);

app.mount("#app");
