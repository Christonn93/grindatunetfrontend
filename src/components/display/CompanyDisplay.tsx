import { Box, Typography } from "@mui/material";

export const CompanyDisplay = () => {
 return (
  <Box sx={{ display: "flex", alignItems: "center" }}>
   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    Your Company
   </Typography>
  </Box>
 );
};
