interface IMenuStylesConfig {
  isActive: boolean;
  theme: "dark" | "light" | "system";
}

export const menuColor = ({ isActive, theme }: IMenuStylesConfig) => {
  if (theme === "dark") {
    if (isActive) {
      return "yellow";
    } else {
      return "#fff";
    }
  } else {
    if (isActive) {
      return "#000";
    } else {
      return "#000";
    }
  }
};
export const menuBackground = ({ isActive, theme }: IMenuStylesConfig) => {
  if (theme === "dark") {
    if (isActive) {
      return "#2c2c2c";
    } else {
      return "transparent";
    }
  } else {
    if (isActive) {
      return "#E1E6F0";
    } else {
      return "transparent";
    }
  }
};

export const menuBorderBottomTextColor = ({
  isActive,
  theme,
}: IMenuStylesConfig) => {
  if (theme === "dark") {
    if (isActive) {
      return "1px solid yellow";
    } else {
      return "none";
    }
  } else {
    if (isActive) {
      return "1px solid black";
    } else {
      return "none";
    }
  }
};
