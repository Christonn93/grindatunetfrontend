import { Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function HealthCheck() {
 const [status, setStatus] = useState<string | null>(null);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const checkHealth = async () => {
   try {
    const response = await fetch("/api/health");
    const data = await response.json();
    if (response.ok) {
     setStatus(data.message);
    } else {
     setError(data.message);
    }
   } catch {
    setError("Unable to connect to the Cosmic API");
   }
  };

  checkHealth();
 }, []);

 return (
  <Box mt={3}>
   {status && (
    <>
     <Alert severity="success">{status}</Alert>
    </>
   )}
   {error && <Alert severity="error">{error}</Alert>}
  </Box>
 );
}
