import { Button } from "@mui/material";

export const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
 return (
  <Button variant="outlined" onClick={onLogout} sx={{ borderColor: "#f50057", color: "#f50057" }}>
   Logout
  </Button>
 );
};
