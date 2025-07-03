import React, { useEffect } from "react";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { GrSearch } from "react-icons/gr";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {

   const [showMenu, setshowMenu] = useState(false);
   const [isScroll, setisScroll] = useState(false);

   const toggleMenu = () =>{

    setshowMenu(!showMenu)
   }

   useEffect(() =>{

    const handleScroll = () =>{

      setisScroll(window.scrollY > 10)

    }

    window.addEventListener('scroll', handleScroll);
           return () => 
            window.removeEventListener('scroll', handleScroll )
           
   }, [])




  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScroll ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''}`}>
      <nav className=" max-w-[1400px] m-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* logo */}
        <Link className="font-bold text-3xl" to="/">
          Gr
          <span className="text-red-500 uppercase font-extrabold font-serif">
            O
          </span>
          ckart
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <Link to="/" className="font-semibold tracking-wider text-red-500 text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 text-xl"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 text-xl"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 text-xl"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Nav Action */}

        <div className="flex items-center gap-x-5">

          {/* input field */}
          
          <div className="md:flex p-1 border-2 border-red-500 rounded-full hidden">
            <input type="text" id="text" placeholder="Search...." autoComplete="off"
             className=" flex-1 h-[5vh] px-3 outline-none bg-transparent" />
            <button 
              className="bg-gradient-to-b from-rose-400 to-red-500 text-amber-50 w-10 h-10 flex justify-center items-center rounded-full text-xl " >
                <GrSearch/>
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

                  {/* Hamburger */}
           <Link to="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
          {showMenu ? <TbMenu3/> : <TbMenu2/>}
          </Link>
        </div>

        {/* Mobile Menu */}
           <ul className={`flex-col space-y-15 bg-rose-500/40 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center space-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <Link href="/" className="font-semibold tracking-wider text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 active:text-red-500 focus:text-red-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 active:text-red-500 focus:text-red-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-red-500 active:text-red-500 focus:text-red-500"
            >
              Contact Us
            </Link>
          </li>
            
          <li className="flex p-1 border-2 border-red-500 rounded-full md:hidden">
            <input type="text" id="text" placeholder="Search...." autoComplete="off"
             className=" flex-1 h-[5vh] px-3 outline-none bg-transparent" />
            <button 
              className="bg-gradient-to-b from-rose-400 to-red-500 text-amber-50 w-10 h-10 flex justify-center items-center rounded-full text-xl " >
                <GrSearch/>
            </button>
          </li>

        </ul>

      </nav>


    </header>
  );
};

export default Navbar;
