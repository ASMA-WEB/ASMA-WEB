import { useFormik } from "formik";
import { signUpSchema } from "../schemas/validationSchema";

const SignUp = () => {
  const initialValues = {
    email: "",
    reEnterEmail: "",
    password: "",
    termsAndConditions: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, action) => {
        alert(JSON.stringify(values));
        console.log("Sign Up Form", values);
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src="/assets/images/kiwify-logo.png"
              alt="Kiwify"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Criar nova conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou &nbsp;
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                entrar na sua conta existente
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    errors.email && touched.email
                      ? "border-red-500 "
                      : "border-gray-300"
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="reEnterEmail"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  Repetir e-mail
                </label>
                <input
                  type="email"
                  id="re-enter-email"
                  name="reEnterEmail"
                  value={values.reEnterEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input block py-2 px-3 border  rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    errors.reEnterEmail && touched.reEnterEmail
                      ? "border-red-500 "
                      : "border-gray-300"
                  }`}
                />
                {errors.reEnterEmail && touched.reEnterEmail && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.reEnterEmail}
                  </span>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    errors.password && touched.password
                      ? "border-red-500 "
                      : "border-gray-300"
                  }`}
                />
                {errors.password && touched.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </span>
                )}
              </div>

              <div class="mt-6">
                <label class="relative flex items-start mt-2">
                  <div class="flex items-center h-5">
                    <input
                      id="termsAndConditions"
                      name="termsAndConditions"
                      value={values.termsAndConditions}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="checkbox"
                      class={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer
                      ${
                        errors.termsAndConditions && touched.termsAndConditions
                          ? "border-red-500 "
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <div class="ml-2 text-sm leading-5">
                    <span class="font-medium text-gray-700">
                      Eu li e aceito os
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        class="underline"
                      >
                        termos de uso
                      </a>
                      ,
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        class="underline"
                      >
                        termos de licença de uso de software
                      </a>
                      ,
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        class="underline"
                      >
                        política de conteúdo
                      </a>
                      da Kiwify
                    </span>
                  </div>
                </label>
                {errors.termsAndConditions && touched.termsAndConditions && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.termsAndConditions}
                  </span>
                )}
              </div>

              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Criar conta
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
