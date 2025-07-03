import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-amber-50 bg-no-repeat bg-right bg-contain max-w-[1400px] px-10 mx-auto'style={{backgroundImage: `url(${FreshFruits})`}} >
       <div className=' md:bg-transparent bg-amber-50 flex py-10 md:flex-row flex-col'>
       <span className=' md:text-9xl text-7xl text-red-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
         <div className='max-w-[700px]'>
            <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold' >First Order Discount</h3>
            <p className='text-zinc-600 my-6' >
                Enjoy fresh grocery items with a special first order discount. Save on fruits, vegetables, snacks, and more. Shop now and make your first purchase more affordable and exciting with this limited-time offer.
            </p>
            <Button content="Get Discount" />
         </div>
       </div>
    </section>
  )
}

export default Discount
