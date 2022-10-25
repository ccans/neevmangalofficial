function Timeline({title, units}) {

    var elements=[];
    for(var i=0;i<units.length;i++){
            // push the component to elements!
        elements.push(<a className="timeline-text" href={"#" + units[i]}> {units[i]} </a>);
    }
    
    return (
        <div className="text-black flex flex-col pt-20 pl-4 fixed">
            <a className="bold"> {title} </a> 
            <div className="text-white flex flex-row">
                <div className="white"> </div> 
                <div className="text-black flex flex-col pl-4"> 
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default Timeline
