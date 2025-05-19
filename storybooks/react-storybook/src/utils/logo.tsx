import React from "react";
import LogoImage from "../assets/logo.png";

const logoClass = "h-7 mb-11";

const Logo: React.FC = () => {
    return <img src={LogoImage} alt="def" className={logoClass} />
}

export default Logo;
