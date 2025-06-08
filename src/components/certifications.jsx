import React from "react";
import CardSwap, { Card } from "./reactbits/cardswap";
import Particles from './reactbits/particles';
import Certificate1 from '../assets/UC-3c865297-566f-4956-a7ff-5c1233a53b11.jpg';
import Certificate2 from '../assets/UC-3df8e3f7-e8bf-4c19-9887-dbb58b5c9dce.jpg';
import Certificate3 from '../assets/UC-4d031807-67f7-4089-854f-4d9f1b80b865.jpg';
import Certificate4 from '../assets/UC-9fc1e534-cb01-430f-9a6a-a173575b3a13.jpg';
import Certificate5 from '../assets/UC-48bff25b-8215-433f-bc97-39a923821794.jpg';
import Certificate6 from '../assets/UC-638525dc-8286-4e4e-b7b3-1507e598506b.jpg';
import Certificate7 from '../assets/UC-a9883172-9460-4915-bd6e-227ec8d6f4e6.jpg';
import Certificate8 from '../assets/UC-ca801908-d4a2-4d91-8974-ed72df23ac14.jpg';
import Certificate9 from '../assets/UC-ceb17b9a-3546-44fe-8c63-58f9fc131844.jpg';
import Certificate10 from '../assets/UC-da3d83ed-9d52-437a-b6d5-995d631ab76b.jpg';
import Certificate11 from '../assets/6865cdc7-b48a-4785-af8e-ba079d8f976d.jpg';
import Certificate12 from '../assets/885669ff-0752-4065-b5ef-827caa9ed426.jpg';
import AnimatedContent from "./reactbits/animatedcontent";

function Certifications() {

  const certis = [
    {
      title: "Certificate 1",
      image: Certificate1,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 2",
      image: Certificate2,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 3",
      image: Certificate3,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 4",
      image: Certificate5,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 5",
      image: Certificate5,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 6",
      image: Certificate6,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 7",
      image: Certificate7,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 8",
      image: Certificate8,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 9",
      image: Certificate9,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 10",
      image: Certificate10,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 11",
      image: Certificate11,
      description: "Description for certificate 1"
    },
    {
      title: "Certificate 12",
      image: Certificate12,
      description: "Description for certificate 1"
    },
    
  ];

  return (
    <div className="row-start-6 bg-[#020203] relative pt-100 pb-100">
      <div className='absolute inset-0 z-5'>
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

      <div className="flex flex-col justify-center items-center gap-10 z-10">
        <div>
      <h2 className="text-white font-bold text-5xl font-[DM_Sans]">Certificates</h2>
      </div>

      <div>
      <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={3000}
    pauseOnHover={true}
  >
    {certis.map((certi,index)=>{
      return (
        <Card>
          <img src={certi.image} alt="" className="rounded-xl h-100" />
        </Card>
      );
    })}
  </CardSwap>
 
  </div>
  </div>
    </div>
  );
}

export default Certifications;