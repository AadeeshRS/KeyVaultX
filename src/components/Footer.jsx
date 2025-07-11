import React from 'react'

const Footer = () => {
  return (
    <div className='w-full z-50 bg-slate-900 backdrop-blur-sm border-b border-white/10 text-white flex p-4 justify-center items-center h-10 fixed bottom-0'>
       <div className="logo font-bold text-xl text-white">
                <span className='text-yellow-500'>
                &lt;
                </span>
                KeyVault<span className='text-yellow-500'>X/&gt;</span>
                </div>
                <div className='text-center mx-1'>© 2025 KeyVaultX. All rights reserved.</div>

    </div>
  )
}

export default Footer
