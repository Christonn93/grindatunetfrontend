import { Button } from "@mui/material";

export const LoginButton = ({ onLogin }: { onLogin: () => void }) => {
 return (
  <Button variant="contained" onClick={onLogin} sx={{ backgroundColor: "#f50057", color: "white" }}>
   Login
  </Button>
 );
};
