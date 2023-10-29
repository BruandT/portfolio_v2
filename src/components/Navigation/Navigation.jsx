import React from "react";

function Navigation() {
  return (
    <>
      <ul className='flex gap-10'>
        <li className='text-xl font-instrument-sans text-skin-base'>
          <span className='text-xl text-skin-color'>0.</span> About
        </li>
        <li className='text-xl font-instrument-sans text-skin-base'>
          <span className='text-xl text-skin-color'>1.</span> Skills
        </li>
        <li className='text-xl font-instrument-sans text-skin-base'>
          <span className='text-xl text-skin-color'>2.</span> Projects
        </li>
        <li className='text-xl font-instrument-sans text-skin-base'>
          <span className='text-xl text-skin-color'>3.</span> Contact
        </li>
      </ul>
    </>
  );
}

export default Navigation;
