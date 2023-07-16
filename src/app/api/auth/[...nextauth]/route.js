import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Connect from "@/utils/db";
import User from "@/models/Users";
var bcrypt = require("bcryptjs");

const handle = NextAuth({
  providers: [
    CredentialsProvider({
      _id: "Credentials",
      name: "Credentials",

      async authorize(credentials) {
        await Connect();
        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          !user && Error("User not found");

          const hashPassword = bcrypt.compare(
            credentials.password,
            user.password
          );

          !hashPassword && Error("Wrong Username or password");
        } catch (err) {}
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handle as GET, handle as POST };
