import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";

export const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* <div
          style={{
            width: "100%",
            padding: "12px 1.5rem",
            position: "sticky",
            top: 0,
            background: "black",
            zIndex: 3,
            color: "white",
          }}
        >
          navbar
        </div> */}
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
