"use client";
import Head from 'next/head';
import {BsFullscreen, BsFillMoonStarsFill } from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import intro from "../public/intro.png";
import { useState, useEffect } from 'react';
import design from "../app/design.png"
import home from "../public/home.jpg"
import home2 from "../public/option2.jpg"


function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  const handleResize = () => {
    setScrollPosition(window.pageYOffset);
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);

  let imageHeight = 0;

  if (typeof window !== 'undefined') {
    const img = document.getElementById('yes');
    if (img) {
      imageHeight = img.clientHeight;
    }
  }


  const navbarBackground =  scrollPosition > imageHeight ? 'bg-cyan-800' : '';


  const[darkMode, setDarkMode] = useState(false); 
  const darken = darkMode ? "dark": ""

  return (
     <div className={darkMode ? 'dark' : ''}>
     <Head>
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
     </Head>
      <nav className={`hidden py-7 md:flex justify-between w-full fixed transition-colors ${navbarBackground} ${darken} z-20`}> 
        <ul className='flex items-center ml-auto'>
          <li>
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black dark:text-white mr-8 hover:-translate-y-1' />
          </li>
          <li className=' mx-5 hover:-translate-y-1'>
          <a href = "#top">Home</a>
          </li>
          <li className=' mx-5 hover:-translate-y-1'>
          <a >About</a>
          </li>
          <li className='mx-5 hover:-translate-y-1'>
          <a>Projects</a>
          </li>
          <li className='mx-5 hover:-translate-y-1'>
          <a>MakerSpace</a>
          </li>
          <li className='mx-5 hover:-translate-y-1'>
          <a className = 'bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md' href="https://drive.google.com/file/d/1_jNZNPKrMCj4XdgVHAviRhQO3RX8lrPm/view?usp=share_link" target='_blank' rel="noopener noreferrer" >Resume</a>
          </li>
        </ul>
      </nav>  
        <main className='bg-gray-300  dark:bg-gray-800'>
          <section className='relative'>
            <h2 className='text-orange-100 font-Bebas_Neue font-bold text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-40 text-center z-10 md:text-5xl xl:text-7xl'>Alexander Zhao </h2>
            <h3 className='text-orange-100 font-burton text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-center z-10'>My Portfolio</h3>
            <div className='image-container'>
            <Image id='yes' src = {home2} className='w-full h-825 md:h-auto block' />
            </div>
          </section>
          <section className="min-h-screen">
          <div className='text-justify rounded max-w-2xl'>
            <div className='p-5 py-28'>
            <h3 className='text-black text-2xl py-2 dark:text-white'>Fullstack and Machine Learning Developer </h3>
            <p className = 'text-gray-800 text-md py-5 leading-8 dark:text-white whitespace-normal block '>I am a self-motivated second-year undergraduate student at Queen's University studying computer science with a specialization in Software Design. I am passionate about programming and am always eager to learn and try out new technologies. I have experience in developing software applications and am also interested in machine learning and data analysis.</p>
            </div>
          </div> 
          <div>
              <div className='text-gray-600 text-3xl flex justify-center gap-10 -mt-36'>      
              <a href="https://www.instagram.com/alexzhaoooo/" target = "_blank"className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
              <AiFillInstagram className='hover:shadow hover:shadow-black hover:rounded-xl text-gray-500 dark:text-pink-400'/>
              </a>
              <a href="https://www.linkedin.com/in/alexander-zhao-926225211/" target = "_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1' >
              <AiFillLinkedin className='hover:shadow hover:shadow-blue-700 rounded-md text-blue-700'/>
              </a>
              <a href="https://github.com/alexzhaoo" target = "_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
              <AiFillGithub className=' text-black hover:shadow hover:shadow-black rounded-full dark:text-white'/>
              </a>
              </div>
          </div>   
            <div className='mx-auto my-10 bg-gradient-to-b from-gray-600 to-orange-100 rounded-full w-72 h-50 overflow-hidden '>
            <Image
            src= {intro} 
            alt='Image'
            className='mr-8'/>
            </div>
          </section>
          <section className="min-h-screen text-center">
            <div className='text-black '>
              <h3 className=' text-3xl py-1 text-center dark:text-white'>My Journey as a Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'> A <span className='text-teal-500'> blurb</span> this is how u highlight text btw about experience, and projects , and school.</p>
            </div>
            <div>
              <div>
                <Image src = {design} width={100} height={100}/>
              </div>
            </div>
          </section>
        </main>

    </div>
  );
}

export default Home;