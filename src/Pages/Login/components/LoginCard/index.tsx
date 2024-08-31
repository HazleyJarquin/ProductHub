import styles from "../../styles/styles.module.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ToggleLanguageAndThemeButton } from "../../../../components/ToggleLanguageAndThemeButton";
import { TFunction } from "i18next";
import { FormikProps } from "formik";
import { LoaderCircleIcon } from "lucide-react";
import { CredentialsField } from "./components/CredentialsField";
import { ILoginRequest } from "../../../../interfaces";

interface Props {
  t: TFunction;
  formik: FormikProps<ILoginRequest>;
  isLoading: boolean;
}

export const LoginCard = ({ formik, t, isLoading }: Props) => {
  return (
    <Card className={styles.cardContainer}>
      <CardHeader>
        <div className={styles.headerContainer}>
          <div style={{ width: "50%" }}>
            <CardTitle>{t("LOGIN_TEXT")}</CardTitle>
          </div>
          <div style={{ width: "50%" }}>
            <ToggleLanguageAndThemeButton justifycontent="end" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className={styles.cardContentContainer}>
          <CredentialsField t={t} formik={formik} formikField="username" />
          <CredentialsField t={t} formik={formik} formikField="password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => formik.handleSubmit()}
          disabled={!formik.dirty || !formik.isValid || isLoading}
        >
          {isLoading ? (
            <>
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            t("LOGIN_TEXT")
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
