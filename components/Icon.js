import React, { useState } from 'react';

function Icon({droppedDown, toggleDropDown}) {
    
      return (
        <div
          onClick={() => toggleDropDown(!droppedDown)}
          className={droppedDown ? "rotate h-7 m-5 animate-pulse" : "rotate-back h-7 m-5 animate-pulse"}
          >

        <img src="https://img.icons8.com/ios-filled/50/000000/diamond--v1.png"
          className="h-7 m-0 md:m-5 md:animate-pulse "
        />

        </div>
      );
    }

export default Icon
