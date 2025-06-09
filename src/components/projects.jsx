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
import FlowingMenu from "./reactbits/flowingmenu";
import FadeContent from './reactbits/fadecontent';


function Projects() {

    const { Meta } = Card;
    const Text = "<Projects />";
    const [position, setPosition] = useState('end');


    const demoItems = [
  { link: 'https://a38986218.wixstudio.com/thingkingedu', text: 'Thinking Education', image: project1 },
  { link: 'https://www.behance.net/gallery/224724907/Bloom-Caf', text: 'Bloom Cafe', image: project2 },
  { link: 'https://www.behance.net/gallery/224736437/Personal-Trainer-Website', text: 'Trainer Website', image: project3 },
  { link: 'https://amihanawebportal.vercel.app/', text: 'Amihana Web App', image: project4 }
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
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
              />
                  </div>

                  
            <div className="flex flex-col justify-center item-center z-10">
               <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

                <div className="font-bold gradient-text text-center text-5xl pb-10 font-[DM_Sans]">{Text}</div>
                <div className="text-[#f3f4f6] text-center text-xl max-w-2xl mx-auto pb-10 font-[DM_Sans]">A curated selection of my recent projects spanning web design, branding, and digital experiences.</div>
                </FadeContent>
            </div>
            
             <div className="relative h-[600px] overflow-hidden font-[DM_Sans]">
  <FlowingMenu items={demoItems} />
</div>
        </div>
        
          
    );

}

export default Projects;