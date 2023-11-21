import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const result = window.addEventListener("scroll", handleScroll);
    return () => {
      result;
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" },
    { link: "Services", path: "services" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src="https://i.ibb.co/MMSnMbF/NAR-LOGO.jpg"
              alt=""
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">NAR Group</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* button for larger devices */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
