import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";
import { useState } from "react";



const Cards = ({image, name, price}) => {

const [Clicked, setClicked] = useState(false)

const handleClick = () => {
    setClicked(!Clicked)
}



  return (
    <div className="bg-amber-50 p-5 rounded-xl">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className={`text-3xl cursor-pointer ${ 
            Clicked ? "text-red-500" : "text-amber-200"
        }`}
        onClick={handleClick}
        >
          <FaHeart />
        </span>

    

        <button className="bg-gradient-to-b from-rose-400 to-red-600 text-white text-xl px-2 py-2 rounded">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}

      <div className="w-full h-50">
        <img src={image} className="w-full h-full mx-auto object-contain" />
      </div>

      {/* Card Content */}

      <div className="text-center">
        <h3 className="text-3xl font-semibold text-zinc-800">{name}</h3>
        <p className="text-zinc-800 text-2xl font-bold mb-3 mt-4 ">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
