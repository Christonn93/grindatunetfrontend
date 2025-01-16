import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";

import Head from "next/head";
import { HeaderNavigation } from "../navigation/HeaderNavigation";
import { LoginButton } from "../button/LoginButton";
import { CompanyDisplay } from "../display/CompanyDisplay";
import { MobileMenuButton } from "../button/MobileMenuButton";

export const Header = () => {
 return (
  <>
   <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
    <Container>
     <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <CompanyDisplay />
      <HeaderNavigation />
      <LoginButton />
      <MobileMenuButton />
     </Toolbar>
    </Container>
   </AppBar>
  </>
 );
};
