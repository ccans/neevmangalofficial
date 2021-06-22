import Header from "./Header";
import Dropdown from "./Dropdown";
import Coverpage from './Coverpage';
import React, { useState } from 'react';

export default function Layout({ children }) {
    const [droppedDown, toggleDropDown] = useState(false);
    const [coverPageDown, setCover] = useState(false);
    return (
        <div>
            <Header droppedDown={droppedDown} toggleDropDown={toggleDropDown} setCover={setCover}/>
            <Dropdown droppedDown={droppedDown} />
            <Coverpage coverPageDown={coverPageDown} setCover={setCover}/>
            {children}
        </div>
    )
  }