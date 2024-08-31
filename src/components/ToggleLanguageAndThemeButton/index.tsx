import { ToggleThemeButton } from "../ToggleThemeButton";
import { ToggleLanguageButton } from "../ToogleLanguageButton";
import styles from "./styles/styles.module.css";
interface Props {
  justifycontent: "start" | "center" | "end";
}

export const ToggleLanguageAndThemeButton = ({ justifycontent }: Props) => {
  const justifyContentClass =
    justifycontent === "start"
      ? styles.start
      : justifycontent === "center"
      ? styles.center
      : styles.end;

  return (
    <div className={`${styles.container} ${justifyContentClass}`}>
      <ToggleLanguageButton />
      <ToggleThemeButton />
    </div>
  );
};
