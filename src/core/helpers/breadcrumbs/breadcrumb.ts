import store from "@/store";
import { Actions } from "@/store/enums/store.enums";

/**
 * Sets current page breadcrumbs
 * @param {string} section Current page section name
 * @param {string} title Current page title name
 */
export const setCurrentPageBreadcrumbs = (
  section: string,
  title: string
): void => {
  store.dispatch(Actions.SET_BREADCRUMB_ACTION, {
    section: section,
    title: title
  });
};

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export const setCurrentPageTitle = (title: string): void => {
  store.dispatch(Actions.SET_BREADCRUMB_ACTION, {
    title: title
  });
};
