import { ElementAnimateUtil } from "@/assets/ts/_utils/ElementAnimateUtil.ts";

/**
 * Show auth form by name
 * @param {string} formName Name of the form which will be shown
 * @returns {boolean}
 */
export const showForm = formName => {
  const _signinForm = document.getElementById("kt_login_signin_form");
  const _signupForm = document.getElementById("kt_login_signup_form");
  const _passwordResetForm = document.getElementById(
    "kt_login_password_reset_form"
  );

  let form;

  _signinForm?.classList.add("d-none");
  _signupForm?.classList.add("d-none");
  _passwordResetForm?.classList.add("d-none");

  if (formName === "signin") {
    form = _signinForm;
  }

  if (formName === "signup") {
    form = _signupForm;
  }

  if (formName === "password_reset") {
    form = _passwordResetForm;
  }

  form.classList.remove("d-none");
  form.style["animationDuration"] = "0.6s";
  ElementAnimateUtil.animateClass(form, "animate__animated animate__backInUp");
};
