import React from "react";
import { Box, Container } from "@mui/material";
import { footerRouter } from "@/options/router";
import { FooterSection } from "../sections/FooterSection";
import HealthCheck from "../HealthCheck";
import { CompanyDisplay } from "../display/CompanyDisplay";

export const Footer: React.FC = () => {
 const usefulLinks = footerRouter.filter((link) => ["Home", "About Us", "Services"].includes(link.name));
 const moreLinks = footerRouter.filter((link) => ["Contact Us", "FAQ", "Privacy Policy"].includes(link.name));

 return (
  <Box
   sx={{
    backgroundColor: "#f8f8f8",
    py: 4,
    mt: "auto",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 4,
   }}
  >
   <Container>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
     <CompanyDisplay />
     <FooterSection title="Useful Links" links={usefulLinks} />
     <FooterSection title="More Links" links={moreLinks} />
    </Box>
    <HealthCheck />
   </Container>
  </Box>
 );
};
