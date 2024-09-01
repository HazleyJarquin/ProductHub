import { shallow } from "zustand/shallow";
import { useNavbarStore } from "../../store/useNavbar.store";
import { ToggleLanguageAndThemeButton } from "../ToggleLanguageAndThemeButton";
import { useTheme } from "../../theme/ThemeProvider";

export const Navbar = () => {
  const title = useNavbarStore((state) => state.title, shallow);
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: theme === "light" ? "#000" : "#fff",
          fontWeight: "bold",
        }}
      >
        {title}
      </h1>
      <ToggleLanguageAndThemeButton justifycontent="end" />
    </div>
  );
};
