import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

interface User {
  sub: number;
  user: string;
}

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  tokenDecoded: User | null;
};

export const useAuthToken = createWithEqualityFn(
  persist<AuthState>(
    (set) => ({
      token: null,
      setToken: (token: string) => {
        const decodedToken = token ? jwtDecode<User>(token) : null;
        set({ token, tokenDecoded: decodedToken });
      },
      tokenDecoded: null,
    }),
    {
      name: "auth-token",
    }
  )
);
