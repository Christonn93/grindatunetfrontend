import { headerRouter } from "@/options/router";
import Link from "next/link";
import { Box, Link as NavLink } from "@mui/material";

export const HeaderNavigation = () => {
 return (
  <>
   <Box sx={{ display: "flex", gap: 3 }}>
    {headerRouter.map((route) => (
     <NavLink component={Link} key={route.id} href={route.path} color="inherit" variant="body2" sx={{ textDecoration: "none", marginRight: 3 }}>
      {route.name}
     </NavLink>
    ))}
   </Box>
  </>
 );
};
