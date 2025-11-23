import React, { useRef } from 'react'
import Header from './Header'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css'
import MobHeader from './components/MobHeader';

function Contact() {


    const form = useRef();
    // console.log(form);

    const inputOne = useRef(null)
    const messegeRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneref = useRef(null)




    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);





        if (!form.current.from_name.value || !form.current.user_email.value || !form.current.phone.value || !form.current.message.value) {

            Swal.fire("Fill the Form Completly")
        } else {
            emailjs
                .sendForm('service_7zqvkrn', 'template_j7gcidc', form.current, {
                    publicKey: 'S9wa21gcdHg18UVhO',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        Swal.fire("Email Sent Successfully!");
                        form.current.reset()
                        console.log(inputOne.current);
                        inputOne.current.innerText = "Mail Sent"
                        inputOne.current.classList.replace("hidden", "flex")
                        nameRef.current.classList.add("border-green-500")
                        emailRef.current.classList.add("border-green-500")
                        phoneref.current.classList.add("border-green-500")
                        messegeRef.current.classList.add("border-green-500")
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <>
            <MobHeader />
            {/* <Header /> */}
            <div className=" h-screen bg-fixed pb-100" style={{ backgroundImage: `url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", }} >
                <div className='h-screen text-white'>
                    <div className='pt-35 flex justify-center'>
                        <h1 className='text-center text-4xl md:text-5xl font-bold uppercase'>contact</h1>
                    </div>
                    <div className='md:grid grid-cols-[2fr_2fr_2fr] pt-15'>
                        <div></div>
                        <form ref={form} onSubmit={sendEmail} className='space-y-10'>
                            <div className='px-10'>
                                <input ref={nameRef} type="text" name="from_name" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='ENTER YOUR NAME*' />
                            </div>
                            <div className='px-10'>
                                <input ref={emailRef} type="text" name="user_email" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='ENTER YOUR EMAIL*' />
                            </div>
                            <div className='px-10'>
                                <input ref={phoneref} type="text" name="phone" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='PHONE NUMBER*' />
                            </div>
                            <div className='px-10'>
                                <textarea ref={messegeRef} name="message" className='border-l-2 outline-0 border-b-2 w-full pb-8 px-3' placeholder='YOUR MESSEGE*' id=""></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <h1 ref={inputOne} className="hidden border-l-2 border-r-2 outline-0 px-8 cursor-pointer py-1 font-medium">
                                </h1>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='border-l-2 border-r-2 outline-0 px-8 cursor-pointer py-1 font-medium'>
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                        <div></div>
                    </div>
                    {/* <div className='pb-15 pt-10 flex justify-around'>
                        <div>
                            <h1 className='font-medium text-2xl'>Let's Talk</h1>
                            <h1>Feel free to reach out-let's collaborate and create something amazing together!</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Contact