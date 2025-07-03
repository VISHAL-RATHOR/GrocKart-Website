import React from "react";
import Heading from "../../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../../assets/basket-full-vegetables.png";

const Values = () => {

       const leftValues = value.slice(0, 2).map(item=>{
          return(
                <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">

                <div>
                    <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-rose-400 to-red-600 w-15 h-15 rounded-full ">{item.icon}</span>
                </div>

                <div className="md:text-right">
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>

                </div>

          )
     })

       const rightValues = value.slice(2).map(item=>{
          return(
                <div key={item.id} className="flex items-center gap-7">

                <div>
                    <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-rose-400 to-red-600 w-15 h-15 rounded-full ">{item.icon}</span>
                </div>

                <div>
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>

                </div>

          )
     })


       

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15">
          {/* Left Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between" >
                    {leftValues}
             </div>

          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>

          {/* Right Values */}
          <div  className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
             </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "Shop with confidence: we deliver only what we’d serve our own families.",
    icon: <FaHeart />,
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "Savor the taste of just-picked fruits, every single time you shop.",
    icon: <FaLeaf />,
  },

  {
    id: 3,
    title: "Food Safety",
    para: "Every meal you make is a chance to practice food safety.",
    icon: <FaShieldAlt />,
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Nature’s best, handled with care,Fresh, safe, and organic.",
    icon: <FaSeedling />,
  },
];
