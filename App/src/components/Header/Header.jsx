import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
 // import userImg from "../../assets/images/avatar-img.png";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/quiz", display: "Quizzes" },
  { path: "/services", display: "Games" },
  { path: "/adopt", display: "Adoption" },
  { path: "/blog", display: "Blogs" },
  { path: "/contact", display: "Contact Us" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("")
      .slice(0, 2);
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
          {user ? (
            <Link
              to="/profile"
              className="w-10 h-10 flex items-center justify-center bg-white text-green-600 font-bold rounded-full shadow-md hover:bg-gray-200 transition"
            >
              {getInitials(user.displayName || user.email)}
            </Link>
          ) : (
            <Link to="/login" className="bg-[#137f13] py-2 px-6 text-white font-[600] rounded-[50px]">
              Login
            </Link>
          )}

          {user && (
            <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-700 transition text-sm"
          >
            Logout
          </button>
          
          
          )}

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