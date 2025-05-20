import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Lanyard from './reactbits/lanyard';
import Hyperspeed from './reactbits/hyperspeed';
import RotatingText from './reactbits/rotatingtext';
import { Button, Flex } from 'antd';
import FadeContent from './reactbits/fadecontent';

function Hero() {


  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#020203] pl-16 row-start-1'>

      {/* <div className='absolute inset-0 z-0'>
        <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
      </div> */}


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