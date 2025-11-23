import React from 'react'
import Header from './Header'
import Icons from './components/Icons'
import MobHeader from './components/MobHeader'

function About() {



    return (
        <>
           <div className='sm:hidden'><MobHeader /></div>
            <div className='hidden sm:flex'><Header /></div>
            <div
                className="min-h-screen bg-fixed"
                style={{
                    backgroundImage: `url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="text-white h-full sm:h-screen md:grid md:grid-cols-[1fr_6fr_1fr]">
                    <div></div>

                    <div className="flex flex-col px-10 md:px-0 items-center mobile:pt-[100px] pt-28 justify-center">
                        <h1 className="text-center text-4xl md:text-5xl font-bold uppercase pb-10">
                            About Me
                        </h1>

                        <p className="text-justify text-lg">
                            I am a passionate learner, currently studying MEARN stack development at Luminar Technolab. I’m dedicated to building dynamic and responsive web applications using modern technologies like MongoDB, Express.js, React, and Node.js.
                            With a focus on clean code and user-friendly design, I aim to create solutions that are both efficient and impactful. I’m constantly exploring new concepts and refining my skills to stay ahead in the ever-evolving world of web development.
                            As a developer, I am constantly experimenting with new tools, frameworks, and best practices to stay updated in the ever-evolving field of web development. My learning journey is fueled by curiosity, creativity, and a drive to contribute to meaningful projects.
                        </p>
                    </div>

                    <div></div>

                    <div></div>

                    <div className="flex justify-center items-center py-10 md:h-full">
                        <Icons />
                    </div>

                    <div></div>
                </div>
            </div>

        </>
    )
}

export default About