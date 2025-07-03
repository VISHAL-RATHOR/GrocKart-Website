import React from 'react'
import AboutUs from '../../assets/Aboutimage.jpg'

const Aboutus = () => {
  return (
    <section className='max-w-[1440px] mx-auto px=10'>
            <div className='bg-amber-100 md:mt-40 mt-30 md:flex rounded-2xl mb-40 max-w-[1440px] mx-auto px=10 '>
                <img className='w-[600px] h-1/2  rounded-2xl ' src={AboutUs}  />
                  <div className='md:w-[600px] flex flex-col gap-y-10 md:ml-30 ml-10 md:mt-20 mt-10 '>
                    <h2 className='font-bold text-zinc-800 text-4xl md:flex justify-center'>ABOUT US</h2>
                  <p className='text-700  text-lg'>Grockart is your trusted online grocery store, bringing you a wide range of fresh fruits, vegetables, dairy products, and seafood. We are committed to delivering top-quality, hygienically packed items right to your doorstep. Our mission is to make grocery shopping easy, fast, and convenient for every household. With a focus on health, freshness, and customer satisfaction, Grockart ensures that your daily essentials are just a few clicks away.</p>
                 <p className='text-2xl font-extralight  text-zinc-900 mt-10'>Eat fruits, vegetables, and seafood daily — they aren’t just food, they’re nature’s gift to power your body, mind, and life.</p>
                  </div>
            </div>
    </section>
  )
}

export default Aboutus
