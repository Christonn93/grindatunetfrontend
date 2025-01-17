import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Navigation } from "../navigation/Navigation";
import { CompanyDisplay } from "../display/CompanyDisplay";
import { MobileMenuButton } from "../button/MobileMenuButton";
import { AuthButtons } from "../button/AuthButtons";
import { Head } from "./Head";

export const Header = () => {
 return (
  <>
   <Head />
   <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
    <Container>
     <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <CompanyDisplay />
      <Navigation />
      <AuthButtons />
      <MobileMenuButton />
     </Toolbar>
    </Container>
   </AppBar>
  </>
 );
};
