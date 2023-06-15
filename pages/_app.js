import { GlobalStyles } from "@mui/material";
import { MuiGlobalStyle } from "@/styles/muiGlobalStyle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "@/styles/muiGlobalStyle";
import ClientLayout from "@/components/clientUi/layout/ClientLayout";
import UserLayout from "@/components/userUi/layout/UserLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme(customTheme);

export default function App({ Component, pageProps }) {
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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={MuiGlobalStyle} />
        {!layout ? (
          <ClientLayout>
            <Component {...pageProps} />
            <ToastContainer/>
          </ClientLayout>
        ) : (
          <UserLayout>
            <Component {...pageProps} />
            <ToastContainer/>
          </UserLayout>
        )}
      </ThemeProvider>
    </>
  );
}
