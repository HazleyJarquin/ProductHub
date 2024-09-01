import styles from "./styles/styles.module.css";
import { shallow } from "zustand/shallow";
import { useNavbarStore } from "../../store/useNavbar.store";
import { useProductStore } from "../../store/useProducts.store";
import { useGetAllProducts } from "../../services/getAllProducts.service";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProductCard } from "../../components/ProductCard";

export const Products = () => {
  const { t } = useTranslation();
  useNavbarStore.setState({ title: t("PRODUCTS_TITLE") });

  const { products, setProducts } = useProductStore(
    (state) => ({
      products: state.products,
      setProducts: state.setProducts,
    }),
    shallow
  );

  const { data: productsResponse } = useGetAllProducts();

  useEffect(() => {
    if (productsResponse) {
      setProducts(productsResponse);
    } else {
      setProducts([]);
    }
  }, [productsResponse, setProducts]);

  return (
    <div className={styles.gridContainer}>
      {products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.title}
            productDescription={product.description}
            productImage={product.image}
            productPrice={product.price}
            productRating={product.rating.rate}
            productRatingCount={product.rating.count}
          />
        ))
      ) : (
        <li>No products available</li>
      )}
    </div>
  );
};
