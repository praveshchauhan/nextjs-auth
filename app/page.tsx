"use client";
import { SessionProvider } from "next-auth/react";
import UserDetail from "./components/UserDetail";
export default function Home({ components, pageProps }: { components: React.ReactNode, pageProps: any }) {
  return (
    <SessionProvider session={pageProps?.session}>
      <UserDetail />
    </SessionProvider>
  );
}
