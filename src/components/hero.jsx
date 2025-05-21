import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Lanyard from './reactbits/lanyard';
import Hyperspeed from './reactbits/hyperspeed';
import RotatingText from './reactbits/rotatingtext';
import { Button, Flex } from 'antd';
import FadeContent from './reactbits/fadecontent';
import Particles from './reactbits/particles';

function Hero() {


  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#020203] pl-16 row-start-1'>
      

      <div className='absolute inset-0 z-5'>
        <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      </div>


      <div className='relative z-10 flex flex-col  justify-center h-full'>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='text-4xl mb-4 text-white font-semibold'>I'm a aspiring <RotatingText
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
        /></div>

        <h1 className='text-8xl font-bold mb-2 text-white'>I'm Mc Lester Papa</h1>
        <h1 className='text-8xl font-bold mb-6 gradient-text'>Jr Web Developer</h1>
        <p className='max-w-2xl text-2xl text-white font-normal'>
          I'm a fresh graduate from Bulacan State University, based in the Philippines. 
          I'm passionate about crafting modern, user-centered interfaces and building 
          responsive websites that deliver great user experiences.
        </p>
        <button className='gradient-bg text-white rounded-lg w-50 h-15 mt-10'><a href="">Download CV</a></button>
            </FadeContent>
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