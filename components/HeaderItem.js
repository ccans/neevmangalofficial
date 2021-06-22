
function HeaderItem({title, setCover, address}) {
    return (
        <div className = "content-center flex flex-wrap" onClick={() => setCover(true)}>
           <a href={address}><p className = "cursor-pointer mx-3 titillium-thin transition duration-500 text-gray-500 hover:text-black">{title}</p></a> 
        </div>
    )
}

export default HeaderItem
