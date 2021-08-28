import Link from 'next/link'

function HeaderItem({title, setCover, address}) {
    return (
        <div className = "content-center flex flex-wrap" onClick={() => setCover(false)}>
           <Link href={"/" + address}><p className = "cursor-pointer mx-3 titillium-thin transition duration-500">{title}</p></Link> 
        </div>
    )
}

export default HeaderItem
