import React from 'react'

const Footer = () => {
  return (
    <div className='w-full z-50 bg-slate-900 backdrop-blur-sm border-t border-white/10 text-white flex flex-col sm:flex-row p-2 sm:p-3 justify-center items-center h-auto sm:h-10 fixed bottom-0'>
      <div className="flex items-center">
        <div className="logo font-bold text-lg sm:text-xl text-white whitespace-nowrap">
          <span className='text-yellow-500'>&lt;</span>
          KeyVault<span className='text-yellow-500'>X/&gt;</span>
        </div>
        <div className='text-xs sm:text-sm mx-1 sm:mx-2 text-center sm:text-left'>
          © 2025 KeyVaultX. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
