import { computed } from "vue";
import router from "@/router";

/**
 * Set header type
 * @returns {boolean}
 */
export const headerType = computed(() => {
  return (
    (router.currentRoute.value.fullPath as string).indexOf("light") !== -1 ||
    (router.currentRoute.value.fullPath as string).indexOf("extended") !== -1
  );
});

/**
 * Set display header menu button
 * @returns {boolean}
 */
export const headerTypeWithMenu = computed(() => {
  return (
    (router.currentRoute.value.fullPath as string).indexOf("compact") !== -1
  );
});

/**
 * Returns aside enabled meta propery
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  return router.currentRoute.value.meta.asideEnabled;
});
