import { useNavbarStore } from "../../store/useNavbar.store";

export const Home = () => {
  useNavbarStore.setState({ title: "Home" });
  return <div>Home</div>;
};
