import React, {useState, useEffect} from 'react';
import { GithubFilled, LinkedinFilled, BehanceSquareFilled } from "@ant-design/icons";

function Navbar() {



  return (
    <div className="flex justify-between items-center bg-[#020203] text-white p-6 row-start-1 sticky top-0 z-50">
      <h1 className='text-xl font-bold'><span className='gradient-text'>Dev</span> Folio</h1>

      <div>
        <ul className='flex gap-5'>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>HOME</a></li>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>PROJECTS</a></li>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>SKILLS</a></li>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>CERTIFICATES</a></li>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>ABOUT</a></li>
            <li><a href="" className='hover:text-[#a855f7] font-thin text-sm text-[#f3f4f6]'>CONTACT</a></li>
        </ul>
      </div>

    <div className='flex gap-5'>
        <a href=""  className='hover:text-[#a855f7] text-[#f3f4f6] text-2xl'><GithubFilled /></a>
        <a href="" className='hover:text-[#a855f7] text-[#f3f4f6] text-2xl'><LinkedinFilled /></a>
        <a href="" className='hover:text-[#a855f7] text-[#f3f4f6] text-2xl'><BehanceSquareFilled /></a>
    </div>

    </div>
  );
}

export default Navbar;