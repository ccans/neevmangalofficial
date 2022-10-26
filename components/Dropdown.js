import Dropdowncomponent from "./Dropdowncomponent";

function DropDown({droppedDown, toggleDropDown}) {
    return (
        <div className={droppedDown ? "fixed w-screen h-screen bg-white z-30 overflow-hidden transition-all md:w-0"   : "fixed w-0 h-screen bg-white z-20 overflow-hidden transition-all"}>
        <div className="flex-column items-center grid justify-items-center w-screen bg-white h-auto py-10 heightBar" >
            <Dropdowncomponent toggleDropDown={toggleDropDown} droppedDown={droppedDown} title="Home" address="" />
            <Dropdowncomponent toggleDropDown={toggleDropDown} droppedDown={droppedDown} title="About Me" address="aboutme" />
            <Dropdowncomponent toggleDropDown={toggleDropDown} droppedDown={droppedDown} title="Astrophotography" address="astrophotography" />
            <Dropdowncomponent toggleDropDown={toggleDropDown} droppedDown={droppedDown} title="Writing" address="writing" />
        </div>
        </div>
    )
}

export default DropDown
