import Link from 'next/link'

function Dropdowncomponent({title, address}) {
    return (
        <Link href={"/" + address}>  
            <div className="max-h-px">
            <p className = "cursor-pointer center">{title}</p> 
            </div>
        </Link>
    )
}

export default Dropdowncomponent
