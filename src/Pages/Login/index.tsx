import styles from "./styles/styles.module.css";
import useLogin from "./hook/useLogin";
import { LoginCard } from "./components/LoginCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../../services/login.service";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/ui/button";
import { useAuthToken } from "../../store/useAuthToken.store";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const {
    mutate: loginMutate,
    error,
    isError,
    isLoading,
    data: loginData,
  } = useLoginMutation();

  const { setToken } = useAuthToken(
    (state) => ({ setToken: state.setToken }),
    shallow
  );

  const navigate = useNavigate();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    await loginMutate(values);

    return new Promise<void>((resolve) => setTimeout(resolve, 1000));
  };

  useEffect(() => {
    if (isError) {
      const errorMessage = error?.response?.data || t("UNEXPECTED_ERROR");

      const translatedMessage =
        errorMessage === "username or password is incorrect"
          ? t("USERNAME_OR_PASSWORD_INCORRECT")
          : errorMessage;

      setShowModal(true);
      setMessage(translatedMessage);
    } else if (loginData?.token) {
      setToken(loginData.token);
      navigate("/home");
    }
  }, [isError, error, loginData]);

  const formik = useLogin({ onSubmitCallback: handleSubmit, t });
  return (
    <div className={styles.loginContainer}>
      {showModal && (
        <Modal
          title={t("MODAL_CRENDETIALS_INVALID_TITLE")}
          open={showModal}
          onClose={() => setShowModal(false)}
          bodyContent={<p style={{ fontSize: "15px" }}>{message}</p>}
          footerContent={
            <Button
              onClick={() => {
                formik.resetForm();
                setShowModal(false);
              }}
            >
              Ok
            </Button>
          }
        />
      )}
      <LoginCard isLoading={isLoading} formik={formik} t={t} />
    </div>
  );
};
