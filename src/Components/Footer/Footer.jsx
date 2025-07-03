import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-amber-100">
      <div className=" flex  flex-wrap gap-y-12 py-20 max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a className="font-bold text-3xl" href="#">
            Gr
            <span className="text-red-500 uppercase font-extrabold font-serif">
              O
            </span>
            ckart
          </a>

          <p className="text-zinc-700 mt-6 max-w-[300px]">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>

          <p className="text-zinc-900 mt-6">
            2025 &copy; All Right Reserved
          </p>
        </div>

         <ul className="flex-1">
        <li>
            <h5 className="text-zinc-800 text-2xl font-bold ">Company</h5>
        </li>
        <li className="mt-6" >
            <a href="#" className="text-zinc-800 hover:text-red-500" >About</a>
        </li>
        <li className="mt-6" >
            <a href="#" className="text-zinc-800 hover:text-red-500" >FAQ'S</a>
        </li>
     </ul>

         <ul className="flex-1">
        <li>
            <h5 className="text-zinc-800 text-2xl font-bold ">Support</h5>
        </li>
        <li className="mt-6" >
            <a href="#" className="text-zinc-800 hover:text-red-500" >Support Center</a>
        </li>
        <li className="mt-6" >
            <a href="#" className="text-zinc-800 hover:text-red-500" >Contact Us</a>
        </li>
     </ul>

     <div className="flex-1">
      <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
      <p className="mt-6 text-zinc-700">
        Questions or Feedbacks? <br />
        we'd love to hear from you.
      </p>

      <div className= "flex bg-white p-1 rounded-lg mt-6">
             <input className="h-[5vh] pl-4 flex-1 focus:outline-none w-1.5 " type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" />
             <button className="bg-gradient-to-b from-rose-300 to-red-500 p-2 rounded-lg text-xl text-white hover:to-red-700 cursor-pointer">
                <IoIosArrowForward />
             </button>
      </div>
     </div>
      
      </div>


    </footer>
  );
};

export default Footer;
