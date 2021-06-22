import Dropdowncomponent from "./Dropdowncomponent";

function DropDown({droppedDown}) {
    return (
        <div className={droppedDown ? "fixed w-screen h-screen bg-white z-10 overflow-hidden transition-all md:w-0"   : "fixed w-0 h-screen bg-white z-20 overflow-hidden transition-all"}>
        <div className="flex-column items-center grid justify-items-center w-screen bg-white h-screen p-20" >
            <Dropdowncomponent title="Explore" />
            <Dropdowncomponent title="About Me" />
            <Dropdowncomponent title="Accomplishments" />
        </div>
        </div>
    )
}

export default DropDown
