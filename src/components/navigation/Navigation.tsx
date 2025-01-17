import { headerRouter } from "@/options/router";
import { Box } from "@mui/material";
import { BaseLink } from "../link/BaseLink";

export const Navigation = () => {
 return (
  <Box sx={{ display: "flex", gap: 3 }}>
   {headerRouter.map((route) => (
    <BaseLink key={route.id} route={route} />
   ))}
  </Box>
 );
};
