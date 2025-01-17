import { Typography } from "@mui/material";
import { FC } from "react";

type PageHeaderProps = {
 text?: string;
};

export const PageHeader: FC<PageHeaderProps> = ({ text }) => {
 return (
  <Typography variant="h3" component="h1">
   {text}
  </Typography>
 );
};
