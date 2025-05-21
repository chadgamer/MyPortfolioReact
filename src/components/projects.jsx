import React, {useState} from "react";
import { Card, Button } from 'antd';
import {  ArrowRightOutlined  } from '@ant-design/icons';
import project1 from "../assets/Frame 427318912.png"
import project2 from "../assets/Frame 19.png"
import project3 from "../assets/Frame 38.png"
import project4 from "../assets/08ec4a36-ae46-4c27-b963-6369a0114f8a.png"
import reactIcon from "../assets/react-svgrepo-com.svg"
import firebaseIcon from "../assets/firebase-svgrepo-com.svg"
import figmaIcon from "../assets/figma-svgrepo-com.svg"
import wixIcon from "../assets/wix-svgrepo-com.svg"
import AnimatedContent from './reactbits/animatedcontent';
import ScrollFloat from './reactbits/scrollfloat';
import BlurText from './reactbits/blurtext';
import PixelCard from './reactbits/pixelcard';
import Particles from './reactbits/particles';


function Projects() {

    const { Meta } = Card;
    const Text = "<Projects />";
    const [position, setPosition] = useState('end');



    const projects = [
        {
            name: "Educational Blog Website",
            description: "A web design initiative created to help FEU students explore new perspectives on education through critical insights, inclusive voices, and future-ready ideas.",
            image: project1,
            tools: [figmaIcon,wixIcon],
            link:"https://a38986218.wixstudio.com/thingkingedu",
            key: "web",
        },
        {
            name: "Bloom Café",
            description: "A cozy café experience online with warm aesthetics, easy navigation, and a beautifully curated menu display.",
            image: project2,
            tools: [figmaIcon],
            link:"https://www.behance.net/gallery/224724907/Bloom-Caf",
            key: "mobile",
        },
        {
            name: "Personal Trainer Website",
            description: "A prenium shopping experience with intuitive navigation and seamless checkout process",
            image: project3,
            tools: [figmaIcon],
            link:"https://www.behance.net/gallery/224736437/Personal-Trainer-Website",
            key: "web1",
        },
        {
            name: "Amihana Web portal",
            description: "A HOA web portal for the HOA of amihana residence to manage the 3 financial statement of the organization",
            image: project4,
            tools: [figmaIcon,reactIcon,firebaseIcon],
            link:"https://amihanawebportal.vercel.app/",
            key: "webapp",
        },
    ];
    
    
    return (
        <div className="bg-[#020203] h-full pt-50 pb-50 row-start-4 relative">

             <div className='absolute inset-0 z-0'>
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
            <div className="flex flex-col justify-center item-center z-10">
                <div className="font-bold gradient-text text-center"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>{Text}</ScrollFloat></div>
                <div className="text-[#f3f4f6] font-thin text-center text-xl max-w-2xl mx-auto"><BlurText text="A curated selection of my recent projects spanning web design, branding, and digital experiences." delay={150} animateBy="words" direction="top" /></div>
            </div>
            
            <div className="grid grid-cols-3 items-center justify-items-center mt-20 z-12">

            {projects.map((project,index)=>(
                <AnimatedContent
  distance={50}
  delay={500}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
               <PixelCard 
                    key={project.key} 
                    variant="purple" 
                    className="w-120 min-h-[350px] transition-transform hover:scale-[1.02] m-10"
                >
                    <div className="flex flex-col h-full">
                        <div className="w-full h-[250px] overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-white text-2xl font-semibold mb-4">
                                {project.name}
                            </h3>
                            <p className="text-[#f3f4f6] text-base mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex gap-4 mt-auto">
                                    {project.tools.map((tool, toolIndex) => (
                                        <img 
                                            key={toolIndex}
                                            src={tool} 
                                            alt="tool icon" 
                                            className="h-8 w-8"
                                     />
                                    ))}
                                </div>
                                <button className='gradient-bg text-white rounded-lg w-40 h-10'><a href={project.link}>View Project <i><ArrowRightOutlined /></i></a></button>
                            </div>
                        </div>
                    </div>
                </PixelCard>
</AnimatedContent>
            ))}
            </div>
        </div>
        
          
    );

}

export default Projects;