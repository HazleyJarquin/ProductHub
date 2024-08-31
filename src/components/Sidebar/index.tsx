import { ArrowRightLeftIcon } from "lucide-react";
import { useState } from "react";
import {
  Sidebar as ReactSidebar,
  Menu,
  MenuItem,
  // SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ReactSidebar collapsed={collapsed}>
      <Button
        style={{ background: "transparent", color: "#000" }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <ArrowRightLeftIcon />
      </Button>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        {/* <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu> */}
        <MenuItem component={<Link to="/products" />}>Products</MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </ReactSidebar>
  );
};
