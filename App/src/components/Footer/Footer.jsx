import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';

const socialLinks=[
  {
    path:"https://www.youtube.com/c/wildquest",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path:"https://github.com/Nayanika1402/WildQuest",
    icon:<AiFillGithub  className='group-hover:text-white w-4 h-5' />,
  },
  {
    path:"https://www.instagram.com/wildquest_/",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path:"https://www.linkedin.com/company/wildquest/?originalSubdomain=bs",
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];
const quickLinks01 = [
  {
    path: "/home",
    display:"Home",
  },
  {
    path: "/about",
    display:"About",
  },
  {
    path: "/services",
    display:"Services",
  },
  {
    path: "/adopt",
    display:"Adoption",
  },
];
const quickLinks02 = [
  {
    path: "/game",
    display:"Play Games",
  },
  {
    path: "/adopt",
    display:"Go for Adoption",
  },
  {
    path: "/quiz",
    display:"Solve Quiz",
  },
  {
    path: "/contact",
    display:"Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/donate",
    display:"Donate",
  },
  {
    path: "/contact",
    display:"Contact Us",
  },
];


const Footer = () => {
  const year = new Date().getFullYear();
  return (
   <footer className='pb-16 pt-10 bg-[#d0f0c0]'>
    <div className='container '>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[75px] h-[75px]" />
          <h1 className="text-3xl font-bold">WildQuest</h1>
        </div>
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Copyright © {year} developed by Team WildQuest💚All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index)=>(
              <Link
              to={link.path}
              key={index}
              className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[#137f13] hover:border-none">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            Quick Links
          </h2>

          <ul>
            {quickLinks01.map((item,index)=>(
               <li key={index} className='mb-4'>
              <Link 
              to={item.path}
              className='text-[16px] leading-7 font-[400] text-textColor'
              >
                {item.display}
                </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            I want to:
          </h2>

          <ul>
            {quickLinks02.map((item,index)=>(
               <li key={index} className='mb-4'>
              <Link 
              to={item.path}
              className='text-[16px] leading-7 font-[400] text-textColor'
              >
                {item.display}
                </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            Support Us
          </h2>

          <ul>
            {quickLinks03.map((item,index)=>(
               <li key={index} className='mb-4'>
              <Link 
              to={item.path}
              className='text-[16px] leading-7 font-[400] text-textColor'
              >
                {item.display}
                </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
   </footer>
  );
};

export default Footer;
