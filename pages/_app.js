import { GlobalStyles } from "@mui/material";
import { MuiGlobalStyle } from "@/styles/muiGlobalStyle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "@/styles/muiGlobalStyle";
import ClientLayout from "@/components/clientUi/layout/ClientLayout";
import AdminLayout from "@/components/adminUi/layout/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const theme = createTheme(customTheme);

export default function App({ Component, pageProps }) {
  const [layout, setLayout] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let path = router.pathname;
    let adminLayout = path.match("admin");
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
          </ClientLayout>
        ) : (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        )}
      </ThemeProvider>
    </>
  );
}
