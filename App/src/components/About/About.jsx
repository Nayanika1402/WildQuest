import React from 'react';
import aboutImg from '../../assets/images/about_elephant.jpg';
import aboutCardImg from "../../assets/images/AboutCard.jpg";
import {Link} from 'react-router-dom';

const About = () => {
    return(
        <section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

        {/* ========== about img ========*/}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="" className='w-[600px] h-[500px] rounded-[50px]' />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
          lg:right-[5%]">
            <img src={aboutCardImg} alt="" className="w-full h-auto rounded-[20px]" />
          </div>
        </div>

        {/* ========= about content ======== */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="heading">About Us🐘</h2>
        <p className ="text_para">Whether you're a wildlife enthusiast, student, or conservationist, WildQuest gives you the tools to learn, engage, and contribute to saving endangered species. 
          Together, we can create a world where no species is left behind.
        </p>
        <p className ="text_para mt-[30px]"> Every day, species around the world face habitat destruction, poaching, and climate change. 
          Many people want to help but don’t know where to start. We make conservation fun, accessible, and impactful—whether you’re donating, playing an educational game,
           or learning how to reduce your environmental footprint.
        </p>
        <Link to='/'>
        <button className="btn">Learn More</button></Link>
        </div>
    </div>
  </div>
  </section>
  );
};

export default About;