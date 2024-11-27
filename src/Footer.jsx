import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const socialLinks = [
  {
    id: 1,
    url: "/",
    icon: <FaFacebook size={22} color="white" />,
  },
  {
    id: 2,
    url: "/",
    icon: <FaTiktok size={22} color="white" />,
  },
  {
    id: 3,
    url: "/",
    icon: <FaInstagram size={22} color="white" />,
  },
  {
    id: 1,
    url: "/",
    icon: <RiTwitterXFill size={22} color="white" />,
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 flex flex-col justify-center items-center p-4">
      <p className="text-center text-slate-300 font-thin text-sm">
        All rights reserved &copy; {year} | RapidFones PNG
      </p>

      <div className="mt-4 flex gap-4 items-center justify-center">
        {socialLinks.map((s) => (
          <Link
            className="hover:scale-150 transition-all duration-[0.3s] ease-in-out"
            to={s.url}
            key={s.id}
          >
            {s.icon}
          </Link>
        ))}
      </div>
      <small className="mt-3 text-slate-300 font-thin">
        Design and Developed by:{" "}
        <span className="font-semibold">Krintifa Lab</span>
      </small>
    </footer>
  );
};

export default Footer;
