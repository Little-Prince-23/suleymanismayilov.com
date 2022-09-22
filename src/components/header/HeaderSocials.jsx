import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMedium } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/s%C3%BCleyman-ismay%C4%B1lov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Little-Prince-23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://medium.com/@sleymanismaylov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
