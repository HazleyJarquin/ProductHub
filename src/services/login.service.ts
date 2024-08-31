import axios from "axios";
import { useMutation } from "react-query";
import { API_BASE_URL } from "../shared/api.config";

const login = async (values: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const useLoginMutation = () => {
  return useMutation(login);
};
