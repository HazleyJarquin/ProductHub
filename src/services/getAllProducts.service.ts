import { useQuery } from "react-query";
import { API_BASE_URL } from "../shared/api.config";
import axios from "axios";
const getAllProducts = async () => {
  const response = await axios(`${API_BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const useGetAllProducts = () => {
  return useQuery(["getAllProducts"], {
    async queryFn() {
      return getAllProducts();
    },
  });
};
