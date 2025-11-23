import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import '../components/Icons.css'

function Icons() {



  // document.querySelectorAll('.fade2-rotate').forEach(el => {
  //   el.addEventListener('animationend', () => {
  //     el.classList.remove('fade-rotate');
  //   });
  // });


  const params = useLocation()
  const navbar = params.pathname == "/about" || params.pathname == "/skills" || params.pathname == "/projects"


  return (
    <>
      <div className={navbar ? 'flex gap-10 justify-center' : 'flex-col flex gap-10 items-center justify-center'}>
        <div className='text-4xl hover:text-slate-200'>
          <a href='https://www.linkedin.com/in/rishi-sankar-r-430a4a362/' target='blank'><FaLinkedin className='card fade-rotate' /></a>
        </div>
        <div className='text-4xl hover:text-slate-200'>
          <a href='https://github.com/Rishi2057?tab=repositories' target='blank'><FaGithub className='card2 fade2-rotate' /></a>
        </div>
        <div className='text-4xl hover:text-slate-200'>
          <a href='https://vercel.com/rishi2057s-projects' target='blank'> <IoLogoVercel className='card fade-rotate' /></a>
        </div>
      </div>
    </>
  )
}

export default Icons