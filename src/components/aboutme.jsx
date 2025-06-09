import React from "react";
import pic from "../assets/sharad-kachhi-hluitBPPJBI-unsplash.jpg"
import AnimatedContent from "./reactbits/animatedcontent"
import Particles from './reactbits/particles';
import FadeContent from './reactbits/fadecontent';


export default function Aboutme () {

    const Text = "<About Me />";

    return (
        <section class="py-10 bg-[#020203] sm:py-16 lg:py-24 relative row-start-2">

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

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">

         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

                <div className="font-bold gradient-text text-center text-5xl pb-40 font-[DM_Sans]">{Text}</div>
                </FadeContent>

        <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div class="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">


                <div class="relative max-w-xs ml-auto">
                    <div class="overflow-hidden aspect-w-3 aspect-h-4">
                        <img class="object-cover w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/man-woman-discussing.jpg" alt="" />
                    </div>

                    <div class="absolute bottom-0 -left-16">
                        <div class="bg-yellow-300">
                            <div class="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                                <svg class="w-9 sm:w-14 h-9 sm:h-14" xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span class="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl"> 2 </span>
                                <span class="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base"> Years of<br />experience </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:order-1">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl ">Grow business with Celebration.</h2>
                <p class="mt-4 text-base leading-relaxed text-[#f3f4f6] font-[DM_Sans]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <a href="#" title="" class="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 font-[DM_Sans]" role="button"> Start exploring </a>
            </div>
        </div>
    </div>
</section>


    );


}