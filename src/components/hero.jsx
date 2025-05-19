import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Lanyard from './reactbits/lanyard';
import Hyperspeed from './reactbits/hyperspeed';
import RotatingText from './reactbits/rotatingtext';
import { Button, Flex } from 'antd';

function Hero() {
  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#020203] pl-16'>
      <div className='absolute inset-0 z-0'>
        <Hyperspeed />
      </div>
      <div className='relative z-10 flex flex-col  justify-center h-full'>
        <p className='text-4xl mb-4 text-white font-semibold'>I'm a aspiring <RotatingText
        texts={['UI/UX Designer', 'Front-end Developer']}
        mainClassName="gradient-bg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        /></p>
        <h1 className='text-8xl font-bold mb-2 text-white'>I'm Mc Lester Papa</h1>
        <h1 className='text-8xl font-bold mb-6 gradient-text'>Jr UI/UX Designer</h1>
        <p className='max-w-2xl text-2xl text-white font-normal'>
          I'm a fresh graduate from Bulacan State University, based in the Philippines. 
          I'm passionate about crafting modern, user-centered interfaces and building 
          responsive websites that deliver great user experiences.
        </p>
        <button className='gradient-bg text-white rounded-lg w-50 h-15 mt-10'>Download CV</button>
      </div>

      <div className='absolute inset-0 z-10 left-250'>
        <Lanyard
          position={[0, 0,15]} 
          gravity={[0, -40, 0]}
        />
      </div>
    </div>
  );
}

export default Hero;