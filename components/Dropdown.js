import Dropdowncomponent from "./Dropdowncomponent";

function DropDown({droppedDown}) {
    return (
        <div className={droppedDown ? "fixed w-screen h-screen bg-white z-30 overflow-hidden transition-all md:w-0"   : "fixed w-0 h-screen bg-white z-20 overflow-hidden transition-all"}>
        <div className="flex-column items-center grid justify-items-center w-screen bg-white h-screen p-20" >
            <Dropdowncomponent title="Explore" address="blog" />
            <Dropdowncomponent title="About Me" address="aboutme" />
            <Dropdowncomponent title="Accomplishments" address="" />
        </div>
        </div>
    )
}

export default DropDown
