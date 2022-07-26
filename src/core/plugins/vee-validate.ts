// import { configure } from "vee-validate";
import { configure, defineRule } from 'vee-validate';

export function initVeeValidate() {
  // Updating default vee-validate configuration
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true
  });
}

defineRule('required', value => {
  if (!value || !value.length) {
    return 'This field is required';
  }
  return true;
});

defineRule('email', value => {
  // Check if email
  // eslint-disable-next-line
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return 'This field must be a valid email';
  }
  return true;
});

defineRule("numeric", value => {
  if (!/^\d+$/.test(value)) {
    return 'This field must be a numeric';
  }
  return true
})

defineRule('minMax', (value, [min, max]) => {
  const numericValue = Number(value);
  if (numericValue < min) {
    return `This field must be greater than ${min}`;
  }
  if (numericValue > max) {
    return `This field must be less than ${max}`;
  }
  return true;
});

defineRule('minLength', (value, [limit]) => {
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

defineRule('maxLength', (value, [limit]) => {
  if (value.length != limit) {
    return `This field must be ${limit} characters`;
  }
  return true;
});
