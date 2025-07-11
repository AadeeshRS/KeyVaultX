import React from 'react'

const Navbar = () => {
    return (
       <nav className="top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-sm border-b border-white/10 text-white flex p-4 justify-between items-center h-15">
            <div className="logo font-bold mx-20 text-xl">
                <span className='text-yellow-500'>
                &lt;
                </span>
                KeyVault<span className='text-yellow-500'>X/&gt;</span>
                </div>
            <ul className='mx-20'>

                {/* <li className='flex gap-4'>
                    <a href="#" className='hover:font-bold transition-normal duration-200'>Home</a>
                    <a href="#" className='hover:font-bold tranrtsition-normal duration-200'>About</a>
                    <a href="#" className='hover:font-bold transition-normal duration-200'>Contact</a>
                </li> */}
            </ul>
            <div>
                <img className='invert cursor-pointer mx-20' width={110} src="/icons/github.png" alt="" />
            </div>
        </nav>
    )
}

export default Navbar
