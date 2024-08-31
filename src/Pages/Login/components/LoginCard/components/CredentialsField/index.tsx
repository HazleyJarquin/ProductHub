import styles from "./styles/styles.module.css";
import { FormikProps } from "formik";
import { WaringIconText } from "../../../../../../components/WarningIconText";
import { Input } from "../../../../../../components/ui/input";
import { ILoginRequest } from "../../../../../../interfaces";
import { Label } from "../../../../../../components/ui/label";
import { TFunction } from "i18next";

interface Props {
  formik: FormikProps<ILoginRequest>;
  formikField: "username" | "password";
  t: TFunction;
}

export const CredentialsField = ({ formik, formikField, t }: Props) => {
  const fieldLabelAndPlaceholder =
    formikField === "username" ? t("USERNAME_LABEL") : t("PASSWORD_LABEL");

  const borderColor =
    formik.errors[formikField] && formik.touched[formikField] ? "red" : "";

  return (
    <div className={styles.container}>
      <div className={styles.labelAndError}>
        <Label htmlFor={formikField}>{fieldLabelAndPlaceholder}</Label>
        {formik.errors[formikField] && formik.touched[formikField] && (
          <WaringIconText iconSize={"20px"} text={formik.errors[formikField]} />
        )}
      </div>
      <Input
        style={{
          borderColor,
        }}
        id={formikField}
        type={formikField === "password" ? "password" : "text"}
        placeholder={fieldLabelAndPlaceholder}
        value={formik.values[formikField]}
        onBlur={() => {
          formik.setFieldTouched(formikField, true);
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          formik.setFieldValue(formikField, e.target.value);
        }}
      />
    </div>
  );
};
