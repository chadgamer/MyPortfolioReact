import React from 'react'
import Particles from './particles';

function Marquee() {
    return (
     <div className="marquee-wrapper row-start-3 relative">
      <div className="marquee-content">
        <div className="marquee-track">
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
        </div>
        <div className="marquee-track">
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
          <span>Projects • Skills • Certification</span>
        </div>
      </div>
    </div>
    )
}

export default Marquee;