import { Box, Typography } from "@mui/material";
import { Logo } from "../image/Logo";

export const CompanyDisplay = () => {
 return (
  <Box sx={{ display: "flex", alignItems: "center" }}>
   <Logo />
   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    Grinda Tunet
   </Typography>
  </Box>
 );
};
