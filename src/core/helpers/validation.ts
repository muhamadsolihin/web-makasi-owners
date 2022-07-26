import { useField } from "vee-validate"
import * as yup from "yup"

export const { value: phone, errorMessage: messagePhoneError } = useField(
  "phone",
  yup.string().required().default("")
);
export const { value: email, errorMessage: messageEmailError } = useField(
  "email",
  yup
    .string()
    .email()
    .required()
    .default("")
);