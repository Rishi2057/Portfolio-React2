import React from 'react'
import Header from './Header'
import Icons from './components/Icons'
import { FaAngular, FaCss3, FaGitAlt, FaHtml5, FaNode, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io5'
import './Skills.css'
import MobHeader from './components/MobHeader'

function Skills() {


  return (
    <>
    <div className='sm:hidden'><MobHeader /></div>
            <div className='hidden sm:flex'><Header /></div>
      <div className=" min-h-screen" style={{ backgroundImage: `url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", }} >

        <div className='text-white h-screen grid grid-cols-[1fr_6fr_1fr]'>
          <div></div>
          <div className='flex flex-col pt-10 md:pt-30 justify-center'>
            <h1 className='text-center text-4xl md:text-5xl font-bold uppercase pb-15 md:pb-15'>Skills</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 space-y-5 place-content-center gap-5 md:p-5 '>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Node.js<FaNode className='icon' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Express.js<SiExpress className='icon2' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Mongo DB<SiMongodb className='icon' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>React<FaReact className='icon2' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Angular<FaAngular className='icon' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>HTML5<FaHtml5 className='icon2' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>CSS3<FaCss3 className='icon' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Tailwind<RiTailwindCssFill className='icon2' /></h1>
              </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4'>
              <div className='hidden md:block'></div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>Git<FaGitAlt className='icon' /></h1>
              </div>
              <div>
                <h1 className='div flex justify-center gap-2 items-center'>JavaScript<IoLogoJavascript  className='icon2' /></h1>
              </div>
              <div className='hidden md:block'></div>
            </div>

          </div>
          <div></div>
          <div></div>
          <div className='flex justify-center items-center h-full'> <Icons /></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Skills