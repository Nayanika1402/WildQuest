import React from 'react';
import { useNavigate} from 'react-router-dom';
import heroImg01 from "../assets/images/bird_hero1.webp";
import heroImg02 from "../assets/images/koala_hero2.jpg";
import heroImg03 from "../assets/images/panda_hero2.jpeg";
import icon01 from "../assets/images/service1.png";
import icon02 from "../assets/images/service2.png";
import icon03 from "../assets/images/service3.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/animal_donate.jpg";
import faqImg from '../assets/images/questions.svg';
import avatarIcon from "../assets/images/avatar-img.png";
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';
import ProfessionalList from '../components/Professional/ProfessionalList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };
  return ( <>
   {/* ========= hero section ========== */}

   <section className="hero_section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className ="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

        {/* ========= hero content ============*/}
        <div>
          <div className="lg:w-[570px]">

            <h1 className ="text-[36px] leading-[46px] text-headingColor font-[800] first-letter:md:text-ellipsis-[60px] first-letter:md:leading-[70px]">Explore. Learn. Protect🦁🐢🐼
            </h1>
            <p className="text_para">WildQuest is an interactive platform with quizzes, games, and articles to raise awareness about endangered wildlife and conservation.</p>

               <button className = "btn">Explore More</button>
          </div>

          {/* ========== hero counter =========== */}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
          lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                900+
              </h2>
              <span className="w-[100px] h-2 bg-[#d0f0c0] rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">Endangered Species</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                573
              </h2>
              <span className="w-[100px] h-2 bg-[#d0f0c0] rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">Wildlife sactuaries</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                106
              </h2>
              <span className="w-[100px] h-2 bg-[#d0f0c0] rounded-full block mt-[-14px]">
              </span>
              <p className="text_para">National Parks</p>
            </div>

          </div>
        </div>
        {/* ========= hero content =============*/}

        <div className="flex gap-[30px] justify-end">
          <div>
            <img className="w-full h-[650px] rounded-[20px]" src={heroImg01} alt="" />
          </div>
          <div className="mt-[30px]">
            <img src={heroImg02} alt="" className="w-[350px] h-[280px] mb-[30px] rounded-[20px]" />
            <img src={heroImg03} alt="" className="w-[350px] h-[280px] rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
   </section>
   { /* ============= hero section end ============ */}

   <section>
    <div className= "container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className='heading text-center'>
          Our Wild Mission🌴
        </h2>
        <p className="text_para text-center">
        Highlighting the platform’s purpose and offerings.
        </p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" className=' w-[400px] h-[250px]'/>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Support Wildlife
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                Make a difference by donating to protect endangered animals and their habitats.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-[#137f13] hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon02} alt="" className='w-[400px] h-[250px]' />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Engaging Quizzes
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                Test your knowledge about wildlife with fun and educational quizzes.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-[#137f13] hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon03} alt="" className='w-[400px] h-[250px]' />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Interactive Games
                </h2>
                <p className="text-[16px] leading-7 text-textColorr font-[400] mt-4 text-center">
                Explore the wild through exciting games that promote conservation awareness.
                </p>

                <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-[#137f13] hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
            </div>
        </div>
       </div>
      
    </div>
   </section>

<About />  

{/* ============ feature section start ============== */}
<section>
  <div className='container'>
    <div className='flex items-center justify-between flex-col lg:flex-row'>
{/* ============ feature content ============== */}
<div className='xl:w-[670px]'>
  <h2 className='heading'>
    Adopt and Donate🌎 <br />
  </h2>

  <ul className='pl-4'>
    <li className='text_para'>
    At WildQuest, we believe that everyone can play a role in saving endangered species. 
    Our Adopt & Donate program offers a simple yet impactful way to support wildlife conservation efforts.
    </li>
    <li className='text_para'>
    1.Symbolic Adoption – Protect & Track Your Favorite Species
    </li>
    <li className='text_para'>
      2.Direct Donations – Support Wildlife Conservation Efforts
    </li>
  </ul>
  <Link to='/donate'>
  <button className='btn'>Proceed</button>
  </Link>
</div>
{/* ============ feature image ============== */}
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
  <img src={featureImg} className='w-[600px] h-[600px] rounded-[50px]' alt=''>
  </img>
  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-
  [100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[6px] lg:gap-3'>
        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
          Kayla
        </p>
        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
          3 months
        </p>
      </div>
      <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
        <img src={videoIcon} alt="" />
      </span>
    </div>

    <div className='w-[65px] lg:w-[96px] bg-[#CCF00F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[13px]
    lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
      Adopted By
    </div>
    <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
      <img src={avatarIcon} alt="" />
      <h4 className='text-[10px] leading-3 lg:text--[16px] lg:leading-[22px] font-[700]
      text-headingColor'>
        Sophia Collins
      </h4>
    </div>
  </div>
  </div>
</div>
  </div>
</section>
{/* ============ feature section end ============== */}
{/* ============ Our Professionals ============== */}

<section>
  <div className='container'>
    <div className='xl:w-[600px] mx-auto'>
      <h2 className='heading text-center'>Some Critically Endangered Species🦌</h2>
      <p className='text_para text-center'>
      According to the IUCN Red List, these species are declining rapidly due to habitat loss, 
      poaching, climate change, and human activities.
      </p>
    </div>
    <ProfessionalList />
  </div>
</section>
{/* ============ Our Professionals ============== */}
{/* ============ faq section start ================= */}
<section>
  <div className='container'>
    <div className='flex justify-between gap-[50px] lg:gap-0'>
      <div className='w-1/2 hidden md:block'>
      <img src={faqImg} alt="" className='h-[500px] w-[500px]' />
      </div>
      <div className='w-full md:w-1/2'>
      <h2 className='heading'>
        Most asked Questions?
        </h2>
        <FaqList />
        </div>
    </div>
  </div>
</section>
{/* ============ faq section end ================= */}

{/* ============ testimonial start ================= */}

<section>
  <div className='container'>
    <div className='xl:w-[470px] mx-auto'>
      <h2 className='heading text-center'>
        What do our visitors say?
      </h2>
      <p className='text_para text-center'>
        Satisfactory service for everyone.Our extensive system offers unmatched,expert,and smooth services.
      </p>
    </div>
    <Testimonial />
  </div>
</section>
{/* ============ testimonial end ================= */}
   </>
  );
};

export default Home;