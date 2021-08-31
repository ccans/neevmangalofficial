import React, { useState } from 'react';

function Icon({droppedDown, toggleDropDown, switchTheme, theme, type}) {
    
  function masterSwitch() {
    switchTheme(!theme);
    toggleDropDown(!droppedDown);
    // toggleFloat(!float);
  }

      return (
        <div
          onClick={() => masterSwitch()}
          className={droppedDown ? "rotate h-7 m-5 animate-pulse flex justify-center" : "rotate-back h-7 m-5 animate-pulse flex justify-center"}
          >

        <img src={type ? "https://img.icons8.com/ios-filled/50/000000/diamond--v1.png" : "https://img.icons8.com/ios-filled/50/FFFFFF/diamond--v1.png"}
          className="h-7 m-0 md:animate-pulse "
        />

        </div>
      );
    }

export default Icon
