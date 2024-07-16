import NextAuth from "next-auth";
import Dropbox from "next-auth/providers/dropbox";
import Github from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Github, Dropbox],
});
