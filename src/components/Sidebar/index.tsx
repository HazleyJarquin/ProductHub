import styles from "./styles/styles.module.css";
import { Sidebar as ReactSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { sideBarMenuConfig } from "./config/sideBarMenuConfig";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/ThemeProvider";
import {
  menuBackground,
  menuBorderBottomTextColor,
  menuColor,
} from "./utils/menusStylesConfig";
import { useAuthToken } from "../../store/useAuthToken.store";
import { shallow } from "zustand/shallow";
import { User2Icon } from "lucide-react";

export const Sidebar = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const tokenDecoded = useAuthToken((state) => state.tokenDecoded, shallow);
  const { sidebarMenus } = sideBarMenuConfig({
    t,
  });
  const location = useLocation();

  return (
    <ReactSidebar
      transitionDuration={500}
      backgroundColor={theme === "dark" ? "#1c1c1c" : "#F4F7FC"}
      style={{
        borderColor: "transparent",
      }}
    >
      <h1
        style={{
          padding: "1rem",
          fontSize: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Product<span style={{ color: "yellow" }}>Hub</span>
      </h1>

      <Menu
        style={{
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <MenuItem
          style={{
            borderRadius: "10px",
            background: theme === "dark" ? "#2c2c2c" : "#E1E6F0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <User2Icon />
            <span style={{ color: theme === "dark" ? "yellow" : "#000" }}>
              {tokenDecoded?.user}
            </span>
          </div>
        </MenuItem>
      </Menu>

      <Menu style={{ padding: "1rem" }}>
        {sidebarMenus.map((menu) => {
          const isActive = location.pathname === menu.url;

          return (
            <MenuItem
              style={{
                borderRadius: "10px",
                background: menuBackground({ isActive, theme }),
                color: menuColor({ isActive, theme }),
              }}
              key={menu.id}
              component={<Link to={menu.url} />}
              icon={menu.icon}
              className={styles.menuItem}
            >
              <p
                style={{
                  display: "inline-block",
                  borderBottom: menuBorderBottomTextColor({
                    isActive,
                    theme,
                  }),
                }}
              >
                {menu.label}
              </p>
            </MenuItem>
          );
        })}
      </Menu>
    </ReactSidebar>
  );
};
