import React from 'react'
import Link from 'next/link'


function ProjectCard({backgroundCol, title, img, address}) {
  return (
    <Link href={"/" + address}>
      <div style={{width: "30vw", height: "30vw", maxHeight: "30vw", maxWidth: "30vw", margin: "50px", backgroundColor: backgroundCol, fontFamily: "Roboto', sans-serif"}} 
      className="font-light text-4xl justify-center items-center text-center flex flex-col rounded-lg shadow-xl flex-grow border-4 border-black hover:-translate-y-1 hover:shadow-2xl hover:border-6"> 
        <img style={{flexGrow: "1", height: "60%", padding: "4%"}} src={img} />
        <div style={{flexGrow: "1", height: "40%"}} className='flex-grow text-white'> {title} </div>  
      </div>
    </Link> 
  )
}
4
export default ProjectCard