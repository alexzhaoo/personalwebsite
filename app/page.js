"use client";
import Head from 'next/head';
import { BsFullscreen, BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image';
import intro from "../public/intro.png";
import { useState, useEffect } from 'react';
import design from "../app/design.png"
import home from "../public/home.jpg"
import home2 from "../public/option2.jpg"
import toronto from "../public/homeey.jpg"
import me from "../public/me.jpg"
import homepage from "../public/homepage.jpg"

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

  let clientHeight = 0;


  if (typeof window !== 'undefined') {
    const img = document.getElementById('yes');
    if (img) {
      imageHeight = img.clientHeight;
    }
  }

  if (typeof window !== 'undefined') {
    const img = document.getElementById('no');
    if (img) {
      clientHeight = img.clientHeight;
    }
  }


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function scrollToAbout(){
    window.scrollTo({
      top: imageHeight,
      behavior: 'smooth'
    });
  }

  function scrollToProject(){
    window.scrollTo({
      top: clientHeight + imageHeight -50 ,
      behavior: 'smooth'
    });
  }




  const navbarBackground = scrollPosition > imageHeight ? 'bg-gradient-to-l from-purple-300 to-teal-500 ' : '';
  const navbarColor = scrollPosition > imageHeight ? 'text-black' : '';

  const [darkMode, setDarkMode] = useState(false);
  const darken = darkMode ? "dark" : ""


  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <nav className={`hidden py-7 md:flex justify-between w-full fixed transition-colors ${navbarBackground} ${navbarColor} ${darken} z-20 `}>
        <ul className={'flex items-center ml-auto'}>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black dark:text-white mr-8 hover:-translate-y-1' />
          </li>
          <li className=' mx-5 hover:-translate-y-1' onClick={scrollToTop}>
            <a> Home</a>
          </li>
          <li className=' mx-5 hover:-translate-y-1' onClick={scrollToAbout}>
            <a >About</a>
          </li>
          <li className='mx-5 hover:-translate-y-1' onClick={scrollToProject}>
            <a>Projects</a>
          </li>
          <li className='mx-5 hover:-translate-y-1'>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md' href="https://drive.google.com/file/d/1_jNZNPKrMCj4XdgVHAviRhQO3RX8lrPm/view?usp=share_link" target='_blank' rel="noopener noreferrer" >Resume</a>
          </li>
        </ul>
      </nav>
      <main className=''>
        <section className='relative bg-gray-300'>
          <h2 className='text-white font-Bebas_Neue font-bold text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-40 text-center z-10 md:text-5xl xl:text-7xl'>Alexander Zhao </h2>
          <h3 className='text-white font-burton text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10'>My Portfolio</h3>
          <div className= 'bg-cover bg-fixed bg-center bg-no-repeat'>
          <Image id='yes' src={homepage} className='w-full md:h-auto block' />
          </div>
        </section>
        <section id='no' className="min-h-screen bg-zinc-50 dark:bg-gray-800 flex flex-col justify-center items-center  md:flex-row sm:flex-row">
        
        <div className='text-center p-5 py-20 mx-auto md:ml-96 sm:ml-96'>
          <h3 style={{ borderBottom: '2px solid gray' }} className='text-black text-2xl py-2 dark:text-white font-semibold max-w-5xl mx-auto'>Fullstack and Machine Learning Developer | Computer Science Student</h3>
          <h3 style={{ borderBottom: '2px solid gray' }} className='mt-10 text-xl max-w-md mx-auto text-black font-semibold dark:text-white'>About Me</h3>
          <p className='text-black text-md py-5 leading-8 dark:text-white max-w-2xl mx-auto'>I am a self-motivated second-year undergraduate student at Queen's University studying computer science with a specialization in Software Design. I am passionate about programming and am always eager to learn and try out new technologies. I have experience in developing software applications and am also interested in machine learning and data analysis.</p>
          <h3 style={{ borderBottom: '2px solid gray' }} className='mt-2 text-xl max-w-md mx-auto text-black font-semibold dark:text-white'>Details</h3>
          <p className="text-black text-md py-5 leading-8 dark:text-white max-w-2xl mx-auto" style={{ display: 'flex', flexDirection: 'column' }}>
            Location: Toronto<br />
            Age: 19
          </p>
          <div className='text-gray-600 text-3xl flex justify-center gap-10'>
            <a href="https://www.instagram.com/alexzhaoooo/" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
              <AiFillInstagram className='hover:shadow hover:shadow-black hover:rounded-xl text-gray-500 dark:text-pink-400' />
            </a>
            <a href="https://www.linkedin.com/in/alexander-zhao-926225211/" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1' >
              <AiFillLinkedin className='hover:shadow hover:shadow-blue-700 rounded-md text-blue-700' />
            </a>
            <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
              <AiFillGithub className=' text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
            </a>
          </div>
        </div>
        <div className='mt-8 md:mt-0 sm:mt-0'>
          <div className='mx-auto mb-7 sm:mr-96 bg-gradient-to-b from-gray-600 to-orange-100 rounded-full w-450 h-450 overflow-hidden '>
            <Image
              src={me}
              alt='Image'
              className='mr-8'
            />
          </div>
        </div>
      </section>

      
      <section className="h-1150 bg-orange-50 dark:bg-gray-700">
      <div className="text-stone-950 text-center">
        <h3 className="text-5xl pt-10 text-teal-500 font-semibold">Experiences</h3>
        <p className="mt-5 font-light">"Experience gives us the tests first and the lessons later"</p>
        <p className="mt-1 font-light">- Naomi Judd</p>
        <p style={{ borderBottom: '1px solid gray' }} className="text-orange-50 max-w-3xl mx-auto mt-10">    </p>
      </div>
      <div className="text-center text-black">
        <h3 className="mt-5 text-teal-500 text-3xl -ml-630 font-light">Education</h3>
        <div className="flex justify-center">
          <div className="py-5 text-zinc-900">
            <p className='font-semibold ml-32'>Toronto Montessori School</p>
            <p className='text-xs mt-4 ml-22spec'>September 2016 - May 2022</p>
            <p className='mt-10 font-semibold ml-32'>Queen's University</p>
            <p className='text-xs mt-4 ml-22spec'>September 2022 - Present</p>
          </div>
          <div className="mx-2 py-5 ml-24">
            <p className='font-semibold text-sm '>Ontario Secondary School Diploma || International Baccalaureate Program Diploma</p>
            <p className='text-sm font-light '> I finished my last two years of middle school and 4 years of high school at TMS.</p>
            <p className='text-sm font-light mr-8'> During my last 2 years of high school I participated in the IB DP Programme, where  </p>
            <p className='text-sm font-light '> I enrolled in higher level Math, Physics and Economics. Completed an extended essay, </p>
            <p className='text-sm font-light '> and multiple individual assesments. </p>
          </div>
        </div>
      </div>
    </section>
    
    


        <section className="min-h-screen bg-gray-300 dark:bg-gray-700"> 
          <div className='text-black text-center '>
            <h3  className="text-4xl pt-10 text-teal-500">Projects</h3>
            <p className='mt-5 mx-auto  text-sm dark:text-white'>"The best way to predict the future is to create it."</p>
            <p className='mt-1 mx-auto  text-sm dark:text-white' >- Peter Drucker</p>
          </div>
            <div className='flex flex-wrap  justify-center gap-10 '>
              <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
                <div className='flex justify-center'>
                  <Image src={design} width={100} height={100} />
                </div>
            <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
            <p className='py-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              when an unknown printer took a galley of type and scrambled it to make a t
            </p>
            <div className='flex justify-center'>
              <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
              </a>
          </div>
        </div>
        <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
          <div className='flex justify-center'>
            <Image src={design} width={100} height={100} />
          </div>
          <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
          <p className='py-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            when an unknown printer took a galley of type and scrambled it to make a t
          </p>
          <div className='flex justify-center'>
            <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
              <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
            </a>
          </div>
      </div>
      <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
        <div className='flex justify-center'>
          <Image src={design} width={100} height={100} />
        </div>
        <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
        <p className='py-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          when an unknown printer took a galley of type and scrambled it to make a t
        </p>
        <div className='flex justify-center'>
          <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
            <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
          </a>
        </div>
    </div>
            <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
              <p className='py-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                when an unknown printer took a galley of type and scrambled it to make a t
              </p>
              <div className='flex justify-center'>
                <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                  <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
                </a>
            </div>
          </div>
          <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
            <div className='flex justify-center'>
              <Image src={design} width={100} height={100} />
            </div>
            <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
            <p className='py-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              when an unknown printer took a galley of type and scrambled it to make a t
            </p>
            <div className='flex justify-center'>
              <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
              </a>
            </div>
        </div>
        <div className='text-center text-black py-10 mt-10 shadow shadow-black rounded-md max-w-xl dark:text-white'>
          <div className='flex justify-center'>
            <Image src={design} width={100} height={100} />
          </div>
          <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
          <p className='py-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            when an unknown printer took a galley of type and scrambled it to make a t
          </p>
          <div className='flex justify-center'>
            <a href="https://github.com/alexzhaoo" target="_blank" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
              <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
            </a>
          </div>
      </div>
    </div>
        </section>
      </main>

    </div>
  );
}

export default Home;