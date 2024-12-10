import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const navLinks = [
  {
    id: 11,
    title: "Home",
    path: "/",
  },
  {
    id: 12,
    title: "Products",
    path: "/products",
  },
  {
    id: 13,
    title: "About",
    path: "/about-us",
  },
  {
    id: 14,
    title: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="bg-slate-950  border-b border-slate-600 fixed top-0 left-0 right-0 z-50 p-3 flex justify-between items-center md:px-10">
      <div className="logo flex items-center justify-center w-[160px] md:w-[200px] h-[40px]">
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
            ? "mobile active flex flex-col bg-orange-800 w-full justify-center items-center"
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
                : "text-white hover:text-orange-400 font-medium"
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
