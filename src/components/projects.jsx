import React, {useState} from "react";
import { Card } from 'antd';
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


function Projects() {

    const [activeButton, setActiveButton] = useState("all");
    const { Meta } = Card;

    const buttons = [
        { name: "all", label: "All Projects", key: "all" },
        { name: "web", label: "Web Design", key: "web" },
        { name: "mobile", label: "Mobile Design", key: "mobile" },
        { name: "webapp", label: "Web Apps", key: "webapp" },
    ];



    const projects = [
        {
            name: "Educational Blog Website",
            description: "A web design initiative created to help FEU students explore new perspectives on education through critical insights, inclusive voices, and future-ready ideas.",
            image: project1,
            tools: [figmaIcon,wixIcon],
            key: "web",
        },
        {
            name: "Bloom Café",
            description: "A cozy café experience online with warm aesthetics, easy navigation, and a beautifully curated menu display.",
            image: project2,
            tools: [figmaIcon],
            key: "mobile",
        },
        {
            name: "Personal Trainer Website",
            description: "A prenium shopping experience with intuitive navigation and seamless checkout process",
            image: project3,
            tools: [figmaIcon],
            key: "webapp",
        },
        {
            name: "Amihana Web portal",
            description: "A HOA web portal for the HOA of amihana residence to manage the 3 financial statement of the organization",
            image: project4,
            tools: [figmaIcon,reactIcon,firebaseIcon],
            key: "webapp",
        },
    ];
    
    
    return (
        <div>
            <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  reactbits
</ScrollFloat>
            
        </div>
          
    );

}

export default Projects;