import { Actions } from "@/store/enums/store.enums";
import store from "@/store/index";

/**
 * Enables loader
 * @param {number} delay loading time in milliseconds
 * @returns {boolean}
 */
export const loading = (delay: number): void => {
  // Add loading class to body
  store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

  // Simulate the delay page loading
  setTimeout(() => {
    // Remove page loader after some time
    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
  }, delay);
};
