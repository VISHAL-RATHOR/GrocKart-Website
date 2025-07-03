import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";

import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10, mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="py-5 flex mt-5 justify-end gap-x-3">
          <button className=" custom-prev text-2xl text-zinc-800  flex justify-center items-center rounded-lg w-11 h-11 bg-amber-100 hover:bg-gradient-to-b hover:from-rose-400 hover:to-red-600  hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className=" custom-next text-2xl text-zinc-800 flex justify-center items-center rounded-lg w-11 h-11 bg-amber-100 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-600 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} 
        loop={true}
        breakpoints={{
          640: {slidesPerView: 1 , spaceBetween: 20},
             768: {slidesPerView: 2 , spaceBetween: 20},
            1024: {slidesPerView: 3 , spaceBetween: 20},
        }}
        modules={[Navigation]} className="mySwiper">
          {
               review.map(item=>{
                return(
                    <SwiperSlide className='bg-amber-100 rounded-xl p-8'>
                    <div className='flex gap-5 items-center'>
                      <div className='w-16 h-16 rounded-full bg-amber-400 outline-2 outline-red-400 outline-offset overflow-hidden '>  
                        <img className="w-full h-full rounded-full object-contain" src={item.image} />
                      </div>
                              
                         <div>
                          <h5 className='text-xl font-bold'>{item.name}</h5>
                          <p className='text-zinc-700'>{item.profession}</p>
                          <span className="flex text-yellow-400 mt-2 text-xl gap-1">
                            {Array.from({length: item.rating}, (_, index)=> (
                              <FaStar />
                            ) )}
                          </span>
                         </div>
                    </div>
                    <div className='mt-10 min-h-[15vh]'>
                      <p  className='text-zinc-700'>{item.para}</p>
                    </div>
                   
            </SwiperSlide>
                )
               })
          }
        </Swiper>

       
      </div>
    </section>
  );
};

export default Testimonials;
const review = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Stay-at-home Mom',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    para: 'Grockart saves me time and effort. I get fresh groceries, household items, and snacks delivered to my door. The website is easy to use, and delivery is always quick and reliable.',
  },
  {
    id: 2,
    name: 'Michael Anderson',
    profession: 'Software Developer',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
    para: 'As a working professional, Grockart helps me avoid weekend shopping stress. Everything is delivered fresh and fast. I like the convenience, but I hope they expand their range of organic items soon.',
  },
  {
    id: 3,
    name: 'Ashley Davis',
    profession: 'College Student',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    para: 'Grockart is great for students like me. I order snacks, noodles, and basic groceries easily. Prices are affordable, and I don’t need to leave campus. It saves time during my busy class schedule.',
  },
  {
    id: 4,
    name: 'James Miller',
    profession: 'Sales Executive',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/men/39.jpg',
    para: 'Grockart offers decent service, but sometimes items are out of stock. Still, it’s better than going to crowded stores after work. Their customer support is responsive and helps solve issues pretty quickly.',
  },
  {
    id: 5,
    name: 'Olivia Thompson',
    profession: 'High School Teacher',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
    para: 'I love using Grockart! From vegetables to cleaning supplies, everything is fresh and well-packed. It’s easy to track orders, and delivery is on time. It’s now part of my weekly routine.',
  },
];
