import Image from "next/image";
import LogoImage from "../../assets/ngLogo.jpg";

export const Logo = () => {
 return <Image src={LogoImage} alt="Logo" style={{ width: "100px", height: "50px", marginRight: 8 }} />;
};
