import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { TerminalContextProvider } from "react-terminal";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <TerminalContextProvider>
        <Component {...pageProps} />
      </TerminalContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
