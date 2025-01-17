import { Box, Typography, Link } from "@mui/material";

type LinkItem = {
 id: number;
 path: string;
 name: string;
};

interface FooterSectionProps {
 title: string;
 links: LinkItem[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
 return (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
   <Typography variant="h6" sx={{ mb: 2 }}>
    {title}
   </Typography>
   <ul style={{ listStyle: "none", padding: 0 }}>
    {links.map((link) => (
     <li key={link.id}>
      <Link href={link.path} variant="body2" sx={{ textDecoration: "none" }}>
       {link.name}
      </Link>
     </li>
    ))}
   </ul>
  </Box>
 );
};
