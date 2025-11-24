import React, { useEffect } from 'react'
import Header from './Header'
import course from './assets/course.png'
import restuarant from './assets/restuarant.png'
import resume from './assets/resume.png'
import travel from './assets/travel.png'
import bookstore from './assets/bookstore.png'
import Icons from './components/Icons'
import AOS from "aos";
import "aos/dist/aos.css";
import MobHeader from './components/MobHeader'



function Projects() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <>
            <div className='sm:hidden'><MobHeader /></div>
            <div className='hidden sm:flex'><Header /></div>
            <div className="min-h-screen pb-15 bg-fixed bg-center text-white" style={{ backgroundImage: `url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >

                <div className='md:grid grid-cols-[1fr_20fr_1fr]'>
                    <div className=""></div>
                    <div className='pt-29 md:pt-45 md:ps-4'>
                        <h1 className='text-center text-4xl md:text-5xl font-bold uppercase'>projects</h1>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className='pt-10 md:p-25  px-10 flex flex-col gap-15'>

                        <div data-aos="flip-down" className='md:flex gap-10 space-y-3'>
                            <img className='w-100' src={travel} alt="" />
                            <div className='space-y-5'>
                                <p className='flex items-center'>Luxura Travels is a fully static website built using HTML, CSS, and Tailwind CSS. It highlights luxury travel destinations, exclusive packages, and easy-to-browse sections that give users a smooth and elegant viewing experience. Designed for speed and simplicity, it works perfectly across devices without requiring any backend or database.</p>
                                <a href='https://luxura-travels-nine.vercel.app/' target='blank'><button className='bg-white text-black font-medium px-2 py-1 rounded text-sm'>Click Here</button></a>
                            </div>
                        </div>

                        <div data-aos="flip-up" data-aos-delay="150" className='md:flex gap-10 space-y-3'>
                            <img className='w-100' src={restuarant} alt="" />
                            <div className='space-y-5'>
                                <p className='flex items-center'>Spice Veda is a simple and fully responsive static restaurant website created with pure HTML and CSS. It showcases the restaurant’s menu, special dishes, and brand story through a clean and minimal layout. Designed for smooth browsing and fast loading, it works on all screen sizes without using JavaScript or frameworks.</p>
                                <a href='https://restuarent-five.vercel.app/' target='blank' ><button className='bg-white text-black font-medium px-2 py-1 rounded text-sm'>Click Here</button></a>
                            </div>
                        </div>

                        <div data-aos="flip-down" data-aos-delay="200" className='md:flex gap-10 space-y-3'>
                            <img className='w-100' src={course} alt="" />
                            <div className='space-y-5'>
                                <p className='flex items-center'>Built a frontend clone of the Udemy platform focusing on course listings, category pages, and responsive UI components. The project uses React.js for a modular, component-based architecture and Tailwind CSS for fast, modern, and consistent styling. Reusable components and optimized layouts improve performance and maintain a clean, uniform user experience across devices</p>
                                <a href='https://react-course-selling-app.vercel.app/' target='blank'  ><button className='bg-white text-black font-medium px-2 py-1 rounded text-sm'>Click Here</button></a>
                            </div>
                        </div>

                        <div data-aos="flip-up" data-aos-delay="300" className='md:flex gap-10 space-y-3'>
                            <img className='w-100' src={resume} alt="" />
                            <div className='space-y-5'>
                                <p className='flex items-center'>RBuilder is a simple and efficient CRUD application built using React. It allows users to create, read, update, and delete resume data with a clean and responsive interface. The project uses a local db.json file (via JSON Server) to simulate a backend, enabling fast development and smooth data handling without a full database setup. Reusable components and organized layouts ensure a consistent user experience.</p>
                                <a href='https://resume-builder-fronted.vercel.app/' target='blank'><button className='bg-white text-black font-medium px-2 py-1 rounded text-sm'>Click Here</button></a>
                            </div>
                        </div>

                        <div data-aos="flip-down" data-aos-delay="300" className='md:flex gap-10 space-y-3'>
                            <img className='w-100' src={bookstore} alt="" />
                            <div className='space-y-5'>
                                <p className='flex items-center'>BookStore is a full-stack MERN application designed for managing books with complete CRUD functionality. Users can add new books, view detailed listings, update existing entries, and delete them through an intuitive and responsive interface. The backend is powered by Node.js and Express.js with MongoDB for secure data storage, while React.js provides a clean, dynamic frontend experience. The project focuses on efficient API handling, reusable components, and a smooth user workflow.</p>
                                <a href='https://book-store-frontend-seven-phi.vercel.app/' target='blank'> <button className='bg-white text-black font-medium px-2 py-1 rounded text-sm'>Click Here</button></a>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className='pt-15'>
                    <Icons />
                </div>


            </div>
        </>
    )
}

export default Projects