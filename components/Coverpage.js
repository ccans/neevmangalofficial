function Coverpage({coverPageDown, setCover}) {
    return (
        <div onClick={() => setCover(false)} className={coverPageDown ? "fixed w-screen h-screen bg-black z-30 transition-all duration-1000 "   : "overflow-hidden fixed w-screen h-0 bg-black z-30 transition-all duration-1000"}>
            
            <div className={coverPageDown ? "grid justify-items-center h-screen items-center m-0 md:m-5 animate-pulse transition-all"   : "h-screen"}>
            <svg className={coverPageDown ? "opacity-100" : "opacity-0"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="100" height="100"
viewBox="0 0 172 172"
style={{fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}} ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M84.66969,10.36031l-37.35625,39.6675l8.34469,-39.6675zM116.15375,10.36031l8.50594,39.6675l-36.95312,-39.6675zM122.95313,58.48h-73.93313l36.98,-39.76156zM38.56563,58.48h-34.23875l43.92719,-46.21156zM38.96875,65.36l33.47281,88.2575l-68.37,-88.2575zM46.44,65.36h79.12l-39.56,102.56844zM133.4075,58.48l-9.86312,-46.39969l43.84656,46.39969zM99.58531,153.55031l33.45937,-88.19031h34.76281z"></path></g></g></svg>
            </div>
        </div>
    )
}

export default Coverpage
