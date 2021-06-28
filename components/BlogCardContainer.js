import BlogCardWrapper from "./BlogCardWrapper"
// in the future, this should dynamically create blogcards and put them on the page instead of just having a static amount
// Make sure to get the "loading" animation (make a loading blogcard) when needed and the pop-up animation too

function BlogCardContainer() {

    const elements = [<BlogCardWrapper id="1" />, <BlogCardWrapper id="2" />, <BlogCardWrapper id="3" />];

    return (
        <div className="block flex-grow pt-4">
            {/* Something like "recent blog entries" at the top here */}
            {elements}
        </div>
    )
}

export default BlogCardContainer
