import React from "react";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <>
      <div className='w-screen px-80 bg-skin-background p-5 flex items-center'>
        <div className='w-1/2 h-20 flex items-center gap-5'>
          <img
            className='h-10 w-10 rounded'
            src='https://i.ibb.co/7XBZT5Y/logo.png'
            alt='Logo du site'
          />
          <h1 className='text-skin-base font-instrument-sans text-2xl font-semibold'>
            T.Bruand
          </h1>
        </div>
        <div className="w-1/2">
            <Navigation/>
        </div>
      </div>
    </>
  );
}

export default Header;
