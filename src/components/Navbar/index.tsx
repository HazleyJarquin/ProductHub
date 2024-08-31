import { shallow } from "zustand/shallow";
import { useNavbarStore } from "../../store/useNavbar.store";

export const Navbar = () => {
  const title = useNavbarStore((state) => state.title, shallow);
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",

        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      }}
    >
      <h1 style={{ color: "#000", fontWeight: "bold" }}>{title}</h1>
    </div>
  );
};
