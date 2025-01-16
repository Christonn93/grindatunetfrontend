import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import HealthCheck from "../HealthCheck";

export const Footer = () => {
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
     <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
       Your Company
      </Typography>
     </Box>
     <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
       Useful Links
      </Typography>
      <ul style={{ listStyle: "none", padding: 0 }}>
       <li>
        <Link href="/" variant="body2" sx={{ textDecoration: "none" }}>
         Home
        </Link>
       </li>
       <li>
        <Link href="/about" variant="body2" sx={{ textDecoration: "none" }}>
         About Us
        </Link>
       </li>
       <li>
        <Link href="/services" variant="body2" sx={{ textDecoration: "none" }}>
         Services
        </Link>
       </li>
      </ul>
     </Box>
     <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
       More Links
      </Typography>
      <ul style={{ listStyle: "none", padding: 0 }}>
       <li>
        <Link href="/contact" variant="body2" sx={{ textDecoration: "none" }}>
         Contact Us
        </Link>
       </li>
       <li>
        <Link href="/faq" variant="body2" sx={{ textDecoration: "none" }}>
         FAQ
        </Link>
       </li>
       <li>
        <Link href="/privacy" variant="body2" sx={{ textDecoration: "none" }}>
         Privacy Policy
        </Link>
       </li>
      </ul>
     </Box>
    </Box>
    <HealthCheck />
   </Container>
  </Box>
 );
};
