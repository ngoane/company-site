import { GlobalStyles } from "@mui/material";
import { MuiGlobalStyle } from "@/styles/muiGlobalStyle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "@/styles/muiGlobalStyle";
import Layout from "@/components/layout/Layout";

const theme = createTheme(customTheme);

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={MuiGlobalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
