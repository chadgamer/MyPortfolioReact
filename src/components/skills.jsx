import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  CategoryScale, 
  BarElement,  
  LinearScale 
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import Particles from './reactbits/particles';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  CategoryScale, 
  BarElement,     
  LinearScale 
);




function Skills() {

const data = {
    labels: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind',
        'Web Design',
    ],
    datasets: [{
        label: 'Skill Level (%)',  // Added this line
        data: [90, 90, 85, 80, 80, 75],
        fill: true,
        backgroundColor: 'rgba(179, 44, 213, 0.2)',
        borderColor: '#a855f7',
        pointBackgroundColor: '#a855f7',
        pointBorderColor: '#f3f4f6',
        pointHoverBackgroundColor: '#f3f4f6',
        pointHoverBorderColor: '#a855f7'
    }]
};

const options = {
    scales: {
        r: {
            angleLines: { display: false },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
                backdropColor: 'transparent',
                color: '#f3f4f6',
            },
            pointLabels: {
                color: '#f3f4f6',
                font: {
                    size: 16
                }
            },
            grid: {
                color: '#374151',
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: '#f3f4f6',
                font: {
                    size: 14
                }
            }
        }
    }
};
  


const barlabels = ['HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind',
    'Web Design',];
const bardata = {
  labels: barlabels,
  datasets: [{
    axis: 'y',
    label: 'My Year of Experience',
    data: [2, 2,0.5, 0.5, 0.5,2,3],
    fill: false,
    backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(153, 102, 255)',
      'rgb(153, 102, 255)',
      'rgb(153, 102, 255)',
      'rgb(153, 102, 255)',
      'rgb(153, 102, 255)',
    ],
    borderWidth: 1
  }]
};

const barOptions = {
    indexAxis: 'y',
    scales: {
        x: {
            beginAtZero: true,
            ticks: {
                font: {
                    size: 14
                },
                color: '#f3f4f6'
            }
        },
        y: {
            ticks: {
                font: {
                    size: 14
                },
                color: '#f3f4f6'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: '#f3f4f6',
                padding: 20,
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        }
    }
};



    return (
        <div className="row-start-5 bg-[#020203] relative ">
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
            <div>
                <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-poppins text-4xl font-bold text-center mt-16 gradient-text font-[DM_Sans]">
                Skills & Expertise
            </h1>
            <p className="text-[#f3f4f6] font-[DM_Sans]">My technical toolkit and design expertise that I bring to every project, continuously evolving<br />through learning and practical application.</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-20 gap-10">
                {/* 1st card */}
                <div className="grid grid-col-2 items-center justify-center z-10 relative">

                    <div className="col-start-1 bg-[#030405]  w-200 h-170 m-10 flex flex-col items-center justify-center p-6 rounded-2xl gap-4">
                        <h1 className="text-[#f3f4f6] text-2xl font-semibold mt-10 mb-10 font-[DM_Sans]">Technical Proficiency</h1>
                        <div className="h-130 w-150 flex items-center justify-center text-center">
                        <Radar data={data} options={options} />
                        </div>
                    </div>
                   

                    <div className="col-start-2 bg-[#030405]  w-200 h-170 m-10 flex flex-col items-center justify-center p-6 rounded-2xl gap-4">
                        <h1 className="text-[#f3f4f6] text-2xl font-semibold mt-10 mb-10 font-[DM_Sans]">Experience Level</h1>
                        <div className="h-150 w-150 flex items-center justify-center text-center">
                            <Bar data={bardata} options={barOptions} />
                        </div>
                    </div>

                </div>

                {/* 2nd card */}
                <div >

                </div>
            </div>
            </div>
        </div>
    );
}

export default Skills;
