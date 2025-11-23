
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from './Header'
import { IoLogoVercel } from 'react-icons/io5'
import Icons from './components/Icons'
import user from './assets/cover.jpg'
import SideBarHeader from './components/SideBarHeader'
import "./LandingPage.css"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MobHeader from './components/MobHeader'
import MobIcons from './components/MobIcons'

function LandingPage() {

    const location = useLocation();

    const colors = [
        "#39FF14", // neon green (primary)
        "#76FF03", // bright lime
        "#AAFF00", // electric yellow-green
        "#00FF9F", // neon teal-green
        "#0AFF87", // mint neon
    ];


    useEffect(() => {
        if (location.pathname !== "/") return;

        const handleMouseMove = (e) => {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            document.body.appendChild(particle);
            particle.style.boxShadow = `0 0 8px ${colors[Math.floor(Math.random() * colors.length)]},0 0 16px ${colors[Math.floor(Math.random() * colors.length)]}`;
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;
            setTimeout(() => particle.remove(), 500);
        };

        document.addEventListener("mousemove", handleMouseMove);

        // cleanup when leaving "/"
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [location.pathname]);



    document.addEventListener("click", function (e) {
        const click = document.createElement("div");
        click.classList.add("cursor-click");
        document.body.appendChild(click);

        click.style.left = e.clientX + "px";
        click.style.top = e.clientY + "px";

        setTimeout(() => click.remove(), 400);
    });


    return (
        <>
            <div className=" min-h-screen" style={{ backgroundImage: `url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", }} >
                <div className='md:hidden'><MobHeader /></div>
                <div className='pt-40 md:pt-0 md:grid grid-cols-[2fr_10fr_2fr] h-screen text-white'> 
                    <div className='hidden md:flex md:justify-center'>   <Icons /></div>
                    <div className='flex flex-col gap-10 justify-center items-center'>
                        <div className='z-99'>
                            <h1 className='text-3xl md:text-4xl font-bold uppercase text-center pb-2'>Hai Developers..</h1>
                            <h1 className='text-3xl md:text-4xl font-bold uppercase animate-pulse'>I'm <span style={{ WebkitTextStroke: "1px white", color: "black" }} >RishiSankar</span></h1>
                        </div>
                        <div className='flex justify-center'> <img className='logo w-70 z-50 h-70 rounded-3xl' src={user} alt="" /></div>
                    </div>
                    <div className='hidden md:flex md:justify-center'>
                        <SideBarHeader />
                    </div>
                    <div className='md:hidden'>
                        <MobIcons/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default LandingPage