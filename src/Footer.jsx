import { Link } from "react-router-dom";
import { socialLinks } from "./lib/footer-links";
import { RiExternalLinkFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <p className="text-center font-thin text-sm">
        All rights reserved &copy; {year} | RapidFones PNG
      </p>

      <div className="mt-4 flex gap-4 items-center justify-center">
        {socialLinks.map((s) => (
          <Link
            className="hover:scale-150 transition-all duration-[0.3s] ease-in-out"
            to={s.url}
            key={s.id}
          >
            {<s.icon size={22} color="black" />}
          </Link>
        ))}
      </div>
      <small className="mt-3 flex items-center gap-2 font-thin">
        Design and Developed by:{" "}
        <Link
          className="flex items-center gap-1 text-blue-600"
          to="https://www.krintifalab.com"
          target="_blank"
        >
          <span className="font-semibold">Krintifa Lab</span>
          <RiExternalLinkFill size={18} />
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
