import React from 'react'
import { IoMdContact } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

function SideBarHeader() {

      const params = useLocation()
    // console.log(params);
    const navigate = useNavigate()

    return (
        <>
            <div className='shadow-xl flex flex-col gap-15 justify-center h-screen  '>
                <div className='flex flex-col items-center'>
                
                    <h1 className={params.pathname == '/'? 'hidden' : ' font-medium cursor-pointer text-white hover:text-slate-200'} onClick={() => navigate("/")}>Logo</h1>
                </div>
                

                <div className='flex-col flex gap-15 items-center'>
                    <div className='flex flex-col gap-7 items-center'>
                        <h1 onClick={() => navigate("/about")} className='font-medium cursor-pointer text-white hover:text-slate-200'>About Me</h1>
                        <h1 onClick={() => navigate("/skills")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Skills</h1>
                        <h1 onClick={() => navigate("/projects")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Projects</h1>

                    </div>
                    <div className='items-center'>
                        <h1 onClick={() => navigate("/contact")} className='font-medium bg-white border border-white text-black text-4xl rounded-full cursor-pointer hover:bg-black hover:text-white'><IoMdContact /></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarHeader