import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { navLinks } from "./lib/navlinks";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = useLocation().pathname;

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="backdrop-blur-2xl bg-black/90 fixed top-0 left-0 right-0 z-50 p-3 flex justify-between items-center md:px-10">
      <div className="logo flex items-center justify-center sm:h-[20px] sm:w-[120px] w-[115px] md:w-[150px] h-[15px]">
        <Link className="logo " to="/">
          <img
            className="w-[100%] object-contain"
            src="/rf_logo.png"
            alt="Logo"
          />
        </Link>
      </div>

      <nav
        className={
          open
            ? "mobile active flex flex-col bg-neutral-900 w-full justify-center items-center"
            : "mobile flex flex-col md:flex-row items-center justify-center gap-3"
        }
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            onClick={() => setOpen(false)}
            className={
              open
                ? "text-white hover:bg-blue-900 w-full text-center p-2 font-medium"
                : pathname === link.path
                ? `text-white  font-medium bg-blue-800 p-2 rounded-md`
                : `text-white hover:bg-orange-400 font-medium p-2 rounded-md bg-blue-800/50`
            }
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
        {open ? (
          <MdOutlineClose size={25} color="white" />
        ) : (
          <IoMdMenu size={25} color="white" />
        )}
      </div>
    </header>
  );
};

export default NavBar;
