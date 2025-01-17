import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { PageHeader } from "../typography/PageHeader";

type PageContainerProps = {
 header?: string;
 children?: ReactNode;
};

const ContainerStyle = {
 display: "flex",
 flexDirection: "column",
 gap: 2,
 height: "100vh",
 padding: 2,
};

export const PageContainer: FC<PageContainerProps> = ({ header, children }) => {
 return (
  <Box sx={ContainerStyle}>
   <PageHeader text={header} />
   {children}
  </Box>
 );
};
