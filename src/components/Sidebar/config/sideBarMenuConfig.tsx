import { TFunction } from "i18next";
import { HouseIcon, ShoppingCartIcon } from "lucide-react";

interface Props {
  t: TFunction;
}

export const sideBarMenuConfig = ({ t }: Props) => {
  const sidebarMenus = [
    {
      id: "home",
      label: t("HOME_TITLE"),
      url: "/home",
      icon: <HouseIcon />,
    },
    {
      id: "products",
      label: t("PRODUCTS_TITLE"),
      url: "/products",
      icon: <ShoppingCartIcon />,
    },
  ];
  return { sidebarMenus };
};
