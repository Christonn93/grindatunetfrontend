import Link from "next/link";
import { Link as NavLink } from "@mui/material";

type Route = {
 id: number;
 path: string;
 name: string;
};

interface BaseLinkProps {
 route: Route;
}

export const BaseLink: React.FC<BaseLinkProps> = ({ route }) => {
 return (
  <NavLink component={Link} href={route.path} color="inherit" variant="body2" sx={{ textDecoration: "none", marginRight: 3 }}>
   {route.name}
  </NavLink>
 );
};
