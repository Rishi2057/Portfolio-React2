import { useLocation, useNavigate } from 'react-router-dom'
import logo from '/logo_white.png'


function Header() {


    const params = useLocation()
    // console.log(params);
    

    const navigate = useNavigate()


    return (
        <>
            <div className='px-10 py-5 shadow-xl flex fixed w-full bg-transparent justify-between'>
                <div className='flex items-center'>
                    <img onClick={() => navigate("/")} className={params.pathname == '/'? 'hidden' : 'w-10 cursor-pointer'} src={logo} alt="" />
                </div>

                <div className='flex gap-10'>
                    <div className='flex gap-5 items-center'>
                       {params.pathname !== "/about" && (<h1 onClick={() => navigate("/about")} className='font-medium cursor-pointer text-white hover:text-slate-200'>About Me</h1>)}
                        {params.pathname !== "/skills" && (<h1 onClick={() => navigate("/skills")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Skills</h1>)}
                        {params.pathname !== "/projects" && (<h1 onClick={() => navigate("/projects")} className='font-medium cursor-pointer text-white  hover:text-slate-200'>Projects</h1>)}

                    </div>
                    <div className='items-center'>
                        <h1 onClick={() => navigate("/contact")} className='font-medium bg-black border border-white text-white px-5 py-2 rounded-4xl cursor-pointer hover:bg-white hover:text-black'>Contact Me</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header