import { createWithEqualityFn } from "zustand/traditional";
import { IProductsResponse } from "../interfaces";

interface ProductStore {
  products: IProductsResponse[];
  setProducts: (products: IProductsResponse[]) => void;
}

export const useProductStore = createWithEqualityFn<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
