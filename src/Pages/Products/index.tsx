import { useNavbarStore } from "../../store/useNavbar.store";

export const Products = () => {
  useNavbarStore.setState({ title: "Products" });
  return <div>Products</div>;
};
