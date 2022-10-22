import Link from 'next/link'

function HeaderItem({title, address}) {
    return (
        <div className = "content-center flex flex-wrap">
           <Link href={"/" + address}><p className = "cursor-pointer mx-3 titillium-thin transition duration-500">{title}</p></Link> 
        </div>
    )
}

export default HeaderItem
