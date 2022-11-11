import * as yup from "yup";

export const formModel = [
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Email",
    autoComplete: "email",
    fullWidth: true,
  },
];

export const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
});

export const formDefaultValues = {
  email: "",
};
