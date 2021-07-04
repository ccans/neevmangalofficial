import BlogCardWrapper from "./BlogCardWrapper"
// in the future, this should dynamically create blogcards and put them on the page instead of just having a static amount
// Make sure to get the "loading" animation (make a loading blogcard) when needed and the pop-up animation too
import "@fontsource/bebas-neue";

function BlogCardContainer() {

    const elements = [<BlogCardWrapper id="1" />, <BlogCardWrapper id="2" />, <BlogCardWrapper id="3" />, <BlogCardWrapper id="4" />];

    return (
        <div className="block flex-grow pt-4 overflow-hidden h-auto" style={{boxShadow: "0 8px 6px -6px black"}}>

            <div className="pl-12" > 
                <h1 className="text-7xl tracking-wide dark:text-white" style={{fontFamily: "Bebas Neue"}}> Blog </h1>
            </div>
            {elements}
        </div>
    )
}

export default BlogCardContainer
