import "@fontsource/roboto";
import "@fontsource/inconsolata/300.css";
import "@fontsource/raleway";



function BlogDocTwo({title, textArr, boldArr, imageLink}) {

    var elements = [];

    for(var i=0;i<textArr.length;i++){
        // push the component to elements!
        elements.push(<a className={boldArr[i] ? "subtitle bold" : "" }> {textArr[i]} <br /> <br /> </a>);
    }

    return (
        <div className="text-black" style={{minHeight: "100%", borderRadius: "25px"}}>
            <img style={{borderRadius: "25px", margin: "auto"}} src={imageLink} />
            <div className="sm:px-10 md:px-20 pt-12 text-box" style={{fontFamily: "Inconsolata" }}>
            <h1 className="title" > {title} </h1>
            {elements}
            </div>

        </div>
    )
}

export default BlogDocTwo
