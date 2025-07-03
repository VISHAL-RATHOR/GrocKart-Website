import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeafoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";
const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div className="flex-1 basis-[300px]" key={card.id}>
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* Card Content */}
        <div className="bg-amber-50 pt-10 p-8 rounded-xl -mb-10">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3">{card.description}</p>
         <Link 
  to={card.path}
  className="inline-block mt-3 bg-gradient-to-b from-rose-400 to-red-600 text-white px-8 py-3 rounded-lg md:text-lg text-md transition-all duration-300 hover:scale-105 hover:to-red-700"
>
  See All
</Link>

        </div>
      </div>
    );
  });

  return (
    <section>
      <div className=" max-w-[1400px] mx-auto px-10  py-20">
        <Heading highlight="shop" heading="by Category" />

        {/* Category Cards */}

        <div className="flex flex-wrap gap-10 md:mt-15 ">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Vegies",
    description:
      "Fresh, organic produce sourced daily from local farms. wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path: '/fruits',
  },
  {
    id: 2,
    title: "Dairy & eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path:'dairy',
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeafoodCat,
    path: '/seafood',
  },
];
