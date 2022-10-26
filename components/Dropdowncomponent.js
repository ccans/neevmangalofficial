import Link from 'next/link'

function Dropdowncomponent({toggleDropDown, droppedDown, title, address}) {
    return (
        <Link href={"/" + address} onClick={() => toggleDropDown(!droppedDown)}>  
            <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center"}}>
            <p className = "cursor-pointer center" style={{fontFamily: 'Oswald', fontSize: "30px", margin: "auto"}} onClick={() => toggleDropDown(!droppedDown)}>{title}</p> 
            </div>
        </Link>
    )
}

export default Dropdowncomponent
