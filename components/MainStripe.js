import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";

function MainStripe() {
    return (
        <div className="z-20 flex w-screen md:justify-end justify-center w-screen md:w-2/5 overflow-hidden">
            <div className="h-screen w-3/4 md:w-4/5 lg:w-3/5 bg-black float-right p-4">
                <h1 className="text-white text-7xl" style={{fontFamily: "Bebas Neue"}}> Neev Mangal</h1>
                <h3 className="text-white text-xl tracking-wider mb-2" style={{fontFamily: "Rajdhani"}}> Thinker ● Designer ● Creator </h3>
                <hr style={{color: "white"}} />

            </div>
        </div>
    )
}

export default MainStripe
