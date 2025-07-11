import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, []);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }
    const savePassword = () => {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
        toast.success("Password saved!", { position: "bottom-center" });
    }
    const deletePassword = (id) => {
        let c = confirm("Are you sure you want to delete this password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id != id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
            toast.success("Password deleted!", { position: "bottom-center" });
        }
    }

    const editPassword = (id) => {
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id != id))
        toast.success("Password edited!", { position: "bottom-center" });
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!", { position: "bottom-center" });
    }

    return (
        <>
            <ToastContainer autoClose={2000} theme='dark' />
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
                            <input
                                type={showPassword ? "text" : "password"}
                                ref={passwordRef}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                className='border border-yellow-500 bg-white p-4 py-1 rounded-2xl text-black my-3 w-full'
                            />
                            <span className="absolute right-2 py-1.5 text-black bottom-3.5">
                                <img
                                    onClick={toggleShowPassword}
                                    className='px-1 cursor-pointer bott'
                                    width={25}
                                    src={showPassword ? "icons/eyecross.jpg" : "icons/eye.svg"}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} disabled={form.site === "" || form.username === "" || form.password === ""} className='disabled:opacity-50 flex justify-center items-center bg-yellow-500 py-1.5 text-black rounded-full p-1.5 px-5 w-fit cursor-pointer hover:bg-yellow-300 transition-all duration-200 gap-2'>
                        <lord-icon className="py-1.5 bottom-1 text-white"
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-3'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full overflow-hidden rounded-md">
                        <thead className='bg-yellow-400 py-1 text-black'>
                            <tr>
                                <th className='py-0.5'>Site</th>
                                <th className='py-0.5'>Username</th>
                                <th className='py-0.5'>Passwords</th>
                                <th className='py-0.5'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-yellow-50 py-1 text-black'>
                            {passwordArray.map((item) => {
                                return (
                                    <tr key={item.site}>
                                        <td className='py-0.5 text-center border border-black'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <a href={item.site} target='_blank' className='break-all'>{item.site}</a>
                                                <span onClick={() => copyText(item.site)} className='cursor-pointer'>
                                                    <lord-icon className='py-1 w-5 bottom-0.5'
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </span>
                                            </div>
                                        </td>
                                        <td className='py-0.5 text-center border border-black'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <span className='break-all'>{item.username}</span>
                                                <span onClick={() => copyText(item.username)} className='cursor-pointer'>
                                                    <lord-icon className='py-1 w-5 bottom-0.5'
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </span>
                                            </div>
                                        </td>
                                        <td className='py-0.5 text-center border border-black'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <span className='break-all display-'>{item.password}</span>
                                                <span onClick={() => copyText(item.password)} className='cursor-pointer'>
                                                    <lord-icon className='py-1 w-5 bottom-0.5'
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </span>
                                            </div>
                                        </td>
                                        <td className='py-0.5 text-center border border-black'>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}   ><lord-icon className='w-5 '
                                                src="https://cdn.lordicon.com/xyfswyxf.json"
                                                trigger="hover">
                                            </lord-icon></span>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}><lord-icon className='w-5'
                                                src="https://cdn.lordicon.com/ntjwyxgv.json"
                                                trigger="hover"
                                            >
                                            </lord-icon></span>
                                        </td>
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
