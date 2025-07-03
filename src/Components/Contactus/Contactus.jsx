import React from 'react'

const Contactus = () => {
  return (
     <section className='max-w-[1440px] mx-auto px=10'>
             <div className='bg-white  md:flex w-full h-[675px] mt-35 mb-40'>
               <div className='bg-amber-200 rounded-l-xl  md:w-1/2'>
                      <div className='bg-amber-200 md:h-[450px] h-[250px] md:ml-40 my-30 border-t-4 border-b-4 border-l-4 rounded-l-xl border-offset-2 border-white flex justify-center'>
                  <div className='flex flex-col justify-center items-center gap-y-5'>
                                                <h2 className=' text-4xl text-zinc-800 font-bold '>CONTACT US</h2>
                        <p className='w-[350px] text-zinc-700'>Whenever you face any issue or have questions regarding our grocery website design, feel free to write your query.</p>
                  </div>
                      </div>
               </div>
               <div className='bg-zinc-300 rounded-r-xl  md:w-1/2'>
                      <div className='bg-zinc-300 rounded-r-xl  md:h-[450px] h-[400px] md:mr-40 md:my-30 my-15 border-t-4 border-b-4 border-r-4 border-offset-2 border-white flex justify-center'>
                            <div className='flex flex-col justify-center gap-y-7'>
                    <div className='flex flex-col gap-2'>
                                 <p className='text-xl text-zinc-900'>Name</p>
                                <input type="name" placeholder='Enter Your Name' className='border bg-amber-50  border-zinc-500 outline-none'  />
                    </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xl text-zinc-900'>Email</p>
                                    <input type="email" placeholder='Enter Your Email' className='border bg-amber-50  border-zinc-500 outline-none'/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xl text-zinc-900 '>Message</p>
                                    <textarea placeholder='Type Your Message....' className='border bg-amber-50 h-35 w-50 border-zinc-500 outline-none'></textarea>
                                </div>
                            </div>
                      </div>
               </div>
             </div>
    </section>
  )
}

export default Contactus
