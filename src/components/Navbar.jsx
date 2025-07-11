import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full bg-white/5 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-xl font-bold text-white">
                        <span className='text-yellow-500'>&lt;</span>
                        KeyVault<span className='text-yellow-500'>X/&gt;</span>
                    </div>
                    <div className="flex items-center">
                        <a 
                            href="https://github.com/AadeeshRS/KeyVaultX" 
                            target="_blank" 
                            className="invert hover:opacity-80 transition-opacity"
                        >
                            <img  
                                src="/icons/github.png" 
                                alt="GitHub" 
                                className="w-30"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
