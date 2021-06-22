function HeaderItem({title}) {
    return (
        <div className = "content-center flex flex-wrap">
           <p className = "cursor-pointer mx-3 titillium-thin transition duration-500 text-gray-500 hover:text-black">{title}</p> 
        </div>
    )
}

export default HeaderItem
