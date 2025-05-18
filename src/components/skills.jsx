import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);




function Skills() {

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    data: [28, 48, 40, 19, 96, 27, 100],
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
  };




    return (
        <div className="row-start-4 bg-[#1F2937]">
            <div>
                <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-poppins text-4xl font-bold text-center mt-16 gradient-text">
                Skills & Expertise
            </h1>
            <p className="text-[#f3f4f6]">My technical toolkit and design expertise that I bring to every project, continuously evolving<br />through learning and practical application.</p>
            </div>

            <div >
                {/* 1st card */}
                <div className="grid grid-col-2 items-center justify-center">

                    <div className="col-start-1 bg-[#111827] w-200 h-170 m-10 flex flex-col items-center justify-center p-6 rounded-2xl gap-4">
                        <h1 className="text-[#f3f4f6] text-2xl font-semibold mt-10">Technical Proficiency</h1>
                        <div className="h-130 w-150 flex items-center justify-center text-center">
                        <Radar data={data} options={options} />
                        </div>
                    </div>
                   

                    <div className="col-start-2 bg-[#111827] w-200 h-170 m-10 flex flex-col items-center justify-center p-6 rounded-2xl gap-4">
                        <h1 className="text-[#f3f4f6] text-2xl font-semibold mt-10">Experience Level</h1>
                        <div className="h-130 w-150 flex items-center justify-center text-center">
                        <Radar data={data} options={options}/>
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
