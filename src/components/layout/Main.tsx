import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
 children: ReactNode;
}

export const Main = ({ children }: LayoutProps) => {
 return (
  <Box
   sx={{
    flexGrow: 1,
   }}
  >
   <Container maxWidth="xl">
    <Box>{children}</Box>
   </Container>
  </Box>
 );
};
