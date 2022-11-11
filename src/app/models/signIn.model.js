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
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
    autoComplete: "current-password",
    fullWidth: true,
  },
];

export const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup.string().required("Password is required"),
});

export const formDefaultValues = {
  email: "",
  password: "",
};
