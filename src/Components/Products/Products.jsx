import React, { useState } from 'react'

import Heading from '../Heading/Heading'
import Butter from '../../assets/butter.png'
import Strawberry from '../../assets/strawberry.png'
import Eggs from '../../assets/eggs.png'
import Cabbage from '../../assets/cabbage.png'
import Eggplant from '../../assets/eggplant.png'
import Shrimp from '../../assets/shrimp.png'
import Kiwi from '../../assets/kiwi.png'
import Capsicum from '../../assets/capsicum.png'
import Broccoli from '../../assets/broccoli.png'
import Yogurt from '../../assets/yogurt.png'
import Beef from '../../assets/beef.png'
import ChickenBreast from '../../assets/chicken-breast.png'
import Kale from '../../assets/kale.png'
import Cheese from '../../assets/cheese.png'
import CondensedMilk from '../../assets/condensed-milk.png'
import Salmon from '../../assets/salmon.png'
import Banana from '../../assets/banana.png'
import Milk from '../../assets/milk.png'
import Pineapple from '../../assets/pineapple.png'
import Tofu from '../../assets/tofu.png'
import Tilapia from '../../assets/tilapia.png'
import SliceCheese from '../../assets/slice-cheese.png'
import RicottaCheese from '../../assets/ricotta-cheese.png'
import Grapes from '../../assets/grapes.png'
import Lettuce from '../../assets/lettuce.png'
import Cards from '../Cards/Cards'

import { Link } from 'react-router-dom'


const Products = () => {

   const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
   const [activeTab, setactiveTab] = useState('All');

      let filteredItems = activeTab === 'All' ? product : product.filter(item => item.category == activeTab);
      

        const renderCards = filteredItems.slice(0, 8).map(product=>{
        return(
          <Cards image={product.image} name={product.name} price={product.price} key={product.id} />
        )
       })
 
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
          <Heading highlight="Our" heading="Products" />

                   {/* Tabs */}
                   <div className='flex flex-wrap gap-3 justify-center mt-10  '>
                    
                      {categories.map(category=>{
                        return(
                          <button key={category} 
                          className={`px-5 py-2 text-lg rounded cursor-pointer
                            ${activeTab === category ? 'bg-gradient-to-b from-rose-400 to-red-600 text-white' : 'bg-amber-100' } `} 
                          onClick={() =>setactiveTab(category)}
                          
                          >
                            {category}
                          </button>
                        )
                      })}
                    
                   </div>

                        {/* Product Listing */}
                        <div className='grid grid-col-1  md:grid-cols-4 gap-9 mt-20'>
                          {renderCards}
                        </div>
                        <div className=' mx-auto w-fit mt-15'>
                                <Link 
  to='/allproducts'
  className="inline-block mt-3 bg-gradient-to-b from-rose-400 to-red-600 text-white px-8 py-3 rounded-lg md:text-lg text-md transition-all duration-300 hover:scale-105 hover:to-red-700"
>
  View All
</Link>

                        </div>
      </div>
    </section>
  )
}

export default Products

const product = [

  {
    id: 1, 
    name: 'Strawberry', 
    price: 3.0,
    category: 'Fruits',
    image: Strawberry
  },

  {
    id: 2,   
    name: 'Butter',
    price: 3.5,
    category: 'Dairy',
    image: Butter
  },

  {
    id:  3 , 
    name:  'Eggs',
    price: 3.0,
    category: 'Dairy',
    image: Eggs
  },

  {
    id:   4, 
    name:  'Cabbage',
    price: 3.0,
    category: 'Vegetables',
    image: Cabbage
  },

  {
    id:  5,  
    name: 'Brinjal', 
    price: 4.0,
    category: 'Vegetables',
    image: Eggplant,
  },

  {
    id:  6,
    name:  'Shrimp',
    price: 3.5,
    category: 'SeaFood',
    image: Shrimp,
  },

  {
    id:  7,  
    name: 'Kiwi', 
    price: 2.05,
    category: 'Fruits',
    image: Kiwi
  },

  {
    id: 8,    
    name: 'Green Capsicum',  
    price: 4.0,
    category: 'Vegetables',
    image: Capsicum
  },

  {
    id: 9, 
    name: 'Broccoli',
    price: 2.0,
    category: 'Vegetables',
    image: Broccoli
  },

  {
    id:  10,  
    name: 'Curd', 
    price: 3.0,
    category: 'Dairy',
    image: Yogurt
  },

  {
    id: 11,
    name: 'Beef',
    price: 8.0,
    category: 'Meat',
    image: Beef
  },

  {
    id: 12,
    name: 'Chicken Breast',
    price: 7.0,
    category: 'Meat',
    image: ChickenBreast,
  },

  {
    id: 13, 
    name:  'Kale Leaves', 
    price: 3.0,
    category: 'Vegetables',
    image: Kale
  },

  {
    id:  14,  
    name:  'Mozzarella Cheese',
    price: 7.0,
    category: 'Dairy',
    image: Cheese
  },

  {
    id: 15,  
    name: 'Condensed Milk', 
    price: 5.0,
    category: 'Dairy',
    image: CondensedMilk
  },

  {
    id: 16, 
    name:  'Salmon Filet',
    price: 5.0,
    category: 'SeaFood',
    image: Salmon
  },

  {
    id: 17,  
    name:  'Banana',
    price: 2.0,
    category: 'Fruits',
    image: Banana
  },

  {
    id: 18,   
    name: 'Milk Bottle (3)',
    price: 8.0,
    category: 'Dairy',
    image: Milk
  },

  {
    id: 19,  
    name: 'PineApple',
    price: 5.0,
    category: 'Fruits',
    image: Pineapple
  },

  {
    id: 20,   
    name: 'Tofu Cubes',
    price: 4.0,
    category: 'Dairy' ,
    image: Tofu
  },

  {
    id: 21,  
    name: 'Tilapia Fish' ,
    price: 3.0,
    category: 'SeaFood',
    image: Tilapia
  },

  
  {
    id: 22,
    name: 'Slice Cheese',
    price: 5.0,
    category: 'Dairy',
    image: SliceCheese
  },
  {
    id: 23,
    name: 'Ricotta Cheese',
    price: 7.0,
    category: 'Dairy',
    image: RicottaCheese
  },
  {
    id: 24,
    name: 'Grapes',
    price: 3.0,
    category: 'Fruits',
    image: Grapes
  },
  {
    id: 25,
    name: 'Lettuce Leaf',
    price: 3.0,
    category: 'Vegetables',
    image: Lettuce
  },
]
