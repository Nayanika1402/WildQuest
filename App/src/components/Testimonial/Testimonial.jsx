import React from 'react';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import customer1Avatar from './../../assets/images/customer1-avatar.png';
import customer2Avatar from './../../assets/images/customer2-avatar.png';
import customer3Avatar from './../../assets/images/customer3-avatar.png';
import customer4Avatar from './../../assets/images/customer4-avatar.png';
import {HiStar} from 'react-icons/hi';``

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} 
        breakpoints={{
            640:{
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={customer1Avatar} alt-="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Muhibur Rahman
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "WildQuest makes wildlife conservation fun and engaging! The interactive quizzes, games, and virtual adoption feature create a personal connection to endangered species.
                     Highly recommended!"
                </p>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={customer2Avatar} alt-="" className='rounded-[5px]' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Emily Johnson
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "WildQuest is perfect for families! The engaging games, fun quizzes, and informative articles sparked my kids' 
                passion for conservation—we even donated to protect endangered animals!"
                </p>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={customer3Avatar} alt-="" className='rounded-[5px]' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            James Davis
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "WildQuest makes supporting wildlife easy! The seamless donations, virtual adoptions, and insightful articles help me
                 contribute to conservation effortlessly. A fantastic initiative!"
                </p>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={customer4Avatar} alt-="" className='rounded-[5px]'/>
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Sophia Brown
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "WildQuest makes conservation fun! Interactive quizzes and games keep me engaged while raising awareness. Perfect for wildlife enthusiasts!"
                </p>
            </div>
         </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial;