import { GlobalStyles } from "@mui/material";
import { MuiGlobalStyle } from "@/styles/muiGlobalStyle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "@/styles/muiGlobalStyle";
import ClientLayout from "@/components/clientUi/layout/ClientLayout";
import UserLayout from "@/components/userUi/layout/UserLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

const theme = createTheme(customTheme);

export default function App({ Component, pageProps: { session, ...pageProps} }) {
  const [layout, setLayout] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let path = router.pathname;
    let adminLayout = path.match("user");
    if (adminLayout) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  });

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={MuiGlobalStyle} />
        {!layout ? (
          <ClientLayout>
            <Component {...pageProps} />
          </ClientLayout>
        ) : (
          <UserLayout>
            <Component {...pageProps} />
          </UserLayout>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}
