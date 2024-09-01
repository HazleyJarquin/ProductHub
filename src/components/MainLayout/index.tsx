import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";

export const MainLayout = () => {
  return (
    <div
      style={{
        // backgroundColor: theme === "dark" ? "#202124" : "#fff",
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <Sidebar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Navbar />

        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "1rem 2.5rem",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
