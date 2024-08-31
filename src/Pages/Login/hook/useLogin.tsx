import * as yup from "yup";
import { useFormik, FormikConfig } from "formik";
import { TFunction } from "i18next";

interface LoginFormValues {
  username: string;
  password: string;
}

interface UseLoginProps {
  onSubmitCallback: (values: LoginFormValues) => Promise<void>;
  t: TFunction;
}

const useLogin = ({ onSubmitCallback, t }: UseLoginProps) => {
  const validationSchema = yup.object().shape({
    username: yup.string().required(t("USERNAME_REQUIRED")),
    password: yup.string().required(t("PASSWORD_REQUIRED")),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmitCallback(values);
      } catch (error) {
        console.error("Error al procesar el formulario:", error);
      }
    },
  } as FormikConfig<LoginFormValues>);

  return formik;
};

export default useLogin;
