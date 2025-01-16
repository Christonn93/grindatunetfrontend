import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const MobileMenuButton = () => {
 return (
  <Box sx={{ display: { xs: "block", sm: "none" } }}>
   <IconButton color="inherit">
    <MenuIcon />
   </IconButton>
  </Box>
 );
};
