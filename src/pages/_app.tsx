import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import theme from "@/theme/theme";
import Layout from "@/components/layout/Layout";
import { JSX } from "react";

type AppPropsWithLayout = AppProps & {
 Component: {
  getLayout?: (page: JSX.Element) => JSX.Element;
 };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
 const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

 return (
  <ThemeProvider theme={theme}>
   <CssBaseline />
   {getLayout(<Component {...pageProps} />)}
  </ThemeProvider>
 );
}
