import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/quiz", display: "Quizzes" },
  { path: "/games", display: "Games" },
  { path: "/adopt", display: "Adoption" },
  { path: "/contact", display: "Contact Us" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 80) {
        headerRef.current?.classList.add("sticky_header");
      } else {
        headerRef.current?.classList.remove("sticky_header");
      }
    };
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current?.classList.toggle("show_menu");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    headerRef.current?.classList.toggle("dark-theme", newTheme === "dark");
  };

  return (
    <header className="header flex items-center bg-green-600 p-4" ref={headerRef}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[75px] h-[75px]" />
          <h1 className="text-white text-3xl font-bold">WildQuest</h1>
        </div>

        <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ffffff] text-[16px] leading-7 font-[600]"
                      : "text-[16px] leading-7 font-[500] hover:text-[#ffffff]"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="bg-transparent text-[20px]">
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </button>

          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
