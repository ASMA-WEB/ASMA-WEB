import * as Yup from "yup";

//................SignUP Schema Validation.............................//
export const signUpSchema = Yup.object({
  email: Yup.string()
    .email("O e-mail deve ser válido")
    .required("Esse campo é obrigatório"),
  reEnterEmail: Yup.string()
    .email("O e-mail deve ser válido")
    .required("Os dois e-mails devem ser iguais. Esse campo é obrigatório")
    .oneOf([Yup.ref("email"), null], "Os dois e-mails devem ser iguais."),
  password: Yup.string()
    .required("Esse campo é obrigatório")
    .min(6, "auth/weak-password"),
  termsAndConditions: Yup.boolean()
    .required("Esse campo é obrigatório")
    .oneOf([true], "Please accept the terms and conditions"),
});

//................Login Schema Validation.............................//
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("O e-mail deve ser válido")
    .required("Esse campo é obrigatório"),
  password: Yup.string()
    .required("Esse campo é obrigatório")
    .min(6, "auth/weak-password"),
});
