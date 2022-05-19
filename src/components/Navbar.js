import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center h-[60px] pl-6 max-w-[1400px] mx-auto bg-blue-600'>
        <div><span className='text-2xl text-blue-50 font-thin'>And</span><span className='text-2xl text-blue-400 font-bold border-b-4 to-blue-400 cursor-pointer shadow-md italic shadow-blue-800'>roy</span></div>
        <nav className='hidden md:block'>
            <ul className=''>
                <li  className='inline-block text-slate-50 px-10 hover:bg-blue-900 hover:text-slate-300 py-4'><Link to='/'>Home</Link></li>
                <li  className='inline-block text-slate-50 px-10 hover:bg-blue-900 hover:text-slate-300 py-4'><Link to='/about'>About</Link></li>               
                <li  className='inline-block text-slate-50 px-10 hover:bg-blue-900 hover:text-slate-300 py-4'><Link to='/projects'>Projects</Link></li>
                <li  className='inline-block text-slate-50 px-10 hover:bg-blue-900 hover:text-slate-300 py-4'><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar