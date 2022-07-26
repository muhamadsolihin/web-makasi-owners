const ID_TOKEN_KEY = "id_token" as string;

/**
 * @description get
 */
export const getToken = (): string | null => {
  return window.sessionStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description initialize app
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.sessionStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description initialize app
 */
export const destroyToken = (): void => {
  window.sessionStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
