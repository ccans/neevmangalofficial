import BlogBoxCard from "./BlogBoxCard"

function BlogBox() {

    const elements = [<BlogBoxCard id="1" />, <BlogBoxCard id="2" />, <BlogBoxCard id="3" />];

    return (
        <div className="flex w-full bg-white">
            {elements}
        </div>
    )
}


export default BlogBox