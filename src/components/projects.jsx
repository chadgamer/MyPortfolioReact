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
        <div className="row-start-3 bg-[#020203] flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-poppins text-4xl font-bold text-center mt-16 gradient-text">
                Projects
            </h1>
            <p className="text-[#f3f4f6]">Explore my latest work across UI/UX design, web and mobile development. Each project<br />demonstrates my approach to solving design and technical challenges.</p>
            </div>

            <div className="flex gap-4">
                {buttons.map((button) => (
                    <button
                        key={button.name}
                        onClick={() => setActiveButton(button.name)}
                        className={`px-4 py-2 rounded-sm text-sm transition-colors duration-200 ${
                            activeButton === button.name
                                ? 'bg-[#a855f7] text-white'
                                : 'text-white bg-[#111827] hover:bg-[#1f2937]'
                        }`}
                    >
                        {button.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 max-md:grid-cols-1">
                {projects.map((project) => (
                  <div className="bg-[#111827] flex flex-col justfiy-center item-center rounded-b-lg w-100 hover:scale-104 transition delay-300 duration-300 ease-in-out">
                        <img src={project.image} alt="" className="h-50 w-200 rounded-t-lg" />

                        <div className="p-6">
                            <h3 className="text-white text-lg">{project.name}</h3>
                            <p className="text-[#f3f4f6] text-xs pt-2">{project.description}</p>
                        </div>

                        <div className="pl-6 pb-4 flex gap-2">
                           {project.tools.map((tool, index) => (
                    <img src={tool} alt="" className="h-5" />
                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Projects;