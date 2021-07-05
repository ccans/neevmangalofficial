import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";

function MainStripe() {
    return (
        <div className="z-20 flex w-screen md:justify-end justify-center w-screen md:w-1/3 overflow-hidden">
            <div className="h-screen w-3/4 w-full bg-black float-right p-4 dark:bg-white">
                <h1 className="dark:text-black text-white text-7xl tracking-wide" style={{fontFamily: "Bebas Neue"}}> Neev Mangal</h1>
                <h3 className="dark:text-black text-white text-xl tracking-wider mb-2" style={{fontFamily: "Rajdhani"}}> Thinker ● Designer ● Creator </h3>
                <hr style={{color: "white"}} />
                <h3 className="dark:text-black text-white mt-4 font-medium" style={{fontFamily: "Rajdhani"}}> This website is the culmination of 6 years of front and back-end programming experience. I designed and built the whole thing myself, and it embodies who I am. Take a look around!<br /> <br /> <strong className="font-semibold"> Welcome to my mind </strong></h3>
                <div className="flex flex-row"> 
                <img src="https://img.icons8.com/dotty/80/ffffff/react.png"/>
                <img style={{height: 80}} src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" />
                <img style={{height: 80}} src="https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" />
                <img style={{height: 80}} src="https://img.icons8.com/material-outlined/96/ffffff/icons8-new-logo.png"/>
                </div>
            </div>
        </div>
    )
}

export default MainStripe
