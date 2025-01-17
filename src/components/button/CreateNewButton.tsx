import { useRouter } from "next/router";
import { PlusOneOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export const CreateNewButton = () => {
 const router = useRouter();

 const handleClick = () => {
  router.push("/create");
 };

 return (
  <Button onClick={handleClick}>
   <PlusOneOutlined />
  </Button>
 );
};
