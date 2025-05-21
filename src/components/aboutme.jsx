import React from "react";
import pic from "../assets/sharad-kachhi-hluitBPPJBI-unsplash.jpg"
import AnimatedContent from "./reactbits/animatedcontent"
import Particles from './reactbits/particles';


export default function Aboutme () {

    const Text = "<About Me />";

    return (
        <div className="row-start-2 relative">

            <div className='absolute inset-0 z-10'>
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
            <div className="flex flex-row justify-center bg-[#020203] gap-50 pt-50 pb-50 z-12">
                <AnimatedContent
  distance={50}
  delay={500}
  direction="horizontal"
  reverse={true}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
                    <img src={pic} alt="" className=" w-150 h-150 rounded-2xl" />
                </AnimatedContent>

                <AnimatedContent
  distance={50}
  delay={500}
  direction="horizontal"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
                    <h1 className="gradient-text font-bold text-6xl mb-10">{Text}</h1>
                    <p className="text-[#f3f4f6] font-normal text-xl my-4">I'm a passionate UI/UX designer and front-end developer with over 1.5 years of <br /> experience creating engaging digital experiences. My approach combines aesthetic <br /> design with technical implementation to build products that are both beautiful and <br /> functional.</p>
                    <p className="text-[#f3f4f6] font-normal text-xl mb-10">With expertise in modern frameworks and design tools, I specialize in translating <br /> complex requirements into intuitive interfaces. I believe in user-centered design <br /> principles and creating accessible experiences that work for everyone.</p>

                    <div className="grid grid-col-2">
                        <div className="col-start-1">
                            <p className="text-[#828282]">Name</p>
                            <h4 className="text-white mb-5">Mc Lester A. Papa</h4>

                             <p className="text-[#828282]">Location</p>
                            <h4 className="text-white">Bulacan</h4>
                        </div>

                        <div className="col-start-2">
                             <p className="text-[#828282]">Email</p>
                            <h4 className="text-white mb-5">papamclester@gmail.com</h4>

                             <p className="text-[#828282]">Availability</p>
                            <h4 className="text-white">Full-time</h4>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );


}