/**
 * Get asset absolute path
 * @param {string} pathname
 * @returns {boolean}
 */
export const toAbsoluteUrl = (pathname: string) => {
  return process.env.BASE_URL + pathname;
};
