import { useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/logo.png";
import userImg from '../../assets/images/avatar-img.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/professionals',
    display: 'Quizes'
  },
  {
    path: '/services',
    display: 'Games'
  },
  {
    path: '/donate',
    display: 'Adoption'
  },
  {
    path: '/contact',
    display: 'Contact Us'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState('light');

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    headerRef.current.classList.toggle('dark-theme', newTheme === 'dark');
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  return (
    <header className="header flex items-center" ref={headerRef}>
  <div className="container">
    <div className="flex items-center justify-between">
      {/*=========== Logo & Brand Name ============== */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-[75px] h-[75px]" />
        <h1 className="text-3xl font-bold">WildQuest</h1>
      </div>
          {/* ======= menu ========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? "text-[#137f13] text-[16px] leading-7 font-[600]"
                        : " text-[16px] leading-7 font-[500] hover:text-[#137f13]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== nav right =========== */}
          <div className="flex items-center gap-4">

            <div className='hidden'>
              <Link to='/'>
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to='/'>
              <button className="bg-[#137f13] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Logout</button>
            </Link>

            <button onClick={toggleTheme} className="bg-transparent text-[20px]">
              {theme === 'light' ? <BiMoon /> : <BiSun />}
            </button>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
