import { Box } from "@mui/material";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
 children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     height: "100vh",
     gap: 2,
    }}
   >
    <Header />
    <Main>{children}</Main>
    <Footer />
   </Box>
  </>
 );
}
