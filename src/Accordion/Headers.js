import React,{useState} from 'react'
import data from './data'
import {BsFillArrowRightCircleFill,BsFillArrowDownCircleFill} from 'react-icons/bs'

const Headers = ({question,answer}) => {  

    const[expand,setExpand]=useState(false)

    //toggle state
    const toggle = () => {
        setExpand(!expand)
    }
 
  return (
    <div className='w-full lg:w-[75%] '>
        <div className='w-full py-2 border-2 border-blue-900 relative px-3 bg-blue-300'>
            <span className='text-blue-900 font-bold font-xl'>{question}</span>
            {expand ? <BsFillArrowDownCircleFill className='absolute top-0 right-0 mr-3 mt-3 text-blue-900 cursor-pointer text-2xl' onClick={toggle}/> : <BsFillArrowRightCircleFill className='absolute top-0 right-0 mr-3 mt-3 text-blue-900 cursor-pointer text-2xl' onClick={toggle}/>}
        </div>
        <div className={`w-full py-2 border-2 bg-blue-50 px-3 transition-all duration-1000 ease-linear ${expand ? 'block':'hidden'}`}>
            <span className='text-blue-900'>{answer}</span>
        </div>
    </div>
  )
}

export default Headers