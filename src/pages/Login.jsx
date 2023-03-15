import { useFormik } from "formik";
import { loginSchema } from "../schemas/validationSchema";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, action) => {
        alert(JSON.stringify(values));
        console.log("Login Form", values);
        action.resetForm();
      },
    });


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
                  Entrar na sua conta
                </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">
                  Ou &nbsp;
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    fazer cadastro
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
                      className={`form-input block py-2 px-3 border  rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full 
                  ${
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
                      className={`form-input block py-2 px-3 border  rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                        errors.password && touched.password ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div class="mt-2 flex items-center justify-end">
                    <div class="text-sm leading-5">
                      <a
                        href="/ResetPassword"
                        class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>

                  <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                      <button
                        type="submit" 
                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      >
                        Entrar
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }
export default Login;
