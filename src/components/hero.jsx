import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen text-white row-start-2 gradient-bg'>
      <h1 className='text-7xl font-bold'>Hello, I'm <span className='gradient-text'><TypeAnimation sequence={['UI/UX Designer', 500, 'Front-end Developer', 500, 'Mc Lester Papa', 500]}
  style={{ fontSize: '72px' }}
/></span></h1>
      <p className='text-lg mt-4 font-inter'>I'm a <span className='gradient-text font-semibold text-2xl'>Aspiring UI/UX Designer & Front-End Developer</span> |🔥 Dedicated to do enhance user experience</p>
      <div className='flex flex-row items-center gap-4 mt-6'>
      <button className='mt-6 px-6 py-2 bg-[#a855f7] text-white rounded-full hover:bg-[#9333ea] transition duration-300'>View Project</button>
      <button className='mt-6 px-6 py-2 bg-[#000] border-2 text-[#9333ea] rounded-full hover:bg-[#9333ea] hover:text-white hover:border-[#9333ea] transition duration-300'>Contact Me</button>
      </div>
    </div>
  );
}

export default Hero;