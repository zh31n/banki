import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        phone: { label: "phone", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials) {
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
};
