import React from 'react'
import androy from '../images/androy.png'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const {text} = useTypewriter({
        words: ['Full Stack Web Development Projects', 'Frontend Web Development Projects', 'Responsive Websites'],
        loop: true,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

  return (
    <div className='max-w-[1400px] mx-auto bg-blue-600 h-[calc(100vh-60px)] grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-end bg-blue-600 md:justify-center items-center lg:items-start px-3 lg:pl-8 h-[calc(50vh-60px)] w-full lg:h-[100%] overflow-visible'>
          <p className='text-blue-200 text-xl'>Hi, I am</p>
            <h1 className='text-3xl  lg:text-6xl font-extrabold text-white uppercase'>AGHOGHOVWIA</h1>
            <h3 className='text-2xl lg:text-3xl pt-1 lg:pt-2 text-blue-100 uppercase font-normal'>Andrew</h3>
            <p className='text-slate-200 mt-1 lg:mt-3 text-center lg:text-left'>I love to Work on  <span>{text}</span></p>

           
     

            <button className='px-20 bg-slate-300 text-blue-800 py-3 mt-7 lg:mt-10 shadow-md shadow-blue-900 rounded-md'>Resume</button>

          <div className='mt-6 md:mt-20 border-b-2 md:border-b-4 border-slate-300 w-full'>

          </div>

        </div>
        <div className='h-[50vh] lg:h-[calc(100vh-60px)] w-full flex justify-center items-end'>
        <img src={androy} alt='Androy' className='w-[80%] h-[80%] object-contain' />
        </div>
    </div>
  )
}

export default Home