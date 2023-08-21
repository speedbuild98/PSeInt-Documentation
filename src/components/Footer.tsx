// Assets
import { socialLinks } from "~/assets/constants";

//Icons
import { FaLinkedin, FaAtom, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-2 justify-center items-center p-2 bg-base-300 text-base-content rounded mt-10">
      <div>
        <div className="grid grid-flow-col gap-2">
        {socialLinks.map((link) => (
                  <a key={link.title} target="_blank" href={link.url} className="btn btn-sm btn-ghost text-2xl">
                   {renderIcon(link.icon)}
                  </a>
              ))}
        </div>
      </div>
      <div className="font-thin text-xs">
        <a target="_blank" href="https://github.com/speedbuild98">Copyright © 2023 - Coded by Gallardo Lautaro</a>
      </div>
    </footer>
  );
};

const renderIcon = (iconTitle:string) => {
  switch (iconTitle) {
    case "FaLinkedin":
      return <FaLinkedin />;
    case "FaAtom":
      return <FaAtom />;
    case "FaGithub":
      return <FaGithub />;
    default:
      return null;
  }
};

export default Footer;