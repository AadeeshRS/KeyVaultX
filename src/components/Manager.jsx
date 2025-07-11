import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.jpg")) {
            ref.current.src = "icons/eye.svg"
        }
        else {
            ref.current.src = "icons/eyecross.jpg"
        }
    }
    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="mx-auto max-w-5xl px-14 py-7 text-white">
                <h1 className='py-1.5 text-3xl font-bold text-center'>
                    <span className='py-1.5 text-yellow-500'>
                        &lt;
                    </span>
                    KeyVault<span className='py-1.5 text-yellow-500'>X/&gt;</span>
                </h1>
                <p className='py-1.5 text-center text-lg'>Your own Password Manager</p>
                <div className='py-1.5 text-white flex flex-col p-4 gap-4 items-center'>
                    <input type="py-1.5 text" name="site" value={form.site} onChange={handleChange} placeholder='Enter the website URL' className='rounded-2xl border border-yellow-500 bg-white p-4 py-1 text-black w-full' />
                    <div className="flex w-full gap-6 justify-between">
                        <input type="py-1.5 text" name="username" value={form.username} onChange={handleChange} placeholder='Enter Username' className='border border-yellow-500 bg-white p-4 py-1 rounded-2xl text-black my-3 w-full' />
                        <div className="relative">
                            <input type="py-1.5 text" name="password" value={form.password} onChange={handleChange} placeholder='Enter Password' className='border border-yellow-500 bg-white p-4 py-1 rounded-2xl text-black my-3 w-full' />
                            <span className="absolute right-2 py-1.5 text-black bottom-3.5"><img ref={ref} onClick={showPassword} className='px-1 cursor-pointer bott' width={25} src="icons/eye.svg" alt="" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-yellow-500 py-1.5 text-black rounded-full p-1.5 px-5 w-fit cursor-pointer hover:bg-yellow-300 transition-all duration-200 gap-2'>
                        <lord-icon className="py-1.5 bottom-1 text-white"
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-3'>Your Passwords</h2>
                    {passwordArray.length===0 && <div>No passwords to show</div> }
                   { passwordArray.length !=0 && <table className="table-auto w-full overflow-hidden rounded-md">
                        <thead className='bg-yellow-400 py-1.5 text-black'>
                            <tr>
                                <th className='py-1.5'>Site</th>
                                <th className='py-1.5'>Username</th>
                                <th className='py-1.5'>Passwords</th>
                            </tr>
                        </thead>
                        <tbody className='bg-yellow-50 py-1.5 text-black'>
                            {passwordArray.map((item)=>{
                                return(
                            <tr key={item.index}>
                                <td className='py-1.5  text-center w-32 border border-black'><a href={item.site} target='_blank'></a> {item.site}</td> 
                                <td className='py-1.5 text-center w-32 border border-black'> {item.username}</td> 
                                <td className='py-1.5 text-center w-32 border border-black'> {item.password}</td> 
                            </tr>)
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
