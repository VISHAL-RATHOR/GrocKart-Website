import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { RiSeedlingLine } from "react-icons/ri";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
const Process = () => {
   
    const renderSteps = steps.map(item=>{
        return(
    <div className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`} >
          <span className="flex rounded-full justify-center items-center mx-auto w-18 h-18 text-8xl bg-zinc-900 outline-[3px] outline-offset-6 outline-zinc-800 text-white outline-dashed ">{item.number}</span>

       
                 <div className="flex items-center gap-x-5 mt-10">
                    <span className="flex justify-center items-center bg-gradient-to-b from-rose-400 to-red-600 text-white text-3xl w-15 h-15 rounded-full">{item.icon}</span>
                 

                 <div className="flex-1">
                    <h4 className="text-zinc-900 text-2xl font-bold">{item.title}</h4>
                    <p className="text-zinc-700 mt-2">{item.para}</p>
                 </div>
          </div>
</div>

        )
    })
    



  return (
    <section className="mt-20">
      <div className="max-w-[1400px] mx-auto px-10 py-20" >
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-wrap gap-y-17 md:mt-20 mt-10 items-center justify-center md:pt-50" >
           {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "We collect raw materials with care.",
    icon: <RiSeedlingLine />,
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "Products are made with best process.",
    icon: <PiFactory />,
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every item checked for high quality.",
    icon: <SlBadge />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "Fast delivery with proper tracking system.",
    icon: <BsTruck />,
  },
];
