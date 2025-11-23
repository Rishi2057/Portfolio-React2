import { useLocation, useNavigate } from 'react-router-dom'
import logo from '/logo_white.png'
import { useState } from 'react';
import '../components/MobHeader.css'


function MobHeader() {
    const [open, setOpen] = useState(false);


    const params = useLocation()
    // console.log(params);


    const navigate = useNavigate()


    return (
        <>
            <div className='px-10 py-5 shadow-xl flex fixed min-w-full bg-transparent justify-between items-center'>
                <div className='flex items-center'>
                    <img onClick={() => navigate("/")} className={params.pathname == '/' ? 'hidden' : 'w-10 cursor-pointer'} src={logo} alt="" />
                </div>

                <div>
                    <button
                        className={`menu-btn ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                {open && <div className='bg-black absolute top-20 min-w-fit'>
                    <div className='flex justify-end gap-2 items-end'>
                        {params.pathname !== "/about" && (<h1 onClick={() => navigate("/about")} className='font-medium cursor-pointer text-white hover:text-slate-200'>About</h1>)}
                        {params.pathname !== "/skills" && (<h1 onClick={() => navigate("/skills")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Skills</h1>)}
                        {params.pathname !== "/projects" && (<h1 onClick={() => navigate("/projects")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Projects</h1>)}

                        <h1 onClick={() => navigate("/contact")} className='font-medium text-white'>Contact</h1>
                    </div>
                </div>}

            </div>
            

        </>
    )
}

export default MobHeader